import React, { useState, useEffect } from "react";
import TileBoard from "./tile-board/Tileboard";
import { randomArrayGrid } from "./utils/utils";

function App() {
  const [size, setSize] = useState(5);
  const [arrayGrid, setArrayGrid] = useState(() => randomArrayGrid(size));

  useEffect(() => {
    setArrayGrid(randomArrayGrid(size));
  }, [size]);

  const onRestart = () => {
    setArrayGrid(randomArrayGrid(size));
  };

  const onSizeChange = ({ target }) => {
    setSize(Number(target.value));
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

      <TileBoard
        arrayGrid={arrayGrid}
        setArrayGrid={setArrayGrid}
        size={size}
      />
      <button className="btn btn-primary mt-3" onClick={onRestart}>
        New game
      </button>
    </div>
  );
}

export default App;
