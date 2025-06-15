import React from "react";
import "./styles.scss";

const PrivacyPolicyComponent = () => {
  return (
    <section className="privacy">
      <div className="privacy__content">
        <h2 className="privacy__title">Privacy Policy</h2>

        <div className="privacy__section">
          <h3 className="privacy__subtitle">1. Introduction</h3>
          <p className="privacy__paragraph">
            At <strong>HomeDecor</strong>, your privacy is extremely important to us. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you visit our website or make a purchase from our store.
          </p>
        </div>

        <div className="privacy__section">
          <h3 className="privacy__subtitle">2. Information We Collect</h3>
          <p className="privacy__paragraph">
            We collect personal information that you voluntarily provide to us, such as your name, email address, shipping address, phone number, and payment details when you:
          </p>
          <ul className="privacy__list">
            <li className="privacy__list-item">Create an account</li>
            <li className="privacy__list-item">Place an order</li>
            <li className="privacy__list-item">Contact our customer service</li>
            <li className="privacy__list-item">Subscribe to our newsletter</li>
          </ul>
        </div>

        <div className="privacy__section">
          <h3 className="privacy__subtitle">3. How We Use Your Information</h3>
          <p className="privacy__paragraph">We use your data to:</p>
          <ul className="privacy__list">
            <li className="privacy__list-item">Process and ship your orders</li>
            <li className="privacy__list-item">Send you updates about your purchase</li>
            <li className="privacy__list-item">Respond to your inquiries</li>
            <li className="privacy__list-item">Provide promotional offers (with your consent)</li>
          </ul>
        </div>

        <div className="privacy__section">
          <h3 className="privacy__subtitle">4. Sharing Your Information</h3>
          <p className="privacy__paragraph">
            We do not sell your personal information. We may share it with trusted third-party services that help us operate our store (like payment processors and shipping partners), but only as necessary and under strict confidentiality agreements.
          </p>
        </div>

        <div className="privacy__section">
          <h3 className="privacy__subtitle">5. Cookies & Tracking</h3>
          <p className="privacy__paragraph">
            We use cookies to improve your shopping experience, remember your preferences, and analyze site traffic. You can choose to disable cookies in your browser settings, although it may affect functionality.
          </p>
        </div>

        <div className="privacy__section">
          <h3 className="privacy__subtitle">6. Your Rights</h3>
          <p className="privacy__paragraph">
            You have the right to access, update, or delete your personal data. If you wish to do so, please contact us at: <a href="mailto:support@store.com" className="privacy__link">support@store.com</a>
          </p>
        </div>

        <div className="privacy__section">
          <h3 className="privacy__subtitle">7. Policy Updates</h3>
          <p className="privacy__paragraph">
            We may update this policy from time to time. The latest version will always be available on this page. We encourage you to review it regularly.
          </p>
        </div>

        <div className="privacy__footer">
          <p className="privacy__paragraph">
            Last updated: June 13, 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyComponent;
