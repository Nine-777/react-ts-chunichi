import { useState } from "react";
import Button from "@mui/material/Button";
import Counter from "./components/Counter";
import "./App.css";
import { usePlayers } from "./hooks/usePlayers";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const playersHooks = usePlayers();

  const handleSubmit = (value: string) => {
    const players = playersHooks.players;
    if (players.some((player) => player.name === value)) {
      playersHooks.incrementCount(value);
    } else {
      playersHooks.setPlayers([...players, { name: value, count: 0 }]);
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
      {playersHooks.players.map((player, idx) => (
        <Counter
          key={idx}
          player={player}
          incrementCount={playersHooks.incrementCount}
          decrementCount={playersHooks.decrementCount}
        />
      ))}
    </div>
  );
};

export default App;
