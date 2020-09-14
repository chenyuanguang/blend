import Koa from 'koa';
import koaStatic from 'koa-static';
// import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import render from './render';
import { getStore } from '@redux';
import routes from '@routes';
import path from 'path';
import mock from '@mock';

// const Koa = require('koa');
// const koaStatic = require('koa-static');
// const { matchRoutes } = require('react-router-config');
// const render = require('./render');
// const { getStore } = require('@redux');
// const routes = require('@routes');
// const path = require('path');
// const mock = require('@mock');

const app = new Koa();

//设置可访问的静态资源
//TODO:生产换需要删除此功能
app.use(koaStatic(path.resolve(process.cwd(), './')));

// app.use(
//     '/api',
//     proxy('http://47.95.113.63', {
//         proxyReqPathResolver: function (req) {
//             return '/ssr/api' + req.url;
//         },
//     })
// );
// app.use(async (ctx) => {
//     ctx.body = 123;
// });

app.use(mock.routes());
app.use(async function (ctx) {
    const req = ctx.request;

    const store = getStore(req);
    // 根据路由的路径，来往store里面加数据
    const matchedRoutes = matchRoutes(routes, req.path);
    // 让matchRoutes里面所有的组件，对应的loadData方法执行一次
    const promises = [];

    matchedRoutes.forEach((item) => {
        if (item.route.loadData) {
            const promise = new Promise((resolve, reject) => {
                item.route.loadData(store).then(resolve).catch(resolve);
            });
            promises.push(promise);
        }
    });

    Promise.all(promises).then(() => {
        console.log('23223233322233=============');
        const context = { css: [] };
        const html = render(store, routes, req, context);
        console.log('store', store);
        console.log(html);
        ctx.body = html;
    });
});

const server = app.listen(3000);
