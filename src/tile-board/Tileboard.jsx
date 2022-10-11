import React from "react";
import Tile from "./Tile";
import propTypes from "prop-types";

function TileBoard({ arrayGrid, onToggle }) {
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
                  delay={(y * arrayGrid.length + x) * 100}
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
  onToggle: propTypes.func.isRequired,
};

export default TileBoard;
