import React from "react";
import useProducts from "../../utils/customHooks/useProducts";
import SliderProducts from "../Slider";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import "./styles.scss";

const ProductsSlider = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message="Error loading products, try again." />;

  return (
    <section className="products-slider">
      <div className="products-slider__content">
        <header className="products-slider__header">
          <h2 className="products-slider__title">Popular Products</h2>
        </header>

        {products.length > 0 && (
          <SliderProducts products={products} size={7} />
        )}
      </div>
    </section>
  );
};

export default ProductsSlider;
