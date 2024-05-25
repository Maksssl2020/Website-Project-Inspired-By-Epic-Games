import React from "react";
import SearchBar from "../header/SearchBar.jsx";
import FilterButtons from "./FilterButtons.jsx";

function FiltersPanel({ filtersData }) {
  return (
    <>
      <SearchBar
        iconColor="#ffffff"
        inputText="Keyword"
        containerStyling={[
          "border-custom-emerald",
          "border-2",
          "rounded-md",
          "p-2",
        ]}
        inputStyling={["placeholder:text-custom-white", "text-custom-white"]}
      />
      <FilterButtons filtersData={filtersData} />
    </>
  );
}

export default FiltersPanel;
