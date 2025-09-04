import React, { useState } from "react";

function SearchBarComponent({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="d-flex mb-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Cerca per nome o cognome..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-light" onClick={handleSearch}>
        Cerca
      </button>
    </div>
  );
}

export default SearchBarComponent;
