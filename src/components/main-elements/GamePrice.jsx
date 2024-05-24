import React from "react";
import { calculateFinalPrice } from "../../helpers/PriceCalculator.js";

function GamePrice({ baseGamePrice, discount, pricePosition = null }) {
  function calcGamePriceAfterDiscount() {
    let gamePriceAfterDiscount = calculateFinalPrice(baseGamePrice, discount);

    return `PLN ${gamePriceAfterDiscount.toFixed(2)}`;
  }

  let gamePrice;
  let discountInfo = null;
  let gamePriceAfterDiscount;

  if (baseGamePrice === 0) {
    gamePrice = "Free";
  } else if (discount > 0) {
    gamePrice = (
      <p className="text-custom-gray-100 line-through">
        {`PLN ${baseGamePrice.toFixed(2)}`}{" "}
      </p>
    );

    gamePriceAfterDiscount = <p>{calcGamePriceAfterDiscount()}</p>;
    discountInfo = (
      <p className="w-auto rounded-md bg-custom-emerald md:h-5 md:w-9 md:px-1 md:py-0.5 md:text-[10px] lg:h-6 lg:w-12 lg:px-2 lg:py-1 lg:text-[12px]">
        {`-${discount}%`}
      </p>
    );
  } else {
    gamePrice = `PLN ${baseGamePrice.toFixed(2)}`;
  }

  return (
    <div className="flex items-center gap-2">
      {discountInfo}
      {pricePosition === "ml-auto" ? (
        <div className={pricePosition}>
          {gamePrice} {gamePriceAfterDiscount}
        </div>
      ) : (
        <>
          {gamePrice}
          {gamePriceAfterDiscount}
        </>
      )}
    </div>
  );
}

export default GamePrice;
