import React from "react";
import propTypes from "prop-types";

function Tile({ isOn, id, handleToggle }) {
  return (
    <button
      type="button"
      className={
        isOn
          ? "btn btn-light btn-outline-dark"
          : "btn btn-dark btn-outline-light"
      }
      id={id}
      onClick={handleToggle}
    >
      Tile
    </button>
  );
}

Tile.propTypes = {
  isOn: propTypes.bool.isRequired,
  id: propTypes.string.isRequired,
  handleToggle: propTypes.func.isRequired,
};

export default Tile;
