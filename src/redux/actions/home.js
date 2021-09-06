import {SET_HOME_LIST} from '../action-types';
import axios from 'axios';

export default {
  getList() {
    // 返回一个函数
    return async function(dispatch, getState) {
      const url = 'http://localhost:3002/api/users';
      const {data} = await axios.get(url);
      dispatch({
        type: SET_HOME_LIST,
        payload: data
      })
    }
  }
}