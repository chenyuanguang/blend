/*
 * @Author: your name
 * @Date: 2020-08-11 12:05:12
 * @LastEditTime: 2020-08-25 16:58:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-router-redux-auto/config/webpack.base.js
 */
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { bfs, efs, fs } = require('blend-fs');
const config = require('./config');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin'); // 顾名思义，把资源加到 html 里，那这个插件把 dll 加入到 index.html 里
const deviceHtml = require('./device');
const AutoDllPlugin = require('autodll-webpack-plugin');

if (!bfs.isExist(path.resolve(process.cwd(), './src/index.html'))) {
    deviceHtml();
}

const eslintTest = [
    {
        test: /\.(js|jsx|tsx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(process.cwd(), './src')], // 指定检查的目录,
        exclude: [path.resolve(process.cwd(), './node_modules')],
    },
];


module.exports = {
    entry: config.base.entry,
    output: {
        publicPath: config.base.publicPath, //打包后的文件再引用时，自动注入绝对路径
        path: config.base.outputPath,
        filename: 'js/' + config.base.outputFileName,
        chunkFilename: '[id]-[name]-[hash].js', //组件懒加载时的文件名字，以及存储
    },
    module: {
        rules: [
            ...(config.esLint.esLintUse ? eslintTest : []),
            ...require('./webpack.style.js'),
            {
                test: /\.js|.jsx|.tsx$/,
                use: ['babel-loader'],
            },

            {
                test: /\.(jpg|png|gif|ttf|woff|eot|svg)$/,
                use: ['url-loader'],
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.json$/,
                use: ['json-loader'],
                type: 'javascript/auto',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.css'],
        alias: config.base.aliases,
    },
    plugins: [
        new webpack.DllReferencePlugin({
            // 注意: DllReferencePlugin 的 context 必须和 package.json 的同级目录，要不然会链接失败
            context: path.resolve(process.cwd()),
            manifest: path.resolve(process.cwd(), './dist/react.manifest.json'),
        }),

        new htmlWebpackPlugin({
            filename: 'index.html',
            template: config.base.templatePath,
            minify: config.base.htmlMinify,
        }),
        new AddAssetHtmlPlugin({
            filepath: path.resolve(process.cwd(), './dist/_dll_react.js');,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(process.cwd(), './src/static'),
                    to: config.base.outputPath + '/static',
                    globOptions: {
                        ignore: ['.*'],
                    },
                },
            ],
        }),
        // 提取css

        new miniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        // 忽略d.ts文件
        new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
    ],
};
