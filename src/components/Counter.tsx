import Button from "@mui/material/Button";
import { Player } from "../entities/player";

type CounterProps = {
  player: Player;
  incrementCount: (name: string) => void;
  decrementCount: (name: string) => void;
};

const Counter = (props: CounterProps) => {
  const { player, incrementCount, decrementCount } = props;

  return (
    <div>
      <td>{player.name}</td>
      <td>{player.count}</td>
      <Button
        variant="contained"
        color="primary"
        onClick={() => incrementCount(player.name)}
      >
        +
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => decrementCount(player.name)}
      >
        -
      </Button>
    </div>
  );
};

export default Counter;
