import React from "react";
import GameImagesSlider from "../components/slider/game-page-slider/GameImagesSlider.jsx";
import GameRequirementsInfo from "../components/game-system-requirements/GameRequirementsInfo.jsx";
import { gameFullData } from "../website-data/GameFullData.js";
import { useParams } from "react-router-dom";
import SidePanel from "../components/game-page-side-panel/SidePanel.jsx";
import TitleSection from "../components/game-page-title-section/TitleSection.jsx";

function Game() {
  const { title } = useParams();
  const gameTitle = title.replaceAll("-", " ");
  const gameData = gameFullData.find((game) => game.title === gameTitle);

  return (
    <div className="my-10 flex flex-col lg:mx-20">
      <div className="self-center">
        <div>
          <TitleSection title={title} ratings={gameData.ratings} />
        </div>
        <div className="flex self-center">
          <GameImagesSlider gameData={gameData} />
          <div className="max-md:hidden">
            <SidePanel gameData={gameData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
