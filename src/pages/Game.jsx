import React from "react";
import TitleSection from "../components/game-page-title-section/TitleSection.jsx";
import GameImagesSlider from "../components/game-page-slider/GameImagesSlider.jsx";
import GameRequirementsInfo from "../components/game-system-requirements/GameRequirementsInfo.jsx";

function Game() {
  return (
    <div className="mx-20 my-10">
      <TitleSection />
      <GameImagesSlider />
      <GameRequirementsInfo />
    </div>
  );
}

export default Game;
