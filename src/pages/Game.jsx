import React from "react";
import GameImagesSlider from "../components/slider/game-page-slider/GameImagesSlider.jsx";
import GameRequirementsInfo from "../components/game-system-requirements/GameRequirementsInfo.jsx";
import { gameFullData } from "../website-data/GameFullData.js";
import { useParams } from "react-router-dom";

function Game() {
  const { title } = useParams();
  const gameTitle = title.replaceAll("-", " ");
  const gameData = gameFullData.find((game) => game.title === gameTitle);
  console.log(title);

  return (
    <div className="my-10 flex flex-col lg:mx-20">
      <div className="self-center">
        <GameImagesSlider gameData={gameData} />
        <GameRequirementsInfo />
      </div>
    </div>
  );
}

export default Game;
