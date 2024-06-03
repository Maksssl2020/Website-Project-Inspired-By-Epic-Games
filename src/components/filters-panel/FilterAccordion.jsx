import React from "react";
import FilterAccordionItem from "./FilterAccordionItem.jsx";

function FilterAccordion({ accordionData }) {
  return (
    <div className="h-auto">
      <ul className="flex flex-col items-start gap-1 text-custom-gray-100">
        {accordionData.map((data, index) => (
          <li className="w-full" key={index}>
            <FilterAccordionItem>{data}</FilterAccordionItem>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterAccordion;
