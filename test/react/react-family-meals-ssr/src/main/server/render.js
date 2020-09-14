import React from 'react';

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import renderRoutes from '../utils/renderRoutes';
import { Provider } from 'react-redux';

// import { Helmet } from 'react-helmet';
import renderAsset from './renderAsset';
// import request from '@src/utils/request';

export default (store, routes, req, context) => {
    // console.log(req.path);
    // console.log()
    // console.log(renderRoutes(routes));

    const { css, js } = renderAsset();
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                {renderRoutes(routes)}
            </StaticRouter>
        </Provider>
    );
    console.log('33333333');
    console.log(content);
    // const helmet = Helmet.renderStatic();

    // const cssStr = context.css.length ? context.css.join('\n') : '';

    return `
			<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="/public/static/css/reset.css">
				<title>Document</title>
				${css}
            </head>
            <body>
				<div id="root">${content}</div>
				<script>
						window.context = {
							state: ${JSON.stringify(store.getState())}
						}
					</script>
					${js}
            </body>
            </html>
	  `;
};
