/*
 * @Author: your name
 * @Date: 2020-08-10 18:55:14
 * @LastEditTime: 2020-08-22 00:43:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-router-redux-auto/config/config.js
 */
var path = require('path');
const { deepExtend } = require('blend-utils');

module.exports = deepExtend(
    {
        // webpack基本配置
        base: {
            entry: path.join(process.cwd(), './src/main/client/main.jsx'),
            outputPath: path.join(process.cwd(), './dist'),
            outputFileName: '[id]-[name]-[hash].js',
            templatePath: './src/main/client/index.html',
            publicPath: '/',
            htmlMinify: {
                removeComments: true, //去除注释
                collapseWhitespace: true, //去除空格
                removeAttributeQuotes: true, //移除属性的引号
                removeEmptyAttributes: true, //去除空属性
            },
            cssType: 'less', //采用哪种css的类型
            aliases: {
                '~': path.resolve(process.cwd(), './'),
                '@src': path.resolve(process.cwd(), './src'),
                '@assets': path.resolve(process.cwd(), './src/assets'),
                '@components': path.resolve(process.cwd(), './src/components'),
                '@constants': path.resolve(process.cwd(), './src/constants'),
                '@locales': path.resolve(process.cwd(), './src/locales'),
                '@routes': path.resolve(process.cwd(), './src/routes'),
                '@pages': path.resolve(process.cwd(), './src/pages'),
                '@utils': path.resolve(process.cwd(), './src/utils'),
                '@redux': path.resolve(process.cwd(), './src/redux'),
                '@service': path.resolve(process.cwd(), './src/service'),
            },
        },
        //   开发环境
        dev: {
            host: 'localhost',
            port: 8099,
            browserOpen: true,
            devtool: 'cheap-module-eval-source-map',
            proxy: {
                '/apis': {
                    target: 'http://localhost:3000',
                    pathRewrite: {
                        '^/apis': '/api',
                    },
                    secure: false,
                },
            },
            before: require(path.resolve(process.cwd(), './mock/index')),
        },
        //   线上环境
        build: {
            uglifyJsSourceMap: false,
        },
        //   使用设备配置
        device: {
            type: 'pc',
            width: 750,
        },

        //   eslint相关配置
        esLint: {
            esLintUse: false, //是否使用eslint
        },
    },
    require(path.resolve(process.cwd(), './blend.config.js'))
);
