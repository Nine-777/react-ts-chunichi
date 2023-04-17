import React, { useState } from 'react';
import Button from '@mui/material/Button';

type nameType = {
  userName: string;
};

export const Counter = (props: nameType) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <td>{ props.userName }</td>
      <td>{ count }</td>
      <Button variant="contained" color="primary" onClick={incrementCount}>+</Button>
      <Button variant="contained" color="primary" onClick={() => count > 0 && setCount(count - 1)}>-</Button>
    </div>
  );
}

export default Counter;
