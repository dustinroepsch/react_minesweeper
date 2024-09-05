import { makeStyles } from "@griffel/react";
import { Cell } from "../minesweeper";

export default function CellUI(props: {
  cell: Cell;
  toggleFlagged: () => void;
}): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.cell} onClick={props.toggleFlagged}>
      {props.cell.state === "flagged" && "🚩"}
    </div>
  );
}

const useStyles = makeStyles({
  cell: {
    width: "20px",
    height: "20px",
    borderRadius: "2px",
    border: "1px solid black",
  },
});
