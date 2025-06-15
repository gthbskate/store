import React from "react";
import LazyImage from "../LazyImage";
import transaction from "../../assets/icons/transaction.svg";
import packages from "../../assets/icons/package.svg";
import support from "../../assets/icons/support.svg";
import "./styles.scss";

const Benefits = () => {  
  return (
    <div className="benefits">
      <div className="benefits__content">
        <h2 className="benefits__title">Benefits for your experiency</h2>
        <div className="benefits__list">
          <div className="benefits__item">
            <LazyImage 
              src={transaction}
              alt="transaction"
              lazy={true}
            />
            <h3 className="benefits__item--title">Payment Method</h3>
            <p className="benefits__item--description">We offer flexible payment options, to make easier.</p>
          </div>
          <div className="benefits__item">
            <LazyImage 
              src={packages}
              alt="package"
              lazy={true}
            />
            <h3 className="benefits__item--title">Return policy</h3>
            <p className="benefits__item--description">You can return a product within 30 days.</p>
          </div>
          <div className="benefits__item">
            <LazyImage 
              src={support}
              alt="support"
              lazy={true}
            />
            <h3 className="benefits__item--title">Customer Support</h3>
            <p className="benefits__item--description">Our customer support is 24/7.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
