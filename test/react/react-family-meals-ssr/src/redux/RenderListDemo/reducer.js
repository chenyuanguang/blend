/*
 * @Author: your name
 * @Date: 2020-08-10 18:55:14
 * @LastEditTime: 2020-08-11 14:37:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-router-redux-auto/src/redux/reducer.js
 */
import { RENDERLISTDATA } from './type';

const initState = {
    listData: 0,
};

export default (state = initState, actions) => {
    const { type } = actions;
    switch (type) {
        case RENDERLISTDATA:
            return { ...state, ...{ listData: actions.payload } };
        default:
            return state;
    }
};
