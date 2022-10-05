import React, { useState, useEffect } from "react";
import TileBoard from "./tile-board/Tileboard";
import { randomArrayGrid, checkWin, toggle } from "./utils/utils";
import "./App.css";

function App() {
  const [size, setSize] = useState(5);
  const [arrayGrid, setArrayGrid] = useState(() => randomArrayGrid(size));
  const [moves, setMoves] = useState(0);
  const [winAlert, setWinAlert] = useState(false);
  const [rgb, setRgb] = useState([0, 185, 70]);

  useEffect(() => {
    setArrayGrid(randomArrayGrid(size));
    setMoves(0);
    setWinAlert(false);
    setRgb([0, 185, 70]);
  }, [size]);

  useEffect(() => {
    if (checkWin(arrayGrid)) {
      setWinAlert(true);
    }
  }, [arrayGrid]);

  const onRestart = () => {
    setArrayGrid(randomArrayGrid(size));
    setMoves(0);
    setWinAlert(false);
    setRgb([0, 185, 70]);
  };

  const onSizeChange = ({ target }) => {
    setSize(Number(target.value));
  };

  const onToggle = (y, x) => {
    setArrayGrid(toggle(arrayGrid, y, x, size));
    setMoves((currentMoves) => currentMoves + 1);

    if (rgb[1] > 5) {
      const tempRgb = [...rgb];
      tempRgb[0] += 3;
      tempRgb[1] -= 3;
      tempRgb[2] -= 1;
      setRgb([...tempRgb]);
    }
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

      {winAlert ? (
        <div className="alert alert-success" role="alert">
          You won!
        </div>
      ) : (
        <></>
      )}

      <div>
        Moves:&nbsp;
        <span
          className="movesCounter"
          style={{ color: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` }}
        >
          {moves}
        </span>
      </div>
      <TileBoard arrayGrid={arrayGrid} onToggle={onToggle} />
      <button className="btn btn-primary mt-3" onClick={onRestart}>
        New game
      </button>
    </div>
  );
}

export default App;
