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
  const [emoji, setEmoji] = useState(<>😆</>);

  useEffect(() => {
    setArrayGrid(randomArrayGrid(size));
    setMoves(0);
    setWinAlert(false);

    setRgb([0, 185, 70]);
    setEmoji(<>😆</>);
  }, [size]);

  useEffect(() => {
    if (checkWin(arrayGrid) && arrayGrid.length) {
      setWinAlert(true);
    }
  }, [arrayGrid]);

  const onRestart = () => {
    setArrayGrid(randomArrayGrid(size));
    setMoves(0);
    setWinAlert(false);

    setRgb([0, 185, 70]);
    setEmoji(<>😆</>);
  };

  const onSizeChange = ({ target }) => {
    setSize(Number(target.value));
    setArrayGrid([]);
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

    const index = Math.floor(moves / size);
    const emojis = [
      <>😆</>,
      <>😄</>,
      <>😊</>,
      <>🙂</>,
      <>🤨</>,
      <>😕</>,
      <>😣</>,
      <>😖</>,
      <>😩</>,
      <>😫</>,
    ];
    if (moves % size === 0 && index < emojis.length) {
      setEmoji(emojis[index]);
    }
  };

  return (
    <div className="container text-center mt-3">
      <h1>Lights Out</h1>

      {winAlert ? (
        <div className="alert alert-success" role="alert">
          You won!
        </div>
      ) : (
        <></>
      )}

      <div className="mt-3">
        <span
          className="movesCounter"
          style={{ color: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` }}
        >
          {moves}
        </span>
        &nbsp;moves
        <span className="mx-2">{emoji}</span>
      </div>

      <TileBoard arrayGrid={arrayGrid} onToggle={onToggle} />

      <div className="d-flex justify-content-center mt-5 mb-3">
        <button className="btn btn-primary newGame mx-2" onClick={onRestart}>
          New game
        </button>
        <div>
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
      </div>
    </div>
  );
}

export default App;
