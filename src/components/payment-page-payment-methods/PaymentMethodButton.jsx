import React, { useState } from "react";
import CheckCircleIcon from "./icons/CheckCircleIcon.jsx";
import FilledCheckCircleIcon from "./icons/FilledCheckCircleIcon.jsx";

function PaymentMethodButton({ paymentData }) {
  const [isActive, setIsActive] = useState(false);

  const { icon, text } = paymentData;

  function handlePaymentClick() {
    setIsActive(!isActive);
  }

  return (
    <button
      onClick={handlePaymentClick}
      className={`flex h-[60px] w-full items-center space-x-4 rounded-lg border-2 bg-custom-gray-300 px-4 py-2 text-custom-white ${isActive ? "border-custom-emerald" : "border-transparent"}`}
    >
      {isActive ? <FilledCheckCircleIcon /> : <CheckCircleIcon />}
      <button className="flex h-[40px] w-[80px] items-center justify-center rounded-lg border">
        {icon}
      </button>
      <p>{text}</p>
    </button>
  );
}

export default PaymentMethodButton;
