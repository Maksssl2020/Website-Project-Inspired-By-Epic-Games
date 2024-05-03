import React from "react";
import MagnifyingGlassIcon from "./icons/MagnifyingGlassIcon.jsx";

function SearchBar() {
  return (
    <div className="bg-custom-gray-200 text-custom-gray-100 flex items-center rounded-full py-2 pr-2">
      <span className="mx-2">
        <MagnifyingGlassIcon />
      </span>
      <input
        type="text"
        placeholder="Search store"
        className=" placeholder:text-custom-gray-100 rounded-lg border-none bg-transparent focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;
