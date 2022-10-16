import React, { useEffect, useState } from "react";
import "./search.css";
const Search = ({ props, setProps }) => {
  const handleSearch = (e) => {
    let lowerCase = e.target.value.toLowerCase();

    setProps(lowerCase);
  };

  return (
    <div>
      <form>
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            value={props}
            className="input-text"
            placeholder="que buscas?..."
            onChange={handleSearch}
          />
          <span className="zoom"></span>
        </label>
      </form>
    </div>
  );
};

export default Search;
