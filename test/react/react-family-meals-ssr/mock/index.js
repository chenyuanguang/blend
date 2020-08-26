/*
 * @Author: your name
 * @Date: 2020-08-10 18:55:14
 * @LastEditTime: 2020-08-20 15:41:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-router-redux-auto/mock/index.js
 */
let list = require('./data.js');
// 接口的开放
module.exports = function (app) {
    // eslint-disable-next-line no-unused-vars
    app.get('/api/data', function (req, res, next) {
        res.send(list);
    });
};
