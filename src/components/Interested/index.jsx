import React from "react";
import PropTypes from "prop-types";
import useProductsSelected from "../../utils/customHooks/useProductsSelected";
import SliderProducts from "../Slider";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";
import "./styles.scss";

const Interested = ({ category }) => {
  const { products, loading, error } = useProductsSelected(category);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message="No product available." />;
  if (!products?.[0]?.products?.length) return null;

  return (
    <div className="interested">
      <div className="interested__content">
        <h3 className="interested__title">Related products</h3>
        <SliderProducts products={products?.[0]?.products} size={3}/>
      </div>
    </div>
  );
};

Interested.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Interested;
