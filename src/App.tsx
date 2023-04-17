import React, { useState } from "react";
import logo from './logo.svg';
import Button from '@mui/material/Button';
import Counter from './components/Counter';
import './App.css';
import { countReset } from "console";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>中日ドラゴンズ安打数管理表</h1>
      <input type="text"/>
      <Button variant="contained" color="primary">確定</Button>
      <table>
        <tr>
          <th>名前</th>
          <th>安打数</th>
          <th></th>
        </tr>
        <tr>
          <td>岡林</td>
          <td>
            <Counter />
            <Button variant="contained" color="primary" onClick={() => count > 0 && setCount(count - 1)}>-</Button>
          </td>
        </tr>
        <tr>
          <td>石川</td>
          <td>
            <Counter />
            <Button variant="contained" color="primary" onClick={() => count > 0 && setCount(count - 1)}>-</Button>
          </td>
        </tr>
        <tr>
          <td>木下</td>
          <td>
            <Counter />
            <Button variant="contained" color="primary" onClick={() => count > 0 && setCount(count - 1)}>-</Button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
