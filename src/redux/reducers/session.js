import {SET_SESSION} from '../action-types';

const initState = {
  user: null,
  success: null,
  error: null
};

export default function(state = initState, action) {
  const {type, payload} = action
  switch (type) {
    case SET_SESSION:
      return payload;
    default:
      return state;
  }
}