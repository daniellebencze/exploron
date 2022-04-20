import React from "react";

function Searchbar({ onSearch, search, setSearch }) {
  // function handleSearch(e) {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // }

  return (
    <form className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="Search destinations"
        defaultValue={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* <button type="submit">🔍</button> */}
    </form>
  );
}

export default Searchbar;
