import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const ErrorMessage = ({ message = "Something went wrong." }) => {
  return (
    <div className="error-message">
      <p className="error-message__text">{message}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: "Something went wrong.",
};

export default ErrorMessage;
