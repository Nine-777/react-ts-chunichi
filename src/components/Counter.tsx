import React, { useState } from 'react';
import Button from '@mui/material/Button';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{ count }</p>
      <Button variant="contained" color="primary" onClick={incrementCount}>+</Button>
    </div>
  );
}

export default Counter;
