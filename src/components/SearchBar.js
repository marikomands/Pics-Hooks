import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  console.log(term);

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("🚀 ~ onFormSubmit ~ onFormSubmit");
    onSubmit(term);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={onFormSubmit}>
        <label className="font">Image Search</label>
        <input
          className="input"
          value={term}
          type="text"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
