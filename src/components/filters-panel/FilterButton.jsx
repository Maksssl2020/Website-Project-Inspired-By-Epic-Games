import React, { useState } from "react";
import ChevronDown from "./icons/ChevronDown.jsx";
import FilterAccordion from "./FilterAccordion.jsx";

function FilterButton({ buttonContent, accordionData }) {
  const [isActive, setIsActive] = useState(false);

  function handleButtonClick() {
    setIsActive(!isActive);
  }

  return (
    <button
      className={`flex w-full flex-col gap-4 transition-colors duration-300 group-hover:text-custom-white ${isActive ? "text-custom-white" : ""}`}
    >
      <div className="flex w-full px-2" onClick={handleButtonClick}>
        <p>{buttonContent}</p>
        <p
          className={`ml-auto transition-all duration-300 ${isActive ? "rotate-180 text-custom-white" : ""}`}
        >
          <ChevronDown />
        </p>
      </div>
      <div className={`${isActive ? "visible" : "hidden"} w-full`}>
        <FilterAccordion accordionData={accordionData} />
      </div>
    </button>
  );
}

export default FilterButton;
