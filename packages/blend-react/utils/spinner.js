const ora = require('ora');
const spinners = require('cli-spinners');

/**
 * 创建 Loading 动画 (使用 ora)
 * - 创建后自动开始 (start())
 * @param {Object} options `ora` 配置对象
 * @returns {Object} ora 对象
 */
module.exports = (options = {}) =>
    ora(
        Object.assign(
            {
                spinner: spinners.dots,
                color: 'cyan',
            },
            typeof options === 'string'
                ? {
                      text: options,
                  }
                : options
        )
    ).start();
