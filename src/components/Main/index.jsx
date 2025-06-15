import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="main__content">
        <h1 className="main__title">Exclusive Deals of Furniture Collection</h1>
        <p className="main__description" >Explore different categories. Find the best deals.</p>
        <Link to="/products" className="main__button--products">
          Shop Now
        </Link>
      </div>
    </div>
  );
} ;

export default Main;
