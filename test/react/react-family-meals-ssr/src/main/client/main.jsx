import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@redux';
import Render from './render';
import renderRoutes from '../utils/renderRoutes';

ReactDOM.render(
    <Provider store={store}>
        <Render />,
    </Provider>,
    document.getElementById('root')
);
