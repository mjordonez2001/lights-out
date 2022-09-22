import React, { useState } from "react";
import Tile from "./Tile";

function TileBoard() {
  const [size] = useState(5);
  const [arrayGrid, setArrayGrid] = useState(() => createArrayGrid(size));

  const handleToggle = ({ target }) => {
    const { id } = target;

    const tempArray = [...arrayGrid];
    tempArray[id[0]][id[1]] = !tempArray[id[0]][id[1]];

    setArrayGrid([...tempArray]);
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

export default TileBoard;
