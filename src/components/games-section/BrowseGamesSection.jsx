import React from "react";
import GameCard from "../cards/GameCard.jsx";
import { GamesWithDiscount } from "../../website-data/GamesCardData.js";
import FiltersPanel from "../filters-panel/FiltersPanel.jsx";
import FilterButton from "../filters-panel/FilterButton.jsx";
import ChevronDown from "../filters-panel/icons/ChevronDown.jsx";
import ChevronDoubleDown from "../filters-panel/icons/ChevronDoubleDown.jsx";

function BrowseGamesSection() {
  return (
    <div>
      <div className="ml-1 flex">
        <p className="font-medium text-custom-gray-100">SHOW:</p>
        <p className="ml-4 flex text-white hover:cursor-pointer">
          <FilterButton buttonContent="ALL" />
          <ChevronDown />
        </p>
        <p className="ml-5 font-medium text-custom-gray-100">FILTERS:</p>
        <p className="ml-2 flex text-white hover:cursor-pointer">
          <ChevronDoubleDown />
        </p>
      </div>
      <div className="flex md:w-[730px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1430px]">
        <ul className="flex flex-wrap max-3xs:flex-col">
          {GamesWithDiscount.map((game, index) => (
            <li
              key={index}
              className={`mx-[6px] my-4 max-md:w-[210px] max-sm:w-[140px]`}
            >
              <GameCard gameData={game} />
            </li>
          ))}
        </ul>
        <div className="h-[555px] max-2xl:-translate-x-24 max-lg:hidden md:-translate-x-0 lg:w-[260px]">
          <FiltersPanel
            filtersData={[
              "EVENTS",
              "PRICE",
              "GENRE",
              "FEATURES",
              "TYPES",
              "PLATFORM",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default BrowseGamesSection;
