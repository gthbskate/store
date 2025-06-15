import React from "react";
import CheckoutPage from "./_children/CheckoutPage";
import "./styles.scss";

const PaymentComponent = () => {
  return (
    <div className="payment">
      <div className="payment__content">
        <CheckoutPage />
      </div>
    </div>
  );
};

export default PaymentComponent;
