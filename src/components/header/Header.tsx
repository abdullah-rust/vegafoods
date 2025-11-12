import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaShoppingCart,
  FaCaretDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileShop = () => {
    setIsMobileShopOpen(!isMobileShopOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsShopDropdownOpen(false);
    setIsMobileShopOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.topBarLeft}>
              <span className={styles.topBarItem}>
                <FaPhone className={styles.icon} />
                +1235 2355 98
              </span>
              <span className={styles.topBarItem}>
                <FaEnvelope className={styles.icon} />
                YOUREMAIL@EMAIL.COM
              </span>
            </div>
            <div className={styles.topBarRight}>
              <span className={styles.topBarItem}>
                3-5 BUSINESS DAYS DELIVERY & FREE RETURNS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.navContent}>
            {/* Logo */}
            <motion.div
              className={styles.logo}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className={styles.logoLink}>
                VEGEFOODS
              </Link>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className={styles.navLinks}>
              <Link to="/" className={styles.navLink}>
                HOME
              </Link>

              {/* Shop Dropdown */}
              <div
                className={styles.dropdown}
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
              >
                <button className={styles.navLink}>
                  SHOP <FaCaretDown className={styles.dropdownIcon} />
                </button>
                <AnimatePresence>
                  {isShopDropdownOpen && (
                    <motion.div
                      className={styles.dropdownContent}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button
                        onClick={() => handleNavigation("/shop")}
                        className={styles.dropdownItem}
                      >
                        Shop
                      </button>
                      <button
                        onClick={() => handleNavigation("/wishlist")}
                        className={styles.dropdownItem}
                      >
                        Wishlist
                      </button>
                      <button
                        onClick={() => handleNavigation("/single-product")}
                        className={styles.dropdownItem}
                      >
                        Single Product
                      </button>
                      <button
                        onClick={() => handleNavigation("/cart")}
                        className={styles.dropdownItem}
                      >
                        Cart
                      </button>
                      <button
                        onClick={() => handleNavigation("/check-out")}
                        className={styles.dropdownItem}
                      >
                        Checkout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/about" className={styles.navLink}>
                ABOUT
              </Link>
              <Link to="/blog" className={styles.navLink}>
                BLOG
              </Link>
              <Link to="/contact" className={styles.navLink}>
                CONTACT
              </Link>
            </div>

            {/* Cart Icon */}
            <div className={styles.navIcons}>
              <button
                className={styles.iconButton}
                onClick={() => handleNavigation("/cart")}
              >
                <FaShoppingCart className={styles.navIcon} />
                <span className={styles.cartBadge}>0</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={styles.mobileMenuBtn}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={styles.mobileNav}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.mobileNavLinks}>
                <button
                  onClick={() => handleNavigation("/")}
                  className={styles.mobileNavLink}
                >
                  HOME
                </button>

                {/* Mobile Shop Dropdown */}
                <div className={styles.mobileDropdown}>
                  <button
                    className={styles.mobileDropdownHeader}
                    onClick={toggleMobileShop}
                  >
                    SHOP{" "}
                    <FaCaretDown
                      className={`${styles.mobileDropdownIcon} ${
                        isMobileShopOpen ? styles.rotated : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isMobileShopOpen && (
                      <motion.div
                        className={styles.mobileDropdownContent}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <button
                          onClick={() => handleNavigation("/shop")}
                          className={styles.mobileDropdownItem}
                        >
                          Shop
                        </button>
                        <button
                          onClick={() => handleNavigation("/wishlist")}
                          className={styles.mobileDropdownItem}
                        >
                          Wishlist
                        </button>
                        <button
                          onClick={() => handleNavigation("/single-product")}
                          className={styles.mobileDropdownItem}
                        >
                          Single Product
                        </button>
                        <button
                          onClick={() => handleNavigation("/check-out")}
                          className={styles.mobileDropdownItem}
                        >
                          Checkout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => handleNavigation("/about")}
                  className={styles.mobileNavLink}
                >
                  ABOUT
                </button>
                <button
                  onClick={() => handleNavigation("/blog")}
                  className={styles.mobileNavLink}
                >
                  BLOG
                </button>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className={styles.mobileNavLink}
                >
                  CONTACT
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Header;
