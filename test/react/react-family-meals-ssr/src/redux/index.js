import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

export { default as actions } from './actions';
import serverAxios from '../server/request';
export * from './type';
export const getStore = (req) => {
    // 改变服务器端store的内容，那么就一定要使用serverAxios
    return createStore(
        reducer,
        applyMiddleware(thunk.withExtraArgument(serverAxios(req)))
    );
};
export default createStore(reducer);
