import { makeStyles, mergeClasses } from "@griffel/react";
import { Cell } from "../minesweeper";
import { MouseEventHandler } from "react";

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
    <button
      className={className}
      style={cell.delay ? { transitionDelay: `${cell.delay * 0.05}s` } : {}}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {cell.state === "flagged" && "🚩"}
      {cell.state === "revealed" &&
        (cell.isMine ? "💣" : cell.numberOfNeighbourMines || "")}
    </button>
  );
}

const useStyles = makeStyles({
  cell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    aspectRatio: "1 / 1",
    borderRadius: "2px",
    border: "1px solid black",
    transition: "all 0.1s ease-in-out",
  },

  hidden: {
    backgroundColor: "gray",
    color: "gray",
  },
  revealed: {
    backgroundColor: "white",
    color: "black",
  },
});
