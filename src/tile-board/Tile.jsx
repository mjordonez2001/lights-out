import React from "react";
import propTypes from "prop-types";
import "./Tile.css";

function Tile({ isOn, id, handleToggle }) {
  return (
    <button
      type="button"
      className={
        isOn
          ? "btn btn-light btn-outline-dark tile tile-on"
          : "btn btn-dark btn-outline-light tile tile-off"
      }
      id={id}
      onClick={handleToggle}
    ></button>
  );
}

Tile.propTypes = {
  isOn: propTypes.bool.isRequired,
  id: propTypes.string.isRequired,
  handleToggle: propTypes.func.isRequired,
};

export default Tile;
