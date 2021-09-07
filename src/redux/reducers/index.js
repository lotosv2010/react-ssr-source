import {combineReducers} from 'redux';
import counter from './counter';
import home from './home';
import session from './session';

const reducers = combineReducers({
  counter,
  home,
  session
});
export default reducers;