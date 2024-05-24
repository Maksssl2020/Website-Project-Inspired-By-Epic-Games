import React from "react";
import PaymentSummaryGamesSection from "../games-section/PaymentSummaryGamesSection.jsx";
import PriceInfoLabel from "../cart-page-side-panel/PriceInfoLabel.jsx";
import MainButton from "../main-elements/MainButton.jsx";
import CancelIcon from "./icons/CancelIcon.jsx";

function PaymentSummaryPanel() {
  return (
    <div className="h-full w-full p-4">
      <div className="mb-4 flex items-center font-bold text-custom-white">
        <h2>SUMMARY</h2>
        <MainButton
          buttonContent={<CancelIcon />}
          additionalStyling={["ml-auto"]}
          link="/cart"
        />
      </div>
      <div className="w-full">
        <PaymentSummaryGamesSection />
      </div>
      <div className="mt-4 text-custom-white">
        <PriceInfoLabel valueTitle="Price" value={2323} />
        <PriceInfoLabel valueTitle="Sale Discount" value={2323} />
        <PriceInfoLabel valueTitle="Including VAT" />
        <div className="my-2 border border-custom-emerald" />
        <p className="font-bold">
          <PriceInfoLabel valueTitle="Subtotal" value={2323} />
        </p>
        <div className="mt-4">
          <PriceInfoLabel valueTitle="Payment details:" />
          <PriceInfoLabel valueTitle="PayPal - m***i@o2.pl" value={2323} />
        </div>
      </div>
      <div className="mt-6 text-custom-white">
        <MainButton
          buttonContent="SUBMIT YOUR ORDER"
          additionalStyling={[
            "bg-custom-emerald",
            "w-full",
            "h-[50px]",
            "font-medium",
          ]}
        />
      </div>
    </div>
  );
}

export default PaymentSummaryPanel;
