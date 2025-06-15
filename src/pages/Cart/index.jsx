import React from "react";
import PageTitle from "../../components/PageTitle";
import LazySection from "../../components/LazySection";
import CartComponent from "../../components/Cart";

const Product = () => {
  return (
    <>
      <PageTitle />
      <LazySection threshold={0}>
        <CartComponent />
      </LazySection>
    </>
  );
};

export default Product;
