import React from "react";
import RatingStarIcon from "./icons/RatingStarIcon.jsx";

function Ratings({ gameRatingScore }) {
  const maxRating = 5.0;
  const amountOfStars = [];

  for (let i = 0; i < maxRating; i++) {
    if (i < Math.floor(gameRatingScore)) {
      amountOfStars.push(
        <li>
          <RatingStarIcon colored={true} />
        </li>,
      );
    } else {
      amountOfStars.push(
        <li>
          <RatingStarIcon colored={false} />
        </li>,
      );
    }
  }

  return (
    <ul className="flex items-center">
      {amountOfStars}
      <li className="ju ml-3 rounded-lg bg-custom-emerald px-2 text-custom-white">
        {gameRatingScore.toFixed(1)}
      </li>
    </ul>
  );
}

export default Ratings;
