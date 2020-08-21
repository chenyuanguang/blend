/*
 * @Author: chenyuanguang
 * @Date: 2020-08-10 18:55:14
 * @LastEditTime: 2020-08-12 16:33:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-router-redux-auto/config/webpack.dev.js
 */

var webpack = require('webpack');
var config = require('./config');
const { merge } = require('webpack-merge');
const baseWebpack = require('./webpack.base.js');
module.exports = merge(baseWebpack, {
    mode: 'development',
    devServer: {
        contentBase: config.dev.outputPath,
        host: config.dev.host,
        port: config.dev.port,
        watchContentBase: true,
        hot: true,
        inline: true,
        open: config.dev.browserOpen,
        before: config.dev.before,
        proxy: config.dev.proxy,
        historyApiFallback: true,
    },
    devtool: config.dev.devtool,
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
