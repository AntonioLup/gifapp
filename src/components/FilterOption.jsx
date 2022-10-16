import React from "react";
import "./filteroption.css";
function FilterOption({ setProps, props, setPage }) {
  function changeOption(e) {
    setProps(e);
  }
  return (
    <div className="option">
      <div className="filter">
        <button onClick={() => changeOption("The Boys")}>The Boys</button>
      </div>
      <div className="filter">
        <button onClick={() => changeOption("Hitman")}>Hitman</button>
      </div>
      <div className="filter">
        <button onClick={() => setPage("gifwish")}>Likes</button>
        <small className="small">{props.length}</small>
      </div>
    </div>
  );
}

export default FilterOption;
