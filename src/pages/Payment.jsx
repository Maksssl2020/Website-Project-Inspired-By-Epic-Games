import React from "react";
import PaymentMethodButtonsSection from "../components/payment-page-payment-methods/PaymentMethodButtonsSection.jsx";
import PaymentSummaryPanel from "../components/payment-page-summary-panel/PaymentSummaryPanel.jsx";

function Payment() {
  return (
    <div className="my-10 flex w-full justify-center">
      <div className="w-[1100px] rounded-lg border-2 border-custom-emerald">
        <PaymentMethodButtonsSection />
      </div>
      <div className="ml-4 w-[360px] rounded-lg border-2 border-custom-emerald">
        <PaymentSummaryPanel />
      </div>
    </div>
  );
}

export default Payment;
