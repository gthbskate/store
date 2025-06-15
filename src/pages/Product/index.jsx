import React from "react";
import ProductComponent from "../../components/Product";
import LazySection from "../../components/LazySection";

const Product = () => {
  return (
    <>
      <LazySection threshold={0}>
        <ProductComponent />
      </LazySection>
    </>
  );
};

export default Product;
