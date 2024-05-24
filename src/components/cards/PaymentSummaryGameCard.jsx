import React from "react";
import GamePrice from "../main-elements/GamePrice.jsx";

function PaymentSummaryGameCard({ gameData }) {
  const { image, title, company, discount, baseGamePrice } = gameData;

  return (
    <div className="flex items-center gap-2 rounded-lg">
      <div className="h-[100px] w-[65px]">
        <img
          className="inset-0 h-full w-full self-center rounded-lg object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex h-[80px] flex-col justify-center space-y-1 text-custom-white">
        <p className="text-[15px]">{title}</p>
        <p className="text-sm">{company}</p>
        <p className="text-xs">
          <GamePrice baseGamePrice={baseGamePrice} discount={discount} />
        </p>
      </div>
    </div>
  );
}

export default PaymentSummaryGameCard;
