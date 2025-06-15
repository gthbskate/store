import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { resetProduct, deleteProduct } from "../../slices/shopingCartReducer";
import LazyImage from "../LazyImage";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import "./styles.scss";

const CartItem = React.memo(({ item }) => {
  const dispatch = useDispatch();

  const updateQuantity = useCallback((type) => {
    if (!item?.quantity || item.quantity < 1) return;

    const newQuantity =
      type === "inc"
        ? item.quantity + 1
        : type === "dec"
        ? Math.max(item.quantity - 1, 1)
        : item.quantity;

    dispatch(resetProduct({ ...item, quantity: newQuantity }));
  }, [item, dispatch]);

  const handleDeleteToCart = useCallback(() => {
    dispatch(deleteProduct(item.id));
  }, [item, dispatch]);

  return (
    <article className="cart__card">
      <LazyImage 
        src={item?.images?.[0]}
        alt="transaction"
        className="cart__card--image"
        lazy={true}
      />
      <div className="cart__card--content">
        <header className="cart__card--header">
          <h3 className="cart__card--title">
            {item?.category}
          </h3>
        </header>
        <section className="cart__card--section">
          <p className="cart__card--product">
            {item?.title}
          </p>
          <p className="cart__card--description">
            $ {item?.price}
          </p>
        </section>
        <footer className="cart__card--footer">
          <div className="cart__card--quantity">
            <button className="cart__card--button-quantity" onClick={() => updateQuantity("dec")}>
              <img src={minus} alt="minus" width="30" height="30" />
            </button>
            <span className="cart__card--number">{item?.quantity}</span>
            <button className="cart__card--button-quantity" onClick={() => updateQuantity("inc")}>
              <img src={plus} alt="plus" width="30" height="30" />
            </button>
          </div>
          <button className="cart__card--delet-to-card" onClick={handleDeleteToCart}>
            Delete
          </button>
        </footer>
      </div>
    </article>
  );
});

const EmptyCart = () => (
  <div className="cart__empty">
    <h2 className="cart__empty--title">Your cart is empty</h2>
    <p className="cart__empty--description">Add products to view them here.</p>
  </div>
);

const CartComponent = () => { 
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.shopingCart);
  const paymentId = uuidv4();

  const { totalQuantity, totalPrice } = useMemo(() => {
    return cartItems.reduce((totals, item) => {
      totals.totalQuantity += item.quantity;
      totals.totalPrice += item.quantity * item.price;
      return totals;
    }, { totalQuantity: 0, totalPrice: 0 });
  }, [cartItems]);

  const handleToPay = useCallback(() => {
    navigate(`/payment/${paymentId}`);
  }, [navigate, paymentId]);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="cart">
        <EmptyCart />
      </div>
    );
  }
  
  return(
    <div className="cart">
      <div className="cart__content">
        <div className="cart__content--cards">
          {cartItems?.map((item) => (
            <CartItem key={item?.id} item={item} />
          ))}
        </div>
        <div className="cart__content--summary">
          <h4 className="cart__content--total-products">Total Products: {totalQuantity}</h4>
          <h4 className="cart__content--total-price">Total Precio: $ {totalPrice.toFixed(2)}</h4>
          <button className="cart__content--button-pay" onClick={handleToPay}>
            Proceder al pago
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartComponent;
