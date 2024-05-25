import React from "react";
import PaymentSummaryGameCard from "../cards/PaymentSummaryGameCard.jsx";

function PaymentSummaryGamesSection({ cartGamesData }) {
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
