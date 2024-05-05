import React from "react";
import MagnifyingGlassIcon from "./icons/MagnifyingGlassIcon.jsx";

function SearchBar({
  iconColor,
  inputText,
  containerStyling = undefined,
  inputStyling = undefined,
}) {
  let containerDefaultStyle = "flex items-center";
  let inputDefaultStyle = "bg-transparent focus:outline-none";

  if (Array.isArray(containerStyling)) {
    containerStyling.forEach((style) => {
      containerDefaultStyle += ` ${style}`;
    });
  }

  if (Array.isArray(inputStyling)) {
    inputStyling.forEach((style) => {
      inputDefaultStyle += ` ${style}`;
    });
  }

  return (
    <div className={containerDefaultStyle}>
      <span className="mr-2">
        <MagnifyingGlassIcon color={iconColor} />
      </span>
      <input
        type="text"
        placeholder={inputText}
        className={inputDefaultStyle}
      />
    </div>
  );
}

export default SearchBar;
