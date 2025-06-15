import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const PaymentForm = ({ formData, setFormData, setIsFlipped }) => {
  const [errors, setErrors] = useState({});
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    if (name === 'cardNumber') {
      value = value.replace(/\D/g, '').slice(0, 16);
    };
    if (name === 'expiryDate') {
      value = value.replace(/\D/g, '').slice(0, 4);
      if (value.length > 2) {
        value = `${value.slice(0, 2)}/${value.slice(2)}`;
      };
    };
    if (name === 'cvc') {
      value = value.replace(/\D/g, '').slice(0, 3);
    };

    setFormData({ ...formData, [name]: value });
  };
  
  const handleFocus = (e) => {
    setIsFlipped(e.target.name === 'cvc');
  };
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.cardNumber || formData.cardNumber.length < 16) {
      newErrors.cardNumber = 'The card number must have 16 digits.';
    }
    if (!formData.cardName.trim()) {
      newErrors.cardName = 'The name of the owner is required.';
    }
    if (!formData.expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'The date must be in MM/YY format.';
    }
    if (!formData.cvc || formData.cvc.length < 3) {
      newErrors.cvc = 'The CVC must have 3 digits.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setPaymentStatus('processing');

    setTimeout(() => {
      if (formData.cvc === '123') {
        setPaymentStatus('success');
      } else {
        setPaymentStatus('error');
      }
    }, 2500);
  };

  if (paymentStatus === 'success') {
    return <div className="payment-form__payment-feedback success">
      Payment made successfully!
      <button className="payment-form__go-to-home-btn" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>;
  }

  return (
    <form className="payment-form" onSubmit={handleSubmit} noValidate>
      <div className="payment-form__group">
        <label htmlFor="cardNumber">Card number</label>
        <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} onFocus={handleFocus} maxLength="16" />
        {errors.cardNumber && <small className="payment-form__error-text">{errors.cardNumber}</small>}
      </div>
      <div className="payment-form__group">
        <label htmlFor="cardName">Name of the Holder</label>
        <input type="text" id="cardName" name="cardName" value={formData.cardName} onChange={handleInputChange} onFocus={handleFocus} />
        {errors.cardName && <small className="payment-form__error-text">{errors.cardName}</small>}
      </div>
      <div className="payment-form__row">
        <div className="payment-form__group">
          <label htmlFor="expiryDate">Exp Date (MM/YY)</label>
          <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} onFocus={handleFocus} />
          {errors.expiryDate && <small className="payment-form__error-text">{errors.expiryDate}</small>}
        </div>
        <div className="payment-form__group">
          <label htmlFor="cvc">CVC</label>
          <input type="text" id="cvc" name="cvc" value={formData.cvc} placeholder="123" onChange={handleInputChange} onFocus={handleFocus} />
          {errors.cvc && <small className="payment-form__error-text">{errors.cvc}</small>}
        </div>
      </div>
      
      {paymentStatus === 'error' && (
        <div className="payment-form__payment-feedback error">There was an error with your payment. Please try again.</div>
      )}

      <button type="submit" className="payment-form__submit-btn" disabled={paymentStatus === 'processing'}>
        {paymentStatus === 'processing' ? 'Processing...' : 'Pay now'}
      </button>
    </form>
  );
};

PaymentForm.propTypes = {
  formData: PropTypes.shape({
    cardNumber: PropTypes.string.isRequired,
    cardName: PropTypes.string.isRequired,
    expiryDate: PropTypes.string.isRequired,
    cvc: PropTypes.string.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  setIsFlipped: PropTypes.func.isRequired,
};

export default PaymentForm;
