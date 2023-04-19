import { useState } from "react";
import { Player } from "../entities/player";

export const usePlayers = () => {
  const [players, setPlayers] = useState<Player[]>([
    { name: "岡林", count: 0 },
    { name: "石川", count: 0 },
    { name: "木下", count: 0 },
  ]);

  // playerのcountを上下させる関数を作る
  const incrementCount = (name: string) => {
    // うけとったnameの選手のカウントを+1する
    const newPlayers = players.map((player) => {
      if (player.name === name) {
        return { name: player.name, count: player.count + 1 };
      } else {
        return player;
      }
    });
    setPlayers(newPlayers);
  };

  const decrementCount = (name: string) => {
    const newPlayers = players.map((player) => {
      if (player.name === name && player.count > 0) {
        return { name: player.name, count: player.count - 1 };
      } else {
        return player;
      }
    });
    setPlayers(newPlayers);
  };

  return {
    players: players,
    setPlayers: setPlayers,
    incrementCount: incrementCount,
    decrementCount: decrementCount,
  };
};
