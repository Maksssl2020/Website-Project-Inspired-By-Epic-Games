import React from "react";
import GenresSection from "../components/browse-page-genres-section/GenresSection.jsx";
import BrowseGamesSection from "../components/games-section/BrowseGamesSection.jsx";

function Browse() {
  return (
    <div className="mx-20 mt-10">
      <div className="mx-auto">
        <GenresSection />
      </div>
      <div className="mt-20 flex justify-center">
        <BrowseGamesSection />
      </div>
    </div>
  );
}

export default Browse;
