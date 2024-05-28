import React from "react";
import GamePrice from "../../main-elements/GamePrice.jsx";
import { calcSaleEndDate } from "../../../helpers/DateCalculator.js";

function ExtendedGamePriceInfoLabel({ priceData }) {
  const { baseGamePrice, discount } = priceData;

  return (
    <div className="mb-auto ml-auto flex flex-col">
      <GamePrice baseGamePrice={baseGamePrice} discount={discount} />
      {discount !== 0.0 ? (
        <p className="mt-2 text-sm">{`Sale ends ${calcSaleEndDate()}`}</p>
      ) : undefined}
    </div>
  );
}

export default ExtendedGamePriceInfoLabel;
