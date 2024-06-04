import React, { useState } from "react";
import GlobeIcon from "./icons/GlobeIcon.jsx";
import { languagesData } from "../../website-data/LanguagesData.js";

function GlobIconAccordionLargeScreens({
  isVivible,
  onMouseEnter,
  onMouseLeave,
}) {
  const [accordionActiveItemIndex, setAccordionActiveItemIndex] = useState(0);

  function handleAccordionItemClick(index) {
    setAccordionActiveItemIndex(index);
  }

  return (
    <div
      className={`absolute left-1/2 mt-8 w-[150px] -translate-x-1/2  transition-opacity duration-300 ${isVivible ? "opacity-100" : "opacity-0"}`}
      onMouseEnter={isVivible && onMouseEnter}
      onMouseLeave={isVivible && onMouseLeave}
    >
      <div className="h-10 bg-transparent"></div>
      <ul className="flex flex-col gap-2 rounded-lg bg-custom-gray-300 p-2 text-sm">
        {languagesData.map((language, index) => (
          <li
            key={index}
            className={`flex h-[35px] w-full items-center rounded-md px-2 transition-colors duration-300 hover:cursor-pointer hover:bg-custom-gray-100 hover:bg-opacity-25 hover:text-custom-white ${accordionActiveItemIndex === index && "text-custom-white"}`}
            onClick={() => handleAccordionItemClick(index)}
          >
            <p>{language}</p>
            <p
              className={`ml-auto transition-opacity duration-300 ${accordionActiveItemIndex === index ? "opacity-100" : "opacity-0"}`}
            >
              <GlobeIcon size={"4"} />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GlobIconAccordionLargeScreens;
