import {SET_HOME_LIST} from '../action-types';
import axios from 'axios';

export default {
  getList() {
    // 返回一个函数
    return async function(dispatch, getState, request) {
      // todo
      // 如果是服务器端数据，则直接访问API服务器
      // 如果是客户端，则要访问node服务器，让node服务器访问API服务
      const url = '/api/users';
      const {data} = await request.get(url);
      dispatch({
        type: SET_HOME_LIST,
        payload: data
      })
    }
  }
}