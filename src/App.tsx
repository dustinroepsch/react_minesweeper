import { useState } from "react";
import Minesweeper from "./minesweeper";

function App() {
  const [minesweeper, setMinesweeper] = useState(
    () => new Minesweeper(10, 10, 10)
  );

  return (
    <div
      onClick={() => {
        setMinesweeper((minesweeper) => minesweeper.toggleFlagged(0, 0));
      }}
    >
      {JSON.stringify(minesweeper)}
    </div>
  );
}

export default App;
