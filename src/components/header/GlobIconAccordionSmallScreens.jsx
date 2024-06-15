import React, { useEffect, useRef, useState } from "react";
import GlobeIcon from "./icons/GlobeIcon.jsx";
import { languagesData } from "../../website-data/LanguagesData.js";

function GlobIconAccordionSmallScreens() {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);
  const [accordionActiveItemIndex, setAccordionActiveItemIndex] = useState(0);

  function handleAccordionOpenClick() {
    setAccordionOpen(!accordionOpen);
  }

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(accordionOpen ? `100%` : "0%");
    }
  }, [accordionOpen]);

  function handleAccordionItemClick(index) {
    setAccordionActiveItemIndex(index);
  }

  return (
    <div>
      <div
        onClick={handleAccordionOpenClick}
        className={`flex rounded-full ${accordionOpen && "text-custom-emerald"}`}
      >
        <GlobeIcon key="glob-icon" />
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`absolute inset-0 mt-16 flex w-full flex-col overflow-hidden bg-[#101010] px-2 py-4 text-custom-white duration-300 ${accordionOpen ? "translate-y-0 overflow-y-auto " : " -translate-y-28  overflow-y-hidden"}`}
      >
        <ul className="mx-4 flex flex-col space-y-4">
          {languagesData.map((language, index) => (
            <li
              key={index}
              className={`flex h-[50px] w-full items-center rounded-lg bg-custom-gray-300 px-2 text-custom-gray-100 transition-colors duration-300 hover:cursor-pointer hover:bg-custom-gray-100 hover:bg-opacity-25 hover:text-custom-white ${accordionActiveItemIndex === index && "text-custom-white"}`}
              onClick={() => handleAccordionItemClick(index)}
            >
              <p>{language}</p>
              <p
                className={`ml-auto transition-opacity duration-300 ${accordionActiveItemIndex === index ? "opacity-100" : "opacity-0"}`}
              >
                <GlobeIcon size={"6"} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GlobIconAccordionSmallScreens;
