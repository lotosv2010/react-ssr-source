import {SET_SESSION} from '../action-types';
import axios from 'axios';

export default {
  login(formData) {
    return async function(dispatch, getState, request) {
      const url = '/api/login';
      const {data: {data}} = await request.post(url, formData);
      dispatch({
        type: SET_SESSION,
        payload: data
      })
    }
  },
  logout() {
    return async function(dispatch, getState, request) {
      const url = '/api/logout';
      const {data: {data}} = await request.post(url);
      dispatch({
        type: SET_SESSION,
        payload: data
      })
    }
  },
  getInfo() {
    return async function(dispatch, getState, request) {
      const url = '/api/info';
      const {data: {data}} = await request.get(url);
      dispatch({
        type: SET_SESSION,
        payload: data
      })
    }
  }
}