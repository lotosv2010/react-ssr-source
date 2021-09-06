import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + 1);
  }
  return (
    <div>
      <p>{number}</p>
      <button onClick={add}>+</button>
    </div>
  );
}

export default Counter;
