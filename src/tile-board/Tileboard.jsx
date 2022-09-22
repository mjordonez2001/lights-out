import React, { useState } from "react";
import Tile from "./Tile";

function TileBoard() {
  const [arrayGrid] = useState(() => createArrayGrid());

  return (
    <div className="container text-center mt-5">
      {arrayGrid.map((row, keyi) => {
        return (
          <div key={`${keyi}`}>
            {row.map((tile, keyj) => {
              return <Tile key={`${keyi}, ${keyj}`} isOn={tile} />;
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
function createArrayGrid() {
  const allTiles = [];
  for (let i = 0; i < 5; i++) {
    const row = [];

    for (let j = 0; j < 5; j++) {
      row.push(true);
    }
    allTiles.push(row);
  }

  return allTiles;
}

export default TileBoard;
