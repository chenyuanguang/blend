/*
 * @Author: chenyuanguang
 * @Date: 2020-08-10 18:55:14
 * @LastEditTime: 2020-08-11 15:56:54
 * @LastEditors: Please set LastEditors
 * @Description: chenyuanguang
 * @FilePath: /react-router-redux-auto/mock/data.js
 */
var Mock = require('mockjs');

// eslint-disable-next-line no-unused-vars
var Random = Mock.Random;

var list = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-100': [
        {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            price: Math.ceil(Math.random() * 9),
            name: '@cname',
            addr: '@city',
            content: '@cparagraph',
        },
    ],
});

module.exports = list;
