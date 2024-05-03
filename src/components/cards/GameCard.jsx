import React from "react";

function GameCard({ gameData }) {
  const { image, edition, title, discount, price } = gameData;

  function calcGamePriceAfterDiscount() {
    let discountAsPercent = discount / 100;
    let gamePriceAfterDiscount = price - price * discountAsPercent;

    return `PLN ${gamePriceAfterDiscount.toFixed(2)}`;
  }

  let priceAfterDiscount =
    discount > 0 ? (
      <p className="text-custom-white">{calcGamePriceAfterDiscount()}</p>
    ) : undefined;

  let discountInfo =
    discount > 0 ? (
      <p className="self-center rounded-md bg-custom-emerald md:h-5 md:w-9 md:px-1 md:py-0.5 md:text-[10px] lg:h-6 lg:w-12 lg:px-2 lg:py-1 lg:text-[12px]">
        {`-${discount}%`}
      </p>
    ) : undefined;

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

        <div className="mt-4 flex">
          {discountInfo}
          <div className="ml-auto">
            <p
              className={
                discount > 0
                  ? "text-custom-gray-100 line-through"
                  : "text-custom-white"
              }
            >{`PLN ${parseFloat(price).toFixed(2)}`}</p>
            {priceAfterDiscount}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
