/*
 * @Author: your name
 * @Date: 2020-08-21 23:22:59
 * @LastEditTime: 2020-08-24 15:52:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blend/test/react/react-family-meals/blend.config.js
 */
const path = require('path');
module.exports = {
    type: 'ssr',
    base: {
        publicPath: '',
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
            '@services': path.resolve(process.cwd(), './src/services'),
            '@mock': path.resolve(process.cwd(), './mock'),
        },
    },
    //   开发环境
    dev: {
        host: 'localhost',
        port: 9099,
    },
};
