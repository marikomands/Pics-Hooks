import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="container">
      <form className="form">
        <label className="font">Image Search</label>
        <input className="input" type="text" />
      </form>
    </div>
  );
};

export default SearchBar;
