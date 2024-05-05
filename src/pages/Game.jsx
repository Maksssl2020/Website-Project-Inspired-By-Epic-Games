import React from "react";
import GameImagesSlider from "../components/slider/game-page-slider/GameImagesSlider.jsx";
import GameRequirementsInfo from "../components/game-system-requirements/GameRequirementsInfo.jsx";
import { gameFullData } from "../website-data/GameFullData.js";

function Game() {
  return (
    <div className="mx-20 my-10 flex flex-col">
      <div className="self-center">
        <GameImagesSlider gameData={gameFullData[0]} />
        <GameRequirementsInfo />
      </div>
    </div>
  );
}

export default Game;
