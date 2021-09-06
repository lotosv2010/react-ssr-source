import React, { useState } from 'react';
import {connect} from 'react-redux';
import actions from '../../redux/actions/counter';

function Counter(props) {
  const {number, increment} = props;

  return (
    <div>
      <p>{number}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

const mapToState = (state) => ({...state.counter})

export default connect(mapToState, actions)(Counter);
