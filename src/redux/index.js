import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

export function getServerStore() { // 导出方法是防止服务端数据共享的问题
  return createStore(reducers, applyMiddleware(thunk, logger));
}

export function getClientStore() {
  // todo: 
  const initState = window.context.state;
  return createStore(reducers, initState, applyMiddleware(thunk, logger));
}