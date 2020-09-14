import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import defaultReducer from './reducer';

// RenderListDemo相关
import RenderListDemoReducers from './RenderListDemo';
export * from './RenderListDemo';

const reducer = combineReducers({
    defaultReducer,
    RenderListDemoReducers,
});

export { default as actions } from './actions';
export * from './type';

export const getStore = (req) => {
    // 改变服务器端store的内容，那么就一定要使用serverAxios
    return createStore(reducer, applyMiddleware(thunk));
};
export default createStore(reducer, applyMiddleware(thunk));
