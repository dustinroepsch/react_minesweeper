import { makeStyles, mergeClasses } from "@griffel/react";
import { Cell } from "../minesweeper";
import { MouseEventHandler, useCallback } from "react";

export default function CellUI({
  cell,
  revealCell,
  toggleFlagged,
}: {
  cell: Cell;
  revealCell: () => void;
  toggleFlagged: () => void;
}): JSX.Element {
  const classes = useStyles();

  const onClick: MouseEventHandler = (e) => {
    e.preventDefault();
    if (e.button === 0) {
      revealCell();
    }
  };

  const onContextMenu: MouseEventHandler = (e) => {
    e.preventDefault();
    toggleFlagged();
    return false;
  };

  const classToMerge =
    cell.state === "hidden" || cell.state === "flagged"
      ? classes.hidden
      : classes.revealed;
  const className = mergeClasses(classes.cell, classToMerge);

  return (
    <div className={className} onClick={onClick} onContextMenu={onContextMenu}>
      {cell.state === "flagged" && "🚩"}
      {cell.state === "revealed" &&
        (cell.isMine ? "💣" : cell.numberOfNeighbourMines || "")}
    </div>
  );
}

const useStyles = makeStyles({
  cell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20px",
    height: "20px",
    borderRadius: "2px",
    border: "1px solid black",
  },

  hidden: {
    backgroundColor: "gray",
  },
  revealed: {
    backgroundColor: "white",
  },
});
