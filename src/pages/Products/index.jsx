import React from "react";
import PageTitle from "../../components/PageTitle";
import ProductsComponent from "../../components/Products";
import LazySection from "../../components/LazySection";

const Products = () => {
  return (
    <>
      <PageTitle />
      <LazySection threshold={0}>
        <ProductsComponent />
      </LazySection>
    </>
  );
};

export default Products;
