import { makeStyles } from "@griffel/react";
import Minesweeper from "../minesweeper";
import CellUI from "./Cell";
export default function Board(props: {
  minesweeper: Minesweeper;
  setMinesweeper: (minesweeper: Minesweeper) => void;
}): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.board}>
      {props.minesweeper.cells.flat().map((cell, index) => (
        <CellUI
          key={index}
          cell={cell}
          toggleFlagged={() => {
            const { row, col } = props.minesweeper.indexToCoordinate(index);
            props.setMinesweeper(props.minesweeper.toggleFlagged(row, col));
          }}
        />
      ))}
    </div>
  );
}

const useStyles = makeStyles({
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(10, 20px)",
    gap: "1px",
  },
});
