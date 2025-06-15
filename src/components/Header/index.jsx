// This component defines a header for the application, including a title and navigation links. It can be used to provide consistent navigation across different pages of the application.
import React, { useState, useEffect,useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchProductsAll } from "../../utils/api/products";
import logoImg from "../../assets/logos/store-logo.webp";
import menuOpen from "../../assets/icons/menu-open.svg";
import menuClose from "../../assets/icons/menu-close.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import arrowUp from "../../assets/icons/arrow-up.svg";
import cart from "../../assets/icons/cart.svg";
import "./styles.scss";

const toggleMenu = (index, setToggleMenu) => {
  setToggleMenu((prevIndex) => (prevIndex === index ? null : index));
};

const MenuList = ({ 
  isMenuOpen,
  menuOpenClass,
  openSubmenuIndex,
  setOpenSubmenuIndex,
  openSecondSubmenuIndex,
  setOpenSecondSubmenuIndex,
  closeAllMenus,
  menuList
 }) => {
  return (
    <ul className={`header__options--list ${menuOpenClass}`}>
      {menuList?.map((item, index) => {
        const isOpen = openSubmenuIndex === index;
        const subMenuOpenClass = isOpen ? "open" : "close";

        return (<li key={index}>
            <div className="header__options--item">
              <Link to={item?.path} onClick={closeAllMenus}>
                {item?.name}
              </Link>
              {item?.sections.length > 0 && isMenuOpen && (
                <button 
                  type="button"
                  aria-label={`Toggle submenu for ${item?.name}`}
                  className={`header__options--toggle`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu(index, setOpenSubmenuIndex);
                  }}
                >
                  <img 
                    className={`header__options--toggle-arrow ${subMenuOpenClass}`}
                    src={isOpen ? arrowUp : arrowDown}
                    alt="Toggle submenu"
                    height="32px"
                    width="32px"
                    loading="lazy"
                  />
                </button>
              )}
            </div>
            {isOpen && item?.sections?.length > 0 && (
              <ul className="header__options--submenu">
                {item?.sections.map((section, idx) => {
                  const isSecondOpen = openSecondSubmenuIndex === idx;
                  const secondSubMenuOpenClass = isSecondOpen ? "open" : "close";
                  
                  return (<li key={idx}>
                    <div className="header__options--item">
                      <Link to={section?.path} onClick={closeAllMenus}>
                        {section?.name}
                      </Link>
                      {section?.sections.length > 0 && isMenuOpen &&  (
                        <button 
                          type="button"
                          aria-label={`Toggle submenu for ${item?.name}`}
                          className={`header__options--toggle`}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleMenu(idx, setOpenSecondSubmenuIndex);
                          }}
                        >
                          <img 
                            className={`header__options--toggle-arrow ${secondSubMenuOpenClass}`}
                            src={isSecondOpen ? arrowUp : arrowDown}
                            alt="Toggle submenu"
                            height="32px"
                            width="32px"
                            loading="lazy"
                          />
                        </button>
                      )}
                    </div>
                    {isSecondOpen && section?.sections?.length > 0 && isMenuOpen && (
                      <ul className="header__options--second-submenu">
                        {section?.sections.map((subSection, subIdx) => {
                          return (
                            <li key={subIdx}>
                              <Link to={subSection?.path} onClick={closeAllMenus}>
                                {subSection?.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                  );
                  })}
              </ul>
            )}
          </li>
        );
        })}
    </ul>
  );
};

const Header = () => {
  const shopingCart = useSelector((state) => 
    state.shopingCart.reduce((total, item) => total + item.quantity, 0)
  );
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [openSecondSubmenuIndex, setOpenSecondSubmenuIndex] = useState(null);
  const [productsCategories, setProductsCategories] = useState([]);
  
  const categories = useMemo(() => (
    productsCategories?.map((category) => ({
      name: category?.name,
      path: `/products/${category?.slug}`,
      sections: []
    }))
  ), [productsCategories]);

  const menuList = [
    { "name": "Home", "path": "/", "sections": [] },
    { "name": "Products", "path": "/products", "sections": categories },
    { "name": "Cart", "path": "/cart", "sections": [] },
    { "name": "About Us", "path": "/about", "sections": [] },
    { "name": "Contact", "path": "/contact", "sections": [] }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenSubmenuIndex(null);
    setOpenSecondSubmenuIndex(null);
  };
  
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenSubmenuIndex(null);
    setOpenSecondSubmenuIndex(null);
  };
  
  const menuOpenClass = isMenuOpen ? "open" : "close";
  const menuIcon = isMenuOpen ? menuClose : menuOpen;
  
  useEffect(() => {
    fetchProductsAll(setProductsCategories);
  }, []);

  return (
    <header className="header">
      <button onClick={toggleMenu} className="header__menu">
        <img 
          className={`header__menu--img-${menuOpenClass}`}
          src={menuIcon}
          alt={`menu ${menuOpenClass} icon`}
          height="30px"
          width="30px"
          loading="eager"
        />
      </button>
      <div className="header__container">
        <nav className="header__links">
          <ul className="header__links--list">
            {menuList.map((item, index) => item.name !== "Carrito" && (
              <li key={index}>
                <Link 
                  to={item.path} 
                  onClick={closeAllMenus}
                  className="header__links--item"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link 
          to="/cart" 
          className="header__cart"
          onClick={closeAllMenus}
          aria-label="Go to cart page"
        >
          <div className="header__cart--count">
            <span className="header__cart--count-text">{shopingCart}</span>
          </div>
          <img 
            className="header__cart--img"
            src={cart}
            alt="Cart Logo"
            height="30px"
            width="30px"
            loading="eager"
          />
        </Link>
        <Link 
          to="/" 
          className="header__logo"
          onClick={closeAllMenus}
          aria-label="Go to home page"
        >
          <img 
            className="header__logo--img"
            src={logoImg}
            alt="Store Logo"
            height="45px"
            width="45px"
            loading="eager"
          />
        </Link>
      </div>
      <nav className={`header__options ${menuOpenClass}`}>
        <MenuList 
          isMenuOpen={isMenuOpen}
          menuOpenClass={menuOpenClass}
          openSubmenuIndex={openSubmenuIndex}
          setOpenSubmenuIndex={setOpenSubmenuIndex}
          openSecondSubmenuIndex={openSecondSubmenuIndex}
          setOpenSecondSubmenuIndex={setOpenSecondSubmenuIndex}
          closeAllMenus={closeAllMenus}
          menuList={menuList}
        /> 
      </nav>
    </header>
  );
};

MenuList.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  menuOpenClass: PropTypes.string.isRequired,
  openSubmenuIndex: PropTypes.number,
  setOpenSubmenuIndex: PropTypes.func.isRequired,
  openSecondSubmenuIndex: PropTypes.number,
  setOpenSecondSubmenuIndex: PropTypes.func.isRequired,
  closeAllMenus: PropTypes.func.isRequired,
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      sections: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
          sections: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
            })
          ),
        })
      ),
    })
  ).isRequired,
};

export default Header;