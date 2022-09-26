import React from "react";
import propTypes from "prop-types";
import clsx from "clsx";
import "./Tile.css";

function Tile({ isOn, id, onToggle }) {
  return (
    <button
      type="button"
      className={clsx(
        "btn tile",
        isOn && "btn-light btn-outline-dark tile-on",
        !isOn && "btn-dark btn-outline-light tile-off"
      )}
      id={id}
      onClick={onToggle}
      aria-label={`Tile ${id}`}
    />
  );
}

Tile.propTypes = {
  isOn: propTypes.bool.isRequired,
  id: propTypes.string.isRequired,
  onToggle: propTypes.func.isRequired,
};

export default Tile;
