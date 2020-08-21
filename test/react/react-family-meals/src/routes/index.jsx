import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from '@src/app';
import Index from '@pages/Index';
import ReduxDemo from '@pages/ReduxDemo';
import HooksDemo from '@pages/HooksDemo';
import TsDemo from '@pages/TsDemo';

function RouterConfig() {
    return (
        <Router>
            <App>
                <Route exact path="/" component={Index} />
                <Route exact path="/redux-demo" component={ReduxDemo} />
                <Route exact path="/hooks-demo" component={HooksDemo} />
                <Route exact path="/ts-demo" component={TsDemo} />
            </App>
        </Router>
    );
}

export default RouterConfig;
