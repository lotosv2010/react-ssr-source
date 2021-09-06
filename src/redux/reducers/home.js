import {SET_HOME_LIST} from '../action-types';

const initState = {list: []};

export default function(state = initState, action) {
  const {type, payload} = action
  switch (type) {
    case SET_HOME_LIST:
      return {list: payload}
    default:
      return state;
  }
}