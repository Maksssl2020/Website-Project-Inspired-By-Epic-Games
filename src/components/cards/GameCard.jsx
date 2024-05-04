import React from "react";
import GamePrice from "../main-elements/GamePrice.jsx";
import gamePrice from "../main-elements/GamePrice.jsx";

function GameCard({ gameData }) {
  const { image, edition, title, discount, price } = gameData;

  return (
    <div className="mx-4 my-4 rounded-lg border-2 border-transparent font-medium transition-transform ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:border-custom-emerald md:w-[132px] lg:w-[152px] xl:w-[172px] 2xl:w-[212px]">
      <div className="relative md:h-[202px] lg:h-[222px] xl:h-[242px] 2xl:h-[282px]">
        <img
          className="inset-0 h-full w-full rounded-md object-cover"
          src={image}
          alt={`${title} - cover`}
        />
      </div>
      <div className="mt-1 sm:text-[13px] md:text-[15px]">
        <p className="text-custom-gray-100 sm:text-[11px] md:text-[13px]">
          {edition}
        </p>
        <p className="text-custom-white">{title}</p>
        <p className="text-sm text-custom-white">
          <GamePrice
            baseGamePrice={price}
            discount={discount}
            pricePosition={"ml-auto"}
          />
        </p>
      </div>
    </div>
  );
}

export default GameCard;
