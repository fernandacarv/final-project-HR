import React, { useState } from "react";

function SearchBar({ onSearch, suggestions }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowSuggestions(true);
    // Call the onSearch function to update filtered employees based on query
    onSearch(query);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    onSearch(suggestion);
  };

  return (
    <div className="ml-4 relative flex items-center md:ml-6 rounded-md px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500">
      <form>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
          className="bg-gray-600 focus:ring-indigo-500 focus:border-indigo-500 block w-64 px-4 py-2 rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-"
          placeholder="Search"
        />
      </form>
      {showSuggestions && (
        <ul className="absolute z-10 mt-1 w-64 bg-white rounded-md shadow-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
