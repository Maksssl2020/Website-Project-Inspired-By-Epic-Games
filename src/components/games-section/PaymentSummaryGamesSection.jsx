import React from "react";
import { cartGamesData } from "../../website-data/CartGamesData.js";
import PaymentSummaryGameCard from "../cards/PaymentSummaryGameCard.jsx";

function PaymentSummaryGamesSection() {
  return (
    <ul className="space-y-1">
      {cartGamesData.map((game, index) => (
        <li key={index}>
          <PaymentSummaryGameCard gameData={game} />
        </li>
      ))}
    </ul>
  );
}

export default PaymentSummaryGamesSection;
