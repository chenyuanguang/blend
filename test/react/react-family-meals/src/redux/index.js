import { createStore } from 'redux';
import reducer from './reducer';

export { default as actions } from './actions';
export * from './type';

export default createStore(reducer);
