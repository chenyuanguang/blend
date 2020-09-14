import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '@src/app';
import routes from '@routes';
import renderRoutes from '../utils/renderRoutes';

function RouterConfig() {
    return (
        <Router>
            <App>{renderRoutes(routes)}</App>
        </Router>
    );
}

export default RouterConfig;
