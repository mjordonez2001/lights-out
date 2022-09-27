import React, { useState, useEffect } from "react";
import TileBoard from "./tile-board/Tileboard";
import { randomArrayGrid, checkWin } from "./utils/utils";
import "./App.css";

function App() {
  const [size, setSize] = useState(5);
  const [arrayGrid, setArrayGrid] = useState(() => randomArrayGrid(size));
  const [moves, setMoves] = useState(0);
  const [winAlert, setWinAlert] = useState(<></>);

  useEffect(() => {
    setArrayGrid(randomArrayGrid(size));
    setMoves(0);
  }, [size]);

  useEffect(() => {
    if (checkWin(arrayGrid)) {
      setWinAlert(
        <div className="alert alert-success" role="alert">
          You won!
        </div>
      );
    }
  }, [arrayGrid]);

  const onRestart = () => {
    setArrayGrid(randomArrayGrid(size));
    setMoves(0);
  };

  const onSizeChange = ({ target }) => {
    setSize(Number(target.value));
  };

  const increaseMoveCount = () => {
    setMoves((currentMoves) => currentMoves + 1);
  };

  return (
    <div className="container text-center mt-3">
      <h1>Lights Out</h1>
      <div className="d-flex justify-content-center my-3">
        <select
          className="form-select"
          aria-label="Size"
          onChange={onSizeChange}
        >
          <option value="5">5x5</option>
          <option value="6">6x6</option>
          <option value="7">7x7</option>
          <option value="8">8x8</option>
          <option value="9">9x9</option>
        </select>
      </div>
      {winAlert}
      <div>Moves: {moves}</div>
      <TileBoard
        arrayGrid={arrayGrid}
        setArrayGrid={setArrayGrid}
        size={size}
        increaseMoveCount={increaseMoveCount}
      />
      <button className="btn btn-primary mt-3" onClick={onRestart}>
        New game
      </button>
    </div>
  );
}

export default App;
