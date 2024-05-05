import React from "react";

function FilterButton({ buttonContent }) {
  return (
    <button className="group-hover:text-custom-white">{buttonContent}</button>
  );
}

export default FilterButton;
