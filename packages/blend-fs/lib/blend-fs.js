/*
 * @Author: your name
 * @Date: 2020-08-21 15:29:32
 * @LastEditTime: 2020-08-21 15:35:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blend/packages/blend-fs/lib/blend-fs.js
 */
'use strict';
const fs = require('fs');
const { turn } = require('../../blend-react/config/webpack.style');
module.exports = {
    isExist(file) {
        try {
            fs.statSync(file);
            return true;
        } catch (error) {
            return false;
        }
    },
};
