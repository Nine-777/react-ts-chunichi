import { useState } from "react";
import Button from "@mui/material/Button";
import Counter from "./components/Counter";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const [players, setPlayers] = useState([
    { name: "岡林", count: 0 },
    { name: "石川", count: 0 },
    { name: "木下", count: 0 },
  ]);

  const handleSubmit = (value: string) => {
    if (players.some((player) => player.name === value)) {
      // TODO: 登録済みの選手の場合、選手のカウントを1増やす
      alert("一致するのがあったよ");
    } else {
      setPlayers([...players, { name: value, count: 0 }]);
    }
  };

  return (
    <div>
      <h1>中日ドラゴンズ安打数管理表</h1>
      <input
        type="text"
        value={inputValue}
        placeholder="選手名を入力"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleSubmit(inputValue)}
      >
        確定
      </Button>
      <table>
        <tr>
          <th>名前</th>
          <th>安打数</th>
        </tr>
      </table>
      {players.map((player, idx) => (
        <Counter key={idx} userName={player.name} />
      ))}
    </div>
  );
};

export default App;
