import React, { useState } from "react";
import Tile from "./Tile";

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

/**
 * Generates an initial square grid of tiles
 */
function createArrayGrid(size) {
  const allTiles = [];
  for (let y = 0; y < size; y++) {
    const row = [];

    for (let x = 0; x < size; x++) {
      row.push(true);
    }
    allTiles.push(row);
  }

  return randomBoard(allTiles, size);
}

/**
 * Toggles adjacent tiles
 */
function toggle(arrayGrid, y, x, size) {
  const tempArray = arrayGrid.map((row) => {
    return [...row];
  });

  tempArray[y][x] = !tempArray[y][x];

  // top tile
  if (y > 0) {
    tempArray[y - 1][x] = !tempArray[y - 1][x];
  }
  // bottom tile
  if (y < size - 1) {
    tempArray[y + 1][x] = !tempArray[y + 1][x];
  }
  // right tile
  if (x < size - 1) {
    tempArray[y][x + 1] = !tempArray[y][x + 1];
  }
  // left tile
  if (x > 0) {
    tempArray[y][x - 1] = !tempArray[y][x - 1];
  }

  return tempArray;
}

/**
 * Generates a random board
 */
function randomBoard(arrayGrid, size) {
  let tempArray = arrayGrid.map((row) => {
    return [...row];
  });

  for (let i = 0; i < size * size; i++) {
    const x = randomTilePosition(size);
    const y = randomTilePosition(size);

    tempArray = toggle(tempArray, y, x, size);
  }

  return tempArray;
}

/**
 * Returns a random tile position
 */
function randomTilePosition(size) {
  return Math.floor(Math.random() * size);
}

export default TileBoard;
