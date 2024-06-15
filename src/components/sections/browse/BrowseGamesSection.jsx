import React from "react";
import GameCard from "../../cards/GameCard.jsx";
import FiltersPanel from "../../filters-panel/FiltersPanel.jsx";
import ChevronDown from "../../filters-panel/icons/ChevronDown.jsx";
import ChevronDoubleDown from "../../filters-panel/icons/ChevronDoubleDown.jsx";
import Pagination from "../../main-elements/pagination/Pagination.jsx";
import { filtersData } from "../../../website-data/FiltersData.js";
import { gameFullData } from "../../../website-data/GameFullData.js";

function BrowseGamesSection() {
  return (
    <div className="flex w-auto flex-col max-xs:items-center">
      <div className="flex xs:ml-3">
        <p className="font-medium text-custom-gray-100">SHOW:</p>
        <p className="relative ml-4 flex text-custom-white hover:cursor-pointer">
          <p>ALL</p>
          <ChevronDown />
        </p>
        <div className="flex lg:hidden">
          <p className="ml-5 font-medium text-custom-gray-100">FILTERS:</p>
          <p className="ml-2 flex text-white hover:cursor-pointer">
            <ChevronDoubleDown />
          </p>
        </div>
      </div>
      <div className="flex justify-center max-sm:w-[310px] xs:w-[500px] sm:w-[610px] md:w-full lg:w-[960px] xl:w-[1040px] 2xl:w-[1430px]">
        <ul className="flex flex-wrap">
          {gameFullData.map((game, index) => (
            <li key={index} className={`mx-[6px] my-4 max-md:w-[140px]`}>
              <GameCard gameData={game} />
            </li>
          ))}
        </ul>
        <div className="h-[555px] max-2xl:-translate-x-24 max-lg:hidden md:-translate-x-0 lg:w-[260px]">
          <FiltersPanel filtersData={filtersData} />
        </div>
      </div>
      <Pagination pagesMaxNumber={137} />
    </div>
  );
}

export default BrowseGamesSection;
