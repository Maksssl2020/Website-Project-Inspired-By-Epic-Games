import React from "react";
import PriceInfoLabel from "./PriceInfoLabel.jsx";
import { calcSummaryPrices } from "../../helpers/PriceCalculator.js";
import { Link } from "react-router-dom";
import MainButton from "../main-elements/MainButton.jsx";

function CartGamesSummaryPanel({ gamesData }) {
  const calculatedPrices = calcSummaryPrices(gamesData);

  return (
    <div className="flex flex-col text-custom-white">
      <h2 className="flex w-full text-2xl font-medium xl:justify-center">
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
        additionalStyling="bg-custom-emerald py-2 h-[50px] mt-4 w-full"
        link={"/payment"}
        state={{ gamesData: gamesData }}
      />
    </div>
  );
}

export default CartGamesSummaryPanel;
