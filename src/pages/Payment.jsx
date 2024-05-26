import React from "react";
import PaymentMethodButtonsSection from "../components/payment-page-payment-methods/PaymentMethodButtonsSection.jsx";
import PaymentSummaryPanel from "../components/payment-page-summary-panel/PaymentSummaryPanel.jsx";
import { PaymentMethodButtonProvider } from "../components/payment-page-payment-methods/PaymentMethodButtonProvider.jsx";
import { useLocation } from "react-router-dom";

function Payment() {
  let { gamesData } = useLocation().state;

  return (
    <PaymentMethodButtonProvider>
      <div className="my-10 flex w-full justify-center">
        <div className="w-[1050px] rounded-lg border-2 border-custom-emerald">
          <PaymentMethodButtonsSection />
        </div>
        <div className="ml-4 w-[400px] rounded-lg border-2 border-custom-emerald">
          <PaymentSummaryPanel cartGames={gamesData} />
        </div>
      </div>
    </PaymentMethodButtonProvider>
  );
}

export default Payment;
