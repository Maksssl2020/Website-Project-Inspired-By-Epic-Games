import PaymentSummaryGamesSection from "../sections/payment/PaymentSummaryGamesSection.jsx";
import PriceInfoLabel from "../cart-page-side-panel/PriceInfoLabel.jsx";
import MainButton from "../main-elements/MainButton.jsx";
import CancelIcon from "./icons/CancelIcon.jsx";
import { calcSummaryPrices } from "../../helpers/PriceCalculator.js";
import { usePayments } from "../payment-page-payment-methods/PaymentMethodButtonProvider.jsx";

function PaymentSummaryPanel({ cartGames }) {
  const { selectedPaymentMethod } = usePayments();
  const calculatedPrices = calcSummaryPrices(cartGames);
  console.log(cartGames);
  return (
    <div className="h-full w-full p-4">
      <div className="mb-4 flex items-center font-bold text-custom-white">
        <h2 className="mr-auto">SUMMARY</h2>
        <MainButton buttonContent={<CancelIcon />} link="/cart" />
      </div>
      <div className="w-full">
        <PaymentSummaryGamesSection cartGamesData={cartGames} />
      </div>
      <div className="mt-4 text-custom-white">
        <PriceInfoLabel valueTitle="Price" value={calculatedPrices[0]} />
        <PriceInfoLabel
          valueTitle="Sale Discount"
          value={calculatedPrices[1]}
        />
        <PriceInfoLabel valueTitle="Including VAT" />
        <div className="my-2 border border-custom-emerald" />
        <p className="font-bold">
          <PriceInfoLabel valueTitle="Subtotal" value={calculatedPrices[2]} />
        </p>
        <div className="mt-4 overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          <PriceInfoLabel valueTitle="Payment details:" />
          <PriceInfoLabel
            valueTitle={`${selectedPaymentMethod} - f***y@gmail.com`}
            value={calculatedPrices[2]}
          />
        </div>
      </div>
      <div className="mt-6 text-custom-white">
        <MainButton
          buttonContent="SUBMIT YOUR ORDER"
          additionalStyling="bg-custom-emerald w-full h-[50px] font-medium"
          link={"/"}
        />
      </div>
    </div>
  );
}

export default PaymentSummaryPanel;
