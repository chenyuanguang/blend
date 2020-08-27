import React from 'react';

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import renderRoutes from './renderRoutes';
import { Provider } from 'react-redux';

import { Helmet } from 'react-helmet';
import renderAsset from './renderAsset';
// import request from '@src/utils/request';

export default (store, routes, req, context) => {
    // console.log(req.path);
    console.log(renderRoutes(routes));

    const { css, js } = renderAsset();
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                {renderRoutes(routes)}
            </StaticRouter>
        </Provider>
    );
    // console.log(content);
    // const helmet = Helmet.renderStatic();

    // const cssStr = context.css.length ? context.css.join('\n') : '';

    return `
			<html>
				<head>
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
