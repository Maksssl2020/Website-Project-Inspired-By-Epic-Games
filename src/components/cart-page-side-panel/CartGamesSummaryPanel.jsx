import React from "react";
import MainButton from "../main-elements/MainButton.jsx";
import PriceInfoLabel from "./PriceInfoLabel.jsx";

function CartGamesSummaryPanel({ gamesData }) {
  function calcSummaryPrices() {
    let sumOfBasicGamesPrice = 0.0;
    let sumOfGamesDiscount = 0.0;
    let sumOfGamesEndPrice = 0.0;

    gamesData.forEach((game) => {
      let discountAsPercent = game.discount / 100;
      let gamePriceAfterDiscount = game.baseGamePrice * discountAsPercent;
      sumOfBasicGamesPrice += game.baseGamePrice;
      sumOfGamesDiscount += gamePriceAfterDiscount;
      sumOfGamesEndPrice += game.baseGamePrice - gamePriceAfterDiscount;
    });

    return Array.of(
      `PLN ${sumOfBasicGamesPrice.toFixed(2)}`,
      `-PLN ${sumOfGamesDiscount.toFixed(2)}`,
      `PLN ${sumOfGamesEndPrice.toFixed(2)}`,
    );
  }

  const calculatedPrices = calcSummaryPrices();

  return (
    <div className="flex flex-col text-custom-white">
      <h2 className="flex w-full justify-center text-2xl font-medium">
        Games Summary
      </h2>
      <div className="mt-4 space-y-2">
        <PriceInfoLabel valueTitle={"Price"} value={calculatedPrices[0]} />
        <PriceInfoLabel
          valueTitle={"Sale Discount"}
          value={calculatedPrices[1]}
        />
        <div className="flex justify-between">
          <p>Taxes</p>
          <p className="text-custom-gray-100">Calculated at Checkout</p>
        </div>
      </div>
      <div className="my-4 border border-custom-emerald" />
      <div className="font-bold">
        <PriceInfoLabel valueTitle={"Subtotal"} value={calculatedPrices[2]} />
      </div>
      <MainButton
        buttonContent={"CHECK OUT"}
        additionalStyling={["bg-custom-emerald", "py-2", "h-[50px]", "mt-4"]}
      />
    </div>
  );
}

export default CartGamesSummaryPanel;
