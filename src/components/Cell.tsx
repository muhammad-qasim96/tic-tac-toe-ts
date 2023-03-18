import React from "react";

type Props = {
  id: number;
  cell: string;
  cells: string[];
  setCells: React.Dispatch<React.SetStateAction<string[]>>;
  go: string;
  setGo: React.Dispatch<React.SetStateAction<string>>;
  winningMessage: string | null;
};

type Event = React.MouseEvent<HTMLDivElement, MouseEvent>;

const Cell = ({
  id,
  cell,
  cells,
  setCells,
  go,
  setGo,
  winningMessage,
}: Props) => {
  const handleClick = (event: Event) => {
    if (!winningMessage) {
      handleCell(event);
    }
  };

  const handleCell = (event: Event) => {
    const target = event.target as HTMLDivElement;

    const taken =
      target.firstElementChild?.classList.contains("circle") ||
      target.firstElementChild?.classList.contains("cross");

    if (!taken) {
      if (go === "circle") {
        target.firstElementChild?.classList.add("circle");
        handleCellChange("circle");
        setGo("cross");
      }

      if (go === "cross") {
        target.firstElementChild?.classList.add("cross");
        handleCellChange("cross");
        setGo("circle");
      }
    }
  };

  const handleCellChange = (className: string) => {
    const nextCell = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });

    setCells(nextCell);
  };

  return (
    <div className="cell" id={id.toString()} onClick={handleClick}>
      <div className={cell} style={{ pointerEvents: "none" }} />
    </div>
  );
};

export default Cell;
