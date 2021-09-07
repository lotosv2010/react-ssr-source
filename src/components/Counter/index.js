import React from 'react';
import {connect} from 'react-redux';
import actions from '../../redux/actions/counter';
import {Redirect} from 'react-router-dom';

function Counter(props) {
  const {number, increment, user} = props;

  return user ? (
    <div>
      <p>{number}</p>
      <button onClick={increment}>+</button>
    </div>
  ): <Redirect to={{pathname: '/login', state: {from: '/counter'}}} />;
}

const mapToState = (state) => ({...state.counter, ...state.session})

export default connect(mapToState, actions)(Counter);
