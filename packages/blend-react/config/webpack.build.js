#!/usr/bin/env node
var config = require('./config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const baseWebpack = require('./webpack.base.js');

module.exports = merge(baseWebpack, {
    devtool: false,
    optimization: {
        splitChunks: {
            chunks: 'initial', // 必须三选一： "initial" | "all"(默认就是all) | "async"
            minSize: 0, // 最小尺寸，默认0
            minChunks: 1, // 最小 chunk ，默认1
            maxAsyncRequests: 1, // 最大异步请求数， 默认1
            maxInitialRequests: 1, // 最大初始化请求书，默认1
            name: () => {}, // 名称，此选项课接收 function
            cacheGroups: {
                // 这里开始设置缓存的 chunks
                priority: '0', // 缓存组优先级 false | object |
                vendor: {
                    // key 为entry中定义的 入口名称
                    chunks: 'initial', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
                    test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk
                    name: 'common.js', // 要缓存的 分隔出来的 chunk 名称
                    minSize: 0,
                    minChunks: 1,
                    enforce: true,
                    maxAsyncRequests: 1, // 最大异步请求数， 默认1
                    maxInitialRequests: 1, // 最大初始化请求书，默认1
                    reuseExistingChunk: true, // 可设置是否重用该chunk（查看源码没有发现默认值）
                },
            },
        },
    },

    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "common.js",
        //     filename: "js/common.js"
        // }),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: config.base.templatePath,
            minify: config.base.htmlMinify,
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                include: /\/src/,
                // compress: {
                //     warnings: false,
                // },
                sourceMap: config.build.uglifyJsSourceMap,
                parallel: true, //使用多进程并行运行和文件缓存来提高构建速度
            },
        }),
    ],
});
