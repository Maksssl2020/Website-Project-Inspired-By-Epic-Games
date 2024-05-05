import React from "react";
import Ratings from "./Ratings.jsx";

function TitleSection({ title, ratings }) {
  const additionalSectionsNames = ["Overview", "DLC", "FAQ", "Reviews"];

  return (
    <div>
      <h1 className="text-5xl font-medium text-custom-white">{title}</h1>
      <p className="mt-5">
        <Ratings gameRatingScore={ratings} />
      </p>
      <ul className="mt-6 flex gap-4 text-xl text-custom-gray-100">
        {additionalSectionsNames.map((sectionName) => (
          <li className="border-b-2 border-transparent hover:cursor-pointer hover:border-custom-emerald">
            {sectionName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TitleSection;
