import React from "react";
import GenresSection from "../components/browse-page-genres-section/GenresSection.jsx";
import BrowseGamesSection from "../components/sections/browse/BrowseGamesSection.jsx";

function Browse() {
  return (
    <div className="mx-2 mt-10 2xs:mx-20">
      <div className="mx-auto max-3xs:hidden">
        <GenresSection />
      </div>
      <div className="mt-20 flex justify-center">
        <BrowseGamesSection />
      </div>
    </div>
  );
}

export default Browse;
