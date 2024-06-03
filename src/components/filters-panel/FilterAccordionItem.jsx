import React, { useState } from "react";
import CheckIcon from "./icons/CheckIcon.jsx";

function FilterAccordionItem({ children }) {
  const [isActive, setIsActive] = useState(false);

  function handleButtonClick() {
    setIsActive(!isActive);
  }

  return (
    <button
      onClick={handleButtonClick}
      className={`flex h-[45px] w-full items-center rounded-lg px-2 transition-colors duration-300 hover:bg-custom-gray-300 hover:text-custom-white ${isActive ? "bg-custom-gray-300 text-custom-white" : ""}`}
    >
      <p>{children}</p>
      <p
        className={`ml-auto transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
      >
        <CheckIcon />
      </p>
    </button>
  );
}

export default FilterAccordionItem;
