import { useState } from "react";
import Minesweeper from "./minesweeper";
import Board from "./components/Board";
import { useNormalize } from "./normalize";
import { makeStyles } from "@griffel/react";

function App() {
  useNormalize();

  const [minesweeper, setMinesweeper] = useState(
    () => new Minesweeper(10, 10, 10),
  );

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Board minesweeper={minesweeper} setMinesweeper={setMinesweeper} />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
});

export default App;
