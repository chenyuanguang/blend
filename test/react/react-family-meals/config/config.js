/*
 * @Author: your name
 * @Date: 2020-08-10 18:55:14
 * @LastEditTime: 2020-08-20 16:03:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-router-redux-auto/config/config.js
 */
var path = require('path');

module.exports = {
    // webpack基本配置
    base: {
        entry: path.join(__dirname, '../src/main.jsx'),
        outputPath: path.join(__dirname, '../dist'),
        outputFileName: '[id]-[name]-[hash].js',
        templatePath: './src/index.html',
        publicPath: 'http://localhost:8099/',
        htmlMinify: {
            removeComments: true, //去除注释
            collapseWhitespace: true, //去除空格
            removeAttributeQuotes: true, //移除属性的引号
            removeEmptyAttributes: true, //去除空属性
        },
        cssType: 'less', //采用哪种css的类型
        aliases: {
            '~': path.resolve(__dirname, '../'),
            '@src': path.resolve(__dirname, '../src'),
            '@assets': path.resolve(__dirname, '../src/assets'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@constants': path.resolve(__dirname, '../src/constants'),
            '@locales': path.resolve(__dirname, '../src/locales'),
            '@routes': path.resolve(__dirname, '../src/routes'),
            '@pages': path.resolve(__dirname, '../src/pages'),
            '@utils': path.resolve(__dirname, '../src/utils'),
            '@redux': path.resolve(__dirname, '../src/redux'),
            '@service': path.resolve(__dirname, '../src/service'),
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
        before: require('../mock/index'),
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
        esLintUse: true, //是否使用eslint
    },
};
