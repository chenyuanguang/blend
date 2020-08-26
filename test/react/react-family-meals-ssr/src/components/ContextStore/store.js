/*
 * @Author: your name
 * @Date: 2020-08-17 10:14:55
 * @LastEditTime: 2020-08-17 17:02:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-template/src/components/ContextStore/store.js
 */
import React, { useReducer } from 'react';

export const initFilterState = {
    num: 0, // 显示数据
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'reset':
            return { ...state, ...action.payload };

        default: {
            return state;
        }
    }
};

const useDemoReducer = (initState = initFilterState) => {
    const [state, dispatch] = useReducer(reducer, {
        ...initFilterState,
        ...initState,
    });

    const reset = (value) => dispatch({ type: 'reset', payload: value });

    return [state, reset];
};
export const DemoContext = React.createContext();
export default useDemoReducer;
