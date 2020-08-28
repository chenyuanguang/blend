import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@redux';
import Router from '@routes';
import './app.css';

ReactDOM.render(
    <Provider store={store}>
        <Router />,
    </Provider>,
    document.getElementById('root')
);

// ReactDOM.render(<div>sdfsdsa</div>, document.getElementById('root'));
