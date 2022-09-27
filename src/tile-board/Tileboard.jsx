import React from "react";
import Tile from "./Tile";
import { toggle } from "../utils/utils";
import propTypes from "prop-types";

function TileBoard({ arrayGrid, setArrayGrid, size }) {
  const onToggle = (y, x) => {
    setArrayGrid(toggle(arrayGrid, y, x, size));
  };

  return (
    <div className="container text-center mt-3">
      {arrayGrid.map((row, y) => {
        return (
          <div key={`${y}`}>
            {row.map((tile, x) => {
              return (
                <Tile
                  key={`${y}, ${x}`}
                  id={`${y}, ${x}`}
                  isOn={tile}
                  onToggle={() => onToggle(y, x)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

TileBoard.propTypes = {
  arrayGrid: propTypes.array.isRequired,
  setArrayGrid: propTypes.func.isRequired,
  size: propTypes.number.isRequired,
};

export default TileBoard;
