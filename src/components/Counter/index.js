import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import actions from '../../redux/actions/counter';

function Counter(props) {
  const {number, increment, user, history} = props;

  useEffect(() => {
    if(!user) history.push({pathname: '/login', state: {from: '/counter'}});
  }, [])

  return (
    <div>
      <p>{number}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

const mapToState = (state) => ({...state.counter, ...state.session})

export default connect(mapToState, actions)(Counter);
