/*
 * @Author: your name
 * @Date: 2020-08-20 16:11:22
 * @LastEditTime: 2020-08-20 18:09:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /blend/packages/blend-react/config/webpack.dev.js
 */
var webpack = require('webpack');
var config = require('./config');
const { merge } = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
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
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: config.base.templatePath,
            minify: config.base.htmlMinify,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
});
