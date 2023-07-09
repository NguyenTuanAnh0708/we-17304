import React from "react";
import "./Search.css";
const Search: React.FC = () => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter key word..."
        className="search-input"
      />
      <br />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default Search;
