import React from "react";
import PaymentMethodButtonsSection from "../components/payment-page-payment-methods/PaymentMethodButtonsSection.jsx";
import PaymentSummaryPanel from "../components/payment-page-summary-panel/PaymentSummaryPanel.jsx";
import { PaymentMethodButtonProvider } from "../components/payment-page-payment-methods/PaymentMethodButtonProvider.jsx";
import { useLocation } from "react-router-dom";

function Payment() {
  let { gamesData } = useLocation().state;

  return (
    <PaymentMethodButtonProvider>
      <div className="mx-auto my-10 flex w-full justify-center max-md:flex-col max-md:items-center">
        <div className="mb-4 w-[95%] rounded-lg border-2 border-custom-emerald md:hidden md:w-[350px] xl:w-[400px]">
          <PaymentSummaryPanel cartGames={gamesData} />
        </div>
        <div className="w-[95%] rounded-lg border-2 border-custom-emerald max-3xs:text-xs md:w-[500px] lg:w-[650px] xl:w-[900px] 2xl:w-[1030px]">
          <PaymentMethodButtonsSection />
        </div>
        <div className="ml-4 rounded-lg border-2 border-custom-emerald max-md:hidden md:w-[350px] xl:w-[400px]">
          <PaymentSummaryPanel cartGames={gamesData} />
        </div>
      </div>
    </PaymentMethodButtonProvider>
  );
}

export default Payment;
