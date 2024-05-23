import React from "react";
import CreditCardIcon from "./icons/CreditCardIcon.jsx";
import PaypalIcon from "./icons/PaypalIcon.jsx";
import OnlineBankingPlIcon from "./icons/OnlineBankingPlIcon.jsx";
import BlikIcon from "./icons/BlikIcon.jsx";
import PaySafeCardIcon from "./icons/PaySafeCardIcon.jsx";
import PaymentMethodButton from "./PaymentMethodButton.jsx";

function PaymentMethodButtonsSection() {
  const paymentMethodsData = [
    {
      icon: <CreditCardIcon />,
      text: "Credit Card",
    },
    {
      icon: <PaypalIcon />,
      text: "PayPal",
    },
    {
      icon: <OnlineBankingPlIcon />,
      text: "Online Banking PL",
    },
    {
      icon: <BlikIcon />,
      text: "Blik",
    },
    {
      icon: <PaySafeCardIcon />,
      text: "Paysafeard",
    },
  ];

  return (
    <ul className="mx-4 my-4 space-y-4">
      {paymentMethodsData.map((data, index) => (
        <li key={index}>
          <PaymentMethodButton paymentData={data} />
        </li>
      ))}
    </ul>
  );
}

export default PaymentMethodButtonsSection;
