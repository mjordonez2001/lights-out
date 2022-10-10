import React from "react";
import propTypes from "prop-types";
import clsx from "clsx";
import "./Tile.css";

function Tile({ isOn, id, onToggle, delay }) {
  return (
    <button
      type="button"
      className={clsx(
        "btn tile",
        isOn && "btn-light tile-on",
        !isOn && "btn-dark tile-off"
      )}
      id={id}
      onClick={onToggle}
      aria-label={`Tile ${id}`}
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}

Tile.propTypes = {
  isOn: propTypes.bool.isRequired,
  id: propTypes.string.isRequired,
  onToggle: propTypes.func.isRequired,
  delay: propTypes.number,
};

export default Tile;
