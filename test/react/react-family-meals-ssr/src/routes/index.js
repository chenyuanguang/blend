import React from 'react';
import App from '@src/app';
import NotFound from '@pages/NotFound';
import Index from '@pages/Index';
import ReduxDemo from '@pages/ReduxDemo';
import HooksDemo from '@pages/HooksDemo';
import TsDemo from '@pages/TsDemo';
import RenderListDemo from '@pages/RenderListDemo';

// 当我加载显示HOME组件之前，我希望调用Home.loadData方法，提前获取到必要的异步数据
// 然后再做服务器端渲染，把页面返回给用户
export default [
    {
        path: '/',
        component: App,
        // loadData: App.loadData,
        routes: [
            {
                path: '/',
                component: Index,
                exact: true,
                // loadData: Home.loadData,
                key: 'home',
            },
            {
                path: '/redux-demo',
                component: ReduxDemo,
                exact: true,
                key: 'ReduxDemo',
            },
            {
                path: '/hooks-demo',
                component: HooksDemo,
                exact: true,
                key: 'HooksDemo',
            },
            {
                path: '/ts-demo',
                component: TsDemo,
                exact: true,
                key: 'TsDemo',
            },
            {
                path: '/render-list-demo',
                component: RenderListDemo,
                exact: true,
                key: 'RenderListDemo',
                loadData: RenderListDemo.loadData,
            },
            {
                component: NotFound,
            },
        ],
    },
];
