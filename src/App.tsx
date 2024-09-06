import { useState } from "react";
import Minesweeper from "./minesweeper";
import Board from "./components/Board";
import { useNormalize } from "./normalize";

function App() {
  useNormalize();
  const [minesweeper, setMinesweeper] = useState(
    () => new Minesweeper(10, 10, 10)
  );

  return <Board minesweeper={minesweeper} setMinesweeper={setMinesweeper} />;
}

export default App;
