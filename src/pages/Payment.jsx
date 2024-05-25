import React from "react";
import PaymentMethodButtonsSection from "../components/payment-page-payment-methods/PaymentMethodButtonsSection.jsx";
import PaymentSummaryPanel from "../components/payment-page-summary-panel/PaymentSummaryPanel.jsx";
import { PaymentMethodButtonProvider } from "../components/payment-page-payment-methods/PaymentMethodButtonProvider.jsx";

function Payment() {
  return (
    <PaymentMethodButtonProvider>
      <div className="my-10 flex w-full justify-center">
        <div className="w-[1100px] rounded-lg border-2 border-custom-emerald">
          <PaymentMethodButtonsSection />
        </div>
        <div className="ml-4 w-[360px] rounded-lg border-2 border-custom-emerald">
          <PaymentSummaryPanel />
        </div>
      </div>
    </PaymentMethodButtonProvider>
  );
}

export default Payment;
