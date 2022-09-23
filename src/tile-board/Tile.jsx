import React from "react";
import propTypes from "prop-types";
import clsx from "clsx";
import "./Tile.css";

function Tile({ isOn, id, handleToggle }) {
  return (
    <button
      type="button"
      className={clsx(
        "btn tile",
        isOn && "btn-light btn-outline-dark tile-on",
        !isOn && "btn-dark btn-outline-light tile-off"
      )}
      id={id}
      onClick={handleToggle}
      aria-label={`Tile ${id}`}
    ></button>
  );
}

Tile.propTypes = {
  isOn: propTypes.bool.isRequired,
  id: propTypes.string.isRequired,
  handleToggle: propTypes.func.isRequired,
};

export default Tile;
