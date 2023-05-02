import React from "react";
import './button2.css';

function Selection(props) {
  const { label, isSelected, onClick } = props;
  const classes = isSelected ? "button selected" : "button";

  return (
    <button class="ui-btn" className={classes} onClick={onClick}>
      {label}
    </button>
  );
}


export default Selection;