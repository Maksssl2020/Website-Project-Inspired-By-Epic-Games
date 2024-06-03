import React, { useState } from "react";
import CheckCircleIcon from "./icons/CheckCircleIcon.jsx";
import FilledCheckCircleIcon from "./icons/FilledCheckCircleIcon.jsx";

function PaymentMethodButton({ paymentData, isActive, onClick }) {
  const { icon, text } = paymentData;

  return (
    <button
      onClick={onClick}
      className={`flex h-[60px] w-full items-center space-x-4 rounded-lg border-2 bg-custom-gray-300 stroke-custom-white px-4 py-2 text-custom-white ${isActive ? "border-custom-emerald" : "border-transparent"}`}
    >
      {isActive ? <FilledCheckCircleIcon /> : <CheckCircleIcon />}
      <div className="flex h-[40px] w-[80px] items-center justify-center rounded-lg border">
        {icon}
      </div>
      <p>{text}</p>
    </button>
  );
}

export default PaymentMethodButton;
