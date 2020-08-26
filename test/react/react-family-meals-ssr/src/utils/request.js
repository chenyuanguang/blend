/**
 * AJAX请求
 * @module @utils/request
 */

import axios from 'axios';

import parseError from './parse-error';

// ============================================================================

/**
 * @type {string}
 * API 地址前缀
 * - 如果提供了完整的 API URL，该前缀不会自动添加
 */
export const apiBase = (() => {
    if (__DEV__) {
        return 'http://test.com/';
    }
    return '/';
})();

/** @type {string[]} 必须存在的传入的属性 */
const required = ['url', 'method'];

const defaults = {
    timeout: 60 * 1000,
};

// ============================================================================

const request = (options = {}, ...args) => {
    if (typeof options === 'string') {
        const url = options;
        const thisSettings = args[0] || {};
        thisSettings.url = url;
        return request(thisSettings);
    }

    const settings = {
        ...defaults,
        ...options,
    };

    return new Promise((resolve, reject) => {
        if (
            required.some((option) => {
                if (typeof settings[option] === 'undefined') {
                    reject(new Error(`missing option: ${option}`));
                    return true;
                }
                return false;
            })
        ) {
            return;
        }

        // 处理请求 URL
        // 如果请求参数需要为 URL 参数，修改 URL，并删除对应的属性
        {
            /** 本次请求的参数是否需要为 URL 参数 */
            const appendDataToParams = settings.method.toLowerCase() === 'get';
            settings.url = getUrl(
                settings.url,
                appendDataToParams
                    ? settings.data || settings.query || settings.params
                    : undefined
            );
            if (appendDataToParams) {
                delete settings.data;
                delete settings.query;
                delete settings.params;
            }
        }

        // 如果数据为 FormData，追加默认参数
        if (settings.data instanceof FormData) {
            settings.data = appendFormData(settings.data);
        }

        if (__DEV__) {
            console.warn('即将请求', settings);
        }

        // 如果标记为需要下载，弹出新窗口进行下载，流程结束
        if (settings.ext && settings.ext.toLowerCase() === 'download') {
            window.open(settings.url);
            return;
        }

        axios(settings)
            .then((res) => {
                if (typeof res !== 'object') {
                    return reject(new Error('REQUEST_FAIL:UNKNOWN'));
                }
                if (res.status !== 200) {
                    return reject(
                        new Error(`REQUEST_FAIL:STATUS:${res.status}`)
                    );
                }

                if (typeof res.data !== 'object') {
                    return reject(new Error('REQUEST_FAIL:NO_DATA'));
                }

                const data = res.data;

                return resolve(data);
            })
            .catch((err) => {
                err = parseError(err);

                reject(err);
            });
    });
};

/**
 * 发起一个 AJAX 请求
 * @param {Object} settings 请求配置，参照 [axios](https://github.com/axios/axios)
 * @returns {Promise}
 */
export default request;

// ============================================================================

/** 生成默认数据 */
const getDefaults = () => {
    /** 默认 params */
    const defaults = {
        pf: 'h5',
        ctime: Math.floor(Date.now() / 1000),
    };

    for (const [key, value] of Object.entries(defaults)) {
        if (typeof value === 'undefined') {
            delete defaults[key];
        }
    }
    return defaults;
};

/**
 * 生成完整的 API 请求 URL
 * @param {string} api API 地址
 * @param {Object} [params] URL 参数，`?` 后面的内容，需要传入 key value 对应的对象
 * @returns {String}
 */
export const getUrl = (api, params = {}) => {
    // 如果提供的地址不是完整 HTML，添加前缀
    if (!api.includes('://')) {
        api = apiBase + (api.substr(0, 1) === '/' ? api.substr(1) : api);
    }

    api +=
        (api.includes('?') ? '&' : '?') +
        Object.entries({
            ...getDefaults(),
            ...params,
        })
            // eslint-disable-next-line no-unused-vars
            .filter(([_, value]) => typeof value !== 'undefined')
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join('&');

    return api;
};

/**
 * 将必要的数据追加到 formData 中
 * @param {FormData} formData
 * @returns {FormData}
 */
export const appendFormData = (formData) => {
    if (!(formData instanceof FormData)) {
        return formData;
    }

    for (const [key, value] of Object.entries(getDefaults())) {
        if (!formData.has(key)) {
            formData.append(key, value);
        }
    }

    return formData;
};
