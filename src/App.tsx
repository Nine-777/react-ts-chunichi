import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>中日ドラゴンズ安打数管理表</h1>
      <input/>
      <table>
        <tr>
          <th>名前</th>
          <th>安打数</th>
          <th></th>
        </tr>
        <tr>
          <td>岡林</td>
          <td>1</td>
          <td>
            <button>+</button>
            <button>-</button>
          </td>
        </tr>
        <tr>
          <td>石川</td>
          <td>1</td>
          <td>
            <button>+</button>
            <button>-</button>
          </td>
        </tr>
        <tr>
          <td>木下</td>
          <td>1</td>
          <td>
            <button>+</button>
            <button>-</button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default App;
