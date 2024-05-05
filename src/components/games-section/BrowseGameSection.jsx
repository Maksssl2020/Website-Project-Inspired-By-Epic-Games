import React from "react";
import GameCard from "../cards/GameCard.jsx";
import { GamesWithDiscount } from "../../website-data/GamesCardData.js";
import MagnifyingGlassIcon from "../header/icons/MagnifyingGlassIcon.jsx";
import SearchBar from "../header/SearchBar.jsx";
import FiltersPanel from "../filters-panel/FiltersPanel.jsx";
import FilterButton from "../filters-panel/FilterButton.jsx";
import ChevronDown from "../filters-panel/icons/ChevronDown.jsx";

function BrowseGameSection() {
  function getMarginDependsOnIndex(index) {
    if ((index + 1) % 5 === 0) {
      return "mr-0 ml-2";
    } else if (index === 0) {
      return "ml-0 mr-2";
    } else if (index % 5 === 0) {
      return "ml-0 mr-2";
    } else {
      return "mx-2";
    }
  }

  return (
    <div>
      <div className="ml-1 flex">
        <p className="font-medium text-custom-gray-100">SHOW:</p>
        <p className="ml-4 flex text-white hover:cursor-pointer">
          <FilterButton buttonContent="ALL" />
          <ChevronDown />
        </p>
      </div>
      <div className="flex w-[1430px]">
        <ul className="flex w-[1156px] flex-wrap">
          {GamesWithDiscount.map((game, index) => (
            <li
              key={index}
              className={`my-4 ${getMarginDependsOnIndex(index)}`}
            >
              <GameCard gameData={game} />
            </li>
          ))}
        </ul>
        <div className="h-[555px] w-[260px]">
          <FiltersPanel />
        </div>
      </div>
    </div>
  );
}

export default BrowseGameSection;
