import React from "react";
import FreeGameCard from "../../cards/FreeGameCard.jsx";
import GiftIcon from "../../cards/icons/GiftIcon.jsx";
import { FreeGamesData } from "../../../website-data/FreeGamesData.js";
import MainButton from "../../main-elements/MainButton.jsx";

function FreeGamesSection() {
  return (
    <div className="rounded-lg bg-custom-gray-300 text-custom-white max-md:mx-2 md:mx-4 xl:w-[1230px] 2xl:h-[670px] 2xl:w-[1430px]">
      <div className="max-md:mx-2 max-md:mb-6 max-md:mt-8 md:m-8">
        <div className="mb-8 flex items-center gap-4 max-lg:h-[30px] max-sm:h-[15px]">
          <GiftIcon />
          <h2 className="text-lg max-md:text-sm">Free Games</h2>
          <span className="ml-auto rounded-lg">
            <MainButton
              buttonContent="View More"
              additionalStyling="text-lg w-[150px] h-[45px] border-2 hover:bg-custom-gray-100 hover:bg-opacity-15 max-lg:w-[115px] max-lg:h-[35px] max-lg:text-sm"
            />
          </span>
        </div>
        <div>
          <ul className="flex justify-center gap-5 max-md:flex-wrap">
            {FreeGamesData.map((data, index) => (
              <li key={index}>
                <FreeGameCard key={index} freeGameData={data} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FreeGamesSection;
