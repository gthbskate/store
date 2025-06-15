// This component defines a layout for the application, including a header, main content area, and footer. It can be used to wrap other components to maintain a consistent structure across different pages of the application.
import React from "react";
import PropTypes from "prop-types";
import ScrollToTop from "../../utils/utilities/scrollToTop";
import Header from "../Header";
import Footer from "../Footer";
import "./styles.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <ScrollToTop />
      <Header />
      <main className="layout__main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
