import React from "react";
import FreeGameCard from "../cards/FreeGameCard.jsx";
import GiftIcon from "../cards/icons/GiftIcon.jsx";
import HeaderButton from "../header/HeaderButton.jsx";
import { FreeGamesData } from "../../website-data/FreeGamesData.js";
import MainButton from "../main-elements/MainButton.jsx";

function FreeGamesSection() {
  return (
    <div className=" rounded-lg bg-custom-gray-300 text-custom-white 2xl:w-[1230px] 3xl:h-[670px]  3xl:w-[1430px]">
      <div className="m-8">
        <div className="mb-8 flex h-[30px] items-center gap-4">
          <GiftIcon />
          <h2 className="text-lg">Free Games</h2>
          <span className="ml-auto rounded-lg">
            <MainButton
              buttonContent="View More"
              additionalStyling={[
                "text-lg",
                "w-[150px]",
                "h-[45px]",
                "border-2",
                "hover:bg-custom-gray-100",
                "hover:bg-opacity-15",
              ]}
            />
          </span>
        </div>
        <div>
          <ul className="flex justify-center gap-5">
            {FreeGamesData.map((data, index) => (
              <li>
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
