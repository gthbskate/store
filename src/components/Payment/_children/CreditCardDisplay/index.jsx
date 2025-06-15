import React from "react";
import PropTypes from "prop-types";
import chip from "../../../../assets/icons/chip.svg";
import visa from "../../../../assets/icons/visa.svg";
import "./styles.scss";

const CreditCardDisplay = ({ formData, isFlipped }) => {
  const formatCardNumber = (number) => {
    const cleaned = number.replace(/\D/g, '');
    const parts = cleaned.match(/.{1,4}/g) || [];
    return parts.join(' ').padEnd(19, '•');
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`}>
      <div className="card__face card__front">
        <div className="card__header">
          <img src={chip} alt="chip" className="card__chip" />
          <img src={visa} alt="visa logo" className="card__logo" />
        </div>
        <div className="card__number">
          {formatCardNumber(formData.cardNumber)}
        </div>
        <div className="card__footer">
          <div className="card__holder">
            <span>Card Holder</span>
            <span>{formData.cardName || ""}</span>
          </div>
          <div className="card__expiry">
            <span>Expires</span>
            <span>{formData.expiryDate || "MM/YY"}</span>
          </div>
        </div>
      </div>

      <div className="card__face card__back">
        <div className="card__magnetic-strip"></div>
        <div className="card__cvc-band">
          <span className="card__cvc-value">{formData.cvc}</span>
        </div>
        <p className="card__disclaimer">
          This card is for demonstration purposes only. Do not enter real credit card information.
        </p>
      </div>
    </div>
  );
};

CreditCardDisplay.propTypes = {
  formData: PropTypes.shape({
    cardNumber: PropTypes.string.isRequired,
    cardName: PropTypes.string.isRequired,
    expiryDate: PropTypes.string.isRequired,
    cvc: PropTypes.string.isRequired,
  }).isRequired,
  isFlipped: PropTypes.bool.isRequired,
};

export default CreditCardDisplay;
