import React from "react";
import { Link } from "react-router-dom";
import fb from "../../assets/icons/fb.svg";
import twtt from "../../assets/icons/twtt.svg";
import ig from "../../assets/icons/ig.svg";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__rss">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="RSS Facebook" height="30px" width="30px" loading="lazy"/>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={ig} alt="RSS Instagram" height="30px" width="30px" loading="lazy"/>
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <img src={twtt} alt="RSS Twitter" height="30px" width="30px" loading="lazy"/>
          </a>
        </div>
        <div className="footer__links">
          <div className="footer__links--column">
            <h3 className="footer__links--title">Address</h3>
            <p to="/about" className="footer__links--link">+123 654 987</p>
            <p to="/privacy" className="footer__links--link">877  The Bronx, NY</p>
            <p to="/privacy" className="footer__links--link">14568, USA</p>
          </div>
          <div className="footer__links--column">
            <h3 className="footer__links--title">Legal Stuff</h3>
            <Link to="/about" className="footer__links--link">About Us</Link>
            <Link to="/privacy" className="footer__links--link">Privacy & Policy</Link>
          </div>
          <div className="footer__links--column">
            <h3 className="footer__links--title">Shop</h3>
            <Link to="/products" className="footer__links--link">All Products</Link>
          </div>
        </div>
        <p className="footer__copyright">Copyright ©2025. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
