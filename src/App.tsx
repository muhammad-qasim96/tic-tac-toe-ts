import { useEffect, useState } from "react";

import "./App.css";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState<string>("circle");
  const [winningMessage, setWinningMessage] = useState<string | null>(null);

  const message = `it is now ${go}'s go.`;

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    winningCombos.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === "circle");

      if (circleWins) {
        setWinningMessage("Circle Wins!");
        return;
      }
    });

    winningCombos.forEach((array) => {
      let crossWins = array.every((cell) => cells[cell] === "cross");

      if (crossWins) {
        setWinningMessage("Cross Wins!");
        return;
      }
    });
  };

  useEffect(() => {
    checkScore();
  }, [cells]);

  return (
    <div className="App">
      <div className="box">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            cells={cells}
            setCells={setCells}
            go={go}
            setGo={setGo}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  );
}

export default App;
