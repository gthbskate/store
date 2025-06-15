import React from "react";
import Main from "../../components/Main";
import Categories from "../../components/Categories";
import Benefits from "../../components/Benefits";
import ProductsSlider from "../../components/ProductsSlider";
import LazySection from "../../components/LazySection";

const Home = () => {
  return (
    <>
      <LazySection threshold={0}>
        <Main />
      </LazySection>
      <LazySection>
        <Categories />
      </LazySection>
      <LazySection>
        <ProductsSlider />
      </LazySection>
      <LazySection>
        <Benefits />
      </LazySection>
    </>
  );
} ;

export default Home;
