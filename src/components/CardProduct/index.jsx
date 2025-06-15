import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementProduct } from "../../slices/shopingCartReducer";
import LazyImage from "../LazyImage";
import notImage from "../../assets/images/not-image.png";
import randomColor from "../../utils/utilities/randomColor";
import "./styles.scss";

const CardProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [alertVisible, setAlertVisible] = useState('close');

  const bgColor = useMemo(() => randomColor(), []);

  const handleAddToCart = () => {
    setAlertVisible("open");

    const productToAdd = { ...product, quantity: 1 };
    
    dispatch(incrementProduct(productToAdd));
    setTimeout(() => {
      setAlertVisible("close");
    }, 2000);
  };

  return (
    <article className="card-product" style={{ backgroundColor: bgColor }}>
      <Link to={`/product/${product?.id}`} className="card-product__link"> 
        <header>
          <LazyImage 
            src={product?.images?.[0] || notImage}
            alt={product?.title || "No name"}
            lazy={true}
          />
        </header>
        <section className="card-product__info">
          <h3 className="card-product__title">{product?.category || "No name"}</h3>
          <p className="card-product__description">{product?.title}</p>
          <p className="card-product__price">${product?.price}</p>
        </section>
      </Link>
      <footer>
        <button 
          className="card-product__button"
          onClick={handleAddToCart}
          aria-label="Add product to cart"
        >
          Add to cart
        </button>
      </footer>
      <div className={`card-product__alert ${alertVisible}`}>
        <p className="card-product__alert--text">Product added to cart !</p>
      </div>
    </article>
  );
};

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CardProduct;
