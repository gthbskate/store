import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useProductById from "../../utils/customHooks/useProductById";
import { resetProduct } from "../../slices/shopingCartReducer";
import LazyImage from "../LazyImage";
import randomColor from "../../utils/utilities/randomColor";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import Interested from "../Interested";
import LazySection from "../LazySection";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import "./styles.scss";

const ProductComponent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useProductById(id);
  const cartItems = useSelector((state) => state.shopingCart);
  const [quantity, setQuantity] = useState(1);
  const [alertType, setAlertType] = useState(null);

  const alertTimeoutRef = useRef(null);
  const bgColor = useMemo(() => randomColor(), []);

  const showAlert = useCallback((type) => {
    setAlertType(type);
    if (alertTimeoutRef.current) clearTimeout(alertTimeoutRef.current);
    alertTimeoutRef.current = setTimeout(() => setAlertType(null), 2000);
  }, []);

  const updateQuantity = (type) => {
    setQuantity((prev) => {
      if (type === "inc") return Math.min(prev + 1, product.stock || 99);
      if (type === "dec") return Math.max(prev - 1, 0);
      return prev;
    });
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(resetProduct({ ...product, quantity }));
      showAlert("success");
    } else {
      showAlert("error");
    }
  };

  const handleGoToCart = () => {
    if (quantity > 0) {
      dispatch(resetProduct({ ...product, quantity }));
      navigate("/cart");
      showAlert("success");
    } else {
      showAlert("error");
    }
  };

  useEffect(() => {
    const existingItem = cartItems.find(item => item.id === parseInt(id, 10));
    setQuantity(existingItem?.quantity || 1);
  }, [cartItems, id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message="No product aviable." />;

  return (
    <div className="product">
      <div className="product__content">
        <article className="product__article">
          <div className="product__article--content" style={{ backgroundColor: bgColor }}>
            <LazyImage 
              src={product?.images?.[0]}
              alt={product?.title}
              className="product__image"
              lazy={true}
            />
          </div>
          <div className="product__info">
            <header className="product__info--header">
              <h2 className="product__info--category">{product.category}</h2>
            </header>
            <section className="product__info--section">
              <h3 className="product__info--title">{product.title}</h3>
              <p className="product__info--price">${product.price}</p>
              <p className="product__info--description">{product.description}</p>
            </section>
            <footer className="product__info--footer">
              <div className="product__info--quantity">
                <button className="product__info--button-quantity" onClick={() => updateQuantity("dec")} aria-label="Decrease quantity">
                  <img src={minus} alt="minus" width="30" height="30" />
                </button>
                <span className="product__info--number">{quantity}</span>
                <button className="product__info--button-quantity" onClick={() => updateQuantity("inc")} aria-label="Increase quantity">
                  <img src={plus} alt="plus" width="30" height="30" />
                </button>
              </div>
              <button className="product__info--add-to-cart" onClick={handleAddToCart}>
                Add to cart
              </button>
              <button className="product__info--add-to-cart-two" onClick={handleGoToCart}>
                Shop now
              </button>
            </footer>
          </div>
          {alertType === "success" && (
            <div className="product__alert open">
              <p className="product__alert--text">Product added to cart!</p>
            </div>
          )}
          {alertType === "error" && (
            <div className="product__alert-error open">
              <p className="product__alert--text">Add products to cart!</p>
            </div>
          )}
        </article>
        <LazySection threshold={0.1}>
          <Interested category={product.category} />
        </LazySection>
      </div>
    </div>
  );
};

export default ProductComponent;
