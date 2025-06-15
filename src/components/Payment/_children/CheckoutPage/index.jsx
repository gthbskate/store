import React, { useState } from 'react';
import CreditCardDisplay from '../CreditCardDisplay';
import PaymentForm from '../PaymentForm';
import './styles.scss';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvc: '',
  });

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="checkout">
      <div className="checkout__card">
        <CreditCardDisplay
          formData={formData}
          isFlipped={isFlipped}
        />
        <PaymentForm
          formData={formData}
          setFormData={setFormData}
          setIsFlipped={setIsFlipped}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
