import React from "react";
import GenresSection from "../components/broswe-page-genres-section/GenresSection.jsx";
import BrowseGameSection from "../components/games-section/BrowseGameSection.jsx";

function Browse() {
  return (
    <div className="mx-20 mt-10">
      <div className="mx-auto">
        <GenresSection />
      </div>
      <div className="mt-20 flex justify-center">
        <BrowseGameSection />
      </div>
    </div>
  );
}

export default Browse;
