import React, { createContext, useContext } from "react";

const PaymentMethodButtonContext = createContext(undefined);

function PaymentMethodButtonProvider({ children }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    React.useState("Credit Card");

  return (
    <PaymentMethodButtonContext.Provider
      value={{ selectedPaymentMethod, setSelectedPaymentMethod }}
    >
      {children}
    </PaymentMethodButtonContext.Provider>
  );
}

function usePayments() {
  const payments = useContext(PaymentMethodButtonContext);
  return payments;
}

export { PaymentMethodButtonProvider, usePayments };
