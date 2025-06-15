import React from "react";
import "./styles.scss";

const AboutComponent = () => {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">About Us</h2>
        <div className="about__text">
          <p className="about__paragraph">
            At <strong>HomeDecor</strong>, we believe your home should reflect your personality and lifestyle.
            Since our launch in 2020, we’ve been committed to delivering high-quality furniture, stylish home accessories, and innovative solutions that help you create spaces you truly love.
          </p>
          <p className="about__paragraph">
            Our team carefully curates every product — from cozy sofas and elegant lighting to smart storage — ensuring a perfect blend of form and function.
          </p>
          <p className="about__paragraph">
            We pride ourselves on offering not just products, but experiences. Our user-friendly website, secure checkout, and fast shipping allow you to shop with confidence.
          </p>
          <p className="about__paragraph">
            Sustainability matters to us. We partner with suppliers who share our values and aim to reduce environmental impact through responsible sourcing and packaging.
          </p>
          <p className="about__paragraph">
            Whether you're furnishing one room or an entire home, HomeDecor is here to support and inspire you.
            <br /><br />
            Thank you for trusting us with your home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;

