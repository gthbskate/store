import React from "react";
import "./styles.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__spinner" />
      <span className="loader__text">Loading...</span>
    </div>
  );
};

export default Loader;
