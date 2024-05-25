import React from "react";
import FilterButton from "./FilterButton.jsx";
import ChevronDown from "./icons/ChevronDown.jsx";

function FilterButtons({ filtersData }) {
  return (
    <ul className="mt-3 flex flex-col items-center gap-2 text-custom-gray-100">
      {filtersData.map((name, index) => (
        <li
          className="group flex w-full border-b-[1px] py-4 hover:cursor-pointer"
          key={index}
        >
          <FilterButton buttonContent={name} />
          <a className="ml-auto">
            <ChevronDown />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FilterButtons;
