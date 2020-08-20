/*
 * @Author: your name
 * @Date: 2020-08-10 18:55:14
 * @LastEditTime: 2020-08-17 18:23:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-router-redux-auto/config/webpack.style.js
 */
const config = require('./config');
const autoprefixer = require('autoprefixer');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const createCssType = () => {
    switch (config.base.cssType) {
        case 'less': {
            return [
                {
                    test: /\.less$/,
                    use: [
                        miniCssExtractPlugin.loader,
                        '@teamsupercell/typings-for-css-modules-loader',
                        {
                            loader: 'css-loader',
                            options: { url: false },
                        },

                        {
                            loader: 'less-loader',
                        },
                    ],
                },
            ];
        }
        case 'sass': {
            return [
                {
                    test: /\.scss$/,
                    use: [
                        miniCssExtractPlugin.loader,
                        '@teamsupercell/typings-for-css-modules-loader',
                        {
                            loader: 'css-loader',
                            options: { url: false },
                        },
                        {
                            loader: 'sass-loader',
                        },
                        ...postcss,
                    ],
                },
            ];
        }
        default: {
            return [];
        }
    }
};

let postcss = [
    {
        loader: 'postcss-loader',
        options: {
            plugins: [
                autoprefixer({
                    remove: true,
                }),
            ],
        },
    },
];

let styleConfig = [
    // 使用css的index.module.css方式进行css的局部作用域划分,index.css全局样式
    {
        test: /\.css$/,
        use: [
            miniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: { url: false },
            },
            // ...postcss,
        ],
    },

    ...createCssType(),
];

module.exports = styleConfig;
