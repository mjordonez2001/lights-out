import React from "react";
import propTypes from "prop-types";

function Tile({ isOn }) {
  return (
    <>
      {isOn ? (
        <button type="button" className="btn btn-light btn-outline-dark">
          Tile
        </button>
      ) : (
        <button type="button" className="btn btn-dark btn-outline-light">
          Tile
        </button>
      )}
    </>
  );
}

Tile.propTypes = {
  isOn: propTypes.bool.isRequired,
};

export default Tile;
