import React, { useState } from "react";
import FilterButton from "./FilterButton.jsx";

function FilterButtons({ filtersData }) {
  return (
    <ul className="mt-3 flex flex-col items-center gap-2 text-custom-gray-100">
      {filtersData.map((data, index) => (
        <li
          className="group flex w-full border-b-[1px] py-4 hover:cursor-pointer"
          key={index}
        >
          <FilterButton
            buttonContent={data.filterTitle}
            accordionData={data.filterAccordionData}
          />
        </li>
      ))}
    </ul>
  );
}

export default FilterButtons;
