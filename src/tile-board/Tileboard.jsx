import React, { useState } from "react";
import Tile from "./Tile";

function TileBoard() {
  const [size] = useState(5);
  const [arrayGrid, setArrayGrid] = useState(() => createArrayGrid(size));

  const handleToggle = ({ target }) => {
    setArrayGrid(toggle(arrayGrid, target.id, size));
  };

  return (
    <div className="container text-center mt-5">
      {arrayGrid.map((row, keyi) => {
        return (
          <div key={`${keyi}`}>
            {row.map((tile, keyj) => {
              return (
                <Tile
                  key={`${keyi}${keyj}`}
                  id={`${keyi}${keyj}`}
                  isOn={tile}
                  handleToggle={handleToggle}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Generates an initial square grid of tiles
 */
function createArrayGrid(size) {
  const allTiles = [];
  for (let i = 0; i < size; i++) {
    const row = [];

    for (let j = 0; j < size; j++) {
      row.push(true);
    }
    allTiles.push(row);
  }

  return allTiles;
}

/**
 * Toggles adjacent tiles
 */
function toggle(arrayGrid, id, size) {
  const tempArray = [...arrayGrid];
  const i = Number(id[0]);
  const j = Number(id[1]);

  tempArray[i][j] = !tempArray[i][j];

  // top tile
  if (i > 0) {
    tempArray[i - 1][j] = !tempArray[i - 1][j];
  }
  // bottom tile
  if (i < size - 1) {
    tempArray[i + 1][j] = !tempArray[i + 1][j];
  }
  // right tile
  if (j < size - 1) {
    tempArray[i][j + 1] = !tempArray[i][j + 1];
  }
  // left tile
  if (j < size - 1) {
    tempArray[i][j - 1] = !tempArray[i][j - 1];
  }

  return tempArray;
}

export default TileBoard;
