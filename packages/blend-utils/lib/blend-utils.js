/*
 * @Author: your name
 * @Date: 2020-08-21 23:45:46
 * @LastEditTime: 2020-08-22 00:43:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blend/packages/blend-utils/lib/blend-utils.js
 */
'use strict';
const _ = require('lodash');
module.exports = {
    // 深度合并对象
    deepExtend(obj1, obj2) {
        function _deeExtend(obj1, obj2) {
            if (
                Object.prototype.toString.call(obj1) === '[object Object]' &&
                Object.prototype.toString.call(obj2) === '[object Object]'
            ) {
                for (const prop2 in obj2) {
                    //obj1无值,都有取obj2
                    if (!obj1[prop2]) {
                        obj1[prop2] = obj2[prop2];
                    } else {
                        //递归赋值
                        obj1[prop2] = _deeExtend(obj1[prop2], obj2[prop2]);
                    }
                }
            } else if (
                Object.prototype.toString.call(obj1) === '[object Array]' &&
                Object.prototype.toString.call(obj2) === '[object Array]'
            ) {
                // 两个都是数组，进行合并
                obj1 = obj1.concat(obj2);
            } else {
                //其他情况，取obj2的值
                obj1 = obj2;
            }
            return obj1;
        }
        return _deeExtend(obj1, obj2);
    },
    _,
};
