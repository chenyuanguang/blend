/*
 * @Author: your name
 * @Date: 2020-08-17 11:33:51
 * @LastEditTime: 2020-08-17 14:06:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-template/src/locales/index.js
 */
import en from './en.json';
import zh from './zh.json';

export default () => {
    const search = window.location.href.match(/hl=\w+/);
    const type = search && search[0]?.split('=')[1];
    switch (type) {
        case 'en': {
            return [en, type];
        }
        default: {
            return [zh, type];
        }
    }
};
