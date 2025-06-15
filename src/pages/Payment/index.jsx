import React from "react";
import PaymentComponent from "../../components/Payment";
import LazySection from "../../components/LazySection";

const Payment = () => {
  return (
    <>
      <LazySection threshold={0}>
        <PaymentComponent />
      </LazySection>
    </>
  );
};

export default Payment;
