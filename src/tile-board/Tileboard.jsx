import React, { useState } from "react";
import Tile from "./Tile";
import { createArrayGrid, toggle } from "../utils/utils";

function TileBoard() {
  const [size] = useState(5);
  const [arrayGrid, setArrayGrid] = useState(() => createArrayGrid(size));

  const handleToggle = (y, x) => {
    setArrayGrid(toggle(arrayGrid, y, x, size));
  };

  return (
    <div className="container text-center mt-5">
      {arrayGrid.map((row, y) => {
        return (
          <div key={`${y}`}>
            {row.map((tile, x) => {
              return (
                <Tile
                  key={`${y}, ${x}`}
                  id={`${y}, ${x}`}
                  isOn={tile}
                  handleToggle={() => handleToggle(y, x)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default TileBoard;
