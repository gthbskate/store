import React from "react";
import "./styles.scss";

const ContactComponent = () => {
  return (
    <section className="contact">
      <div className="contact__content">
        <h2 className="contact__title">Contact Us</h2>
        <p className="contact__description">
          We’re here to help! Whether you have a question about your order, our products, or just want to say hello — we’d love to hear from you. Please fill out the form below and our team will get back to you as soon as possible.
        </p>

        <form className="contact__form">
          <div className="contact__form-group">
            <label htmlFor="name" className="contact__label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="contact__input"
              placeholder="Your full name"
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="email" className="contact__label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="contact__input"
              placeholder="you@example.com"
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="message" className="contact__label">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="contact__textarea"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit" className="contact__button">Send Message</button>
        </form>

        <div className="contact__info">
          <p className="contact__info-item"><strong>Email:</strong> support@homedecor.com</p>
          <p className="contact__info-item"><strong>Phone:</strong> +1 (800) 123-4567</p>
          <p className="contact__info-item"><strong>Business Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM (EST)</p>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;

