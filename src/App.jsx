import React, { useState, useEffect } from "react";
import TileBoard from "./tile-board/Tileboard";
import { randomArrayGrid, checkWin, toggle, lerp } from "./utils/utils";
import "./App.css";

const emojis = ["😆", "😄", "😊", "🙂", "🤨", "😕", "😣", "😖", "😩", "😫"];

function App() {
  const [size, setSize] = useState(5);
  const [arrayGrid, setArrayGrid] = useState(() => randomArrayGrid(size));
  const [moves, setMoves] = useState(0);
  const [winAlert, setWinAlert] = useState(false);

  useEffect(() => {
    setArrayGrid(randomArrayGrid(size));
    setMoves(0);
    setWinAlert(false);
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
  };

  const onSizeChange = ({ target }) => {
    setSize(Number(target.value));
  };

  const onToggle = (y, x) => {
    setArrayGrid(toggle(arrayGrid, y, x, size));
    setMoves((currentMoves) => currentMoves + 1);
  };

  const index = Math.floor(moves / size);

  return (
    <div className="container text-center mt-3">
      <h1>Lights Out</h1>

      {!!winAlert && (
        <div className="alert alert-success" role="alert">
          You won!
        </div>
      )}

      <div className="mt-3">
        <span
          className="moves-counter"
          style={{
            color: `rgb(
              ${lerp(0, 180, index * 0.1)},
              ${lerp(185, 5, index * 0.1)},
              ${lerp(70, 10, index * 0.1)})`,
          }}
          key={`moves-counter-${moves}`}
        >
          {moves}
        </span>
        &nbsp;moves
        <span className="mx-2 emoji" key={`emoji-${index}`}>
          {index < emojis.length ? emojis[index] : "😫"}
        </span>
      </div>

      <TileBoard
        arrayGrid={arrayGrid}
        onToggle={onToggle}
        key={`tileboard-${size}`}
      />

      <div
        className="d-flex justify-content-center mt-5 mb-3 options"
        style={{ animationDelay: `${(size ** 2 + 4) * 100}ms` }}
        key={`options-${size}`}
      >
        <button className="btn btn-primary new-game mx-2" onClick={onRestart}>
          New game
        </button>
        <div>
          <select
            className="form-select"
            aria-label="Size"
            onChange={onSizeChange}
            defaultValue={`${size}`}
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
