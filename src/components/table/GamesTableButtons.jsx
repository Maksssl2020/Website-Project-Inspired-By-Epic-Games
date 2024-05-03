import React from "react";
import GamesTableButton from "./GamesTableButton.jsx";
import { MainSliderGamesData } from "../../website-data/MainSliderGamesData.js";
import MainButton from "../main-elements/MainButton.jsx";
import { gamesTableData } from "../../website-data/GamesTableData.js";

function GamesTableButtons({ text, gamesData }) {
  return (
    <div className="flex flex-col space-y-3 text-custom-white">
      <div className="flex">
        <a className="text-2xl">{text}</a>
        <span className="ml-auto">
          <MainButton
            buttonContent="View More"
            additionalStyling={["rounded-md", "w-[115px]"]}
          />
        </span>
      </div>
      <div className="items-center justify-between">
        {gamesData.map((data, index) => (
          <GamesTableButton ket={index} buttonContent={data} />
        ))}
      </div>
    </div>
  );
}

export default GamesTableButtons;
