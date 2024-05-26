import React from "react";
import GenresSlider from "../slider/genres-slider/GenresSlider.jsx";

function GenresSection() {
  return (
    <div className="max-sm::hidden">
      <h2 className="mb-6 text-2xl font-medium text-custom-white">
        Popular Genres
      </h2>
      <GenresSlider />
    </div>
  );
}

export default GenresSection;
