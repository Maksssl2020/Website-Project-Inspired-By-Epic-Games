import React from "react";
import RatingStarIcon from "./icons/RatingStarIcon.jsx";
import Ratings from "./Ratings.jsx";

function TitleSection() {
  return (
    <div>
      <h1 className="text-5xl font-medium text-custom-white">Manor Lords</h1>
      <p className="mt-5">
        <Ratings gameRatingScore={3.6} />
      </p>
      <ul className="mt-6 flex gap-4 text-xl text-custom-gray-100">
        <li>Overview</li>
        <li>DLC</li>
        <li>FAQ</li>
      </ul>
    </div>
  );
}

export default TitleSection;
