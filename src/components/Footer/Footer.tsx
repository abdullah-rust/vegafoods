import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            {/* Company Info */}
            <motion.div
              className={styles.footerSection}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className={styles.logo}>Vegefoods</h3>
              <p className={styles.companyDescription}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
            </motion.div>

            {/* Menu Links */}
            <motion.div
              className={styles.footerSection}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className={styles.sectionTitle}>Menu</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="/shop" className={styles.footerLink}>
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/about" className={styles.footerLink}>
                    About
                  </a>
                </li>
                <li>
                  <a href="/journal" className={styles.footerLink}>
                    Journal
                  </a>
                </li>
                <li>
                  <a href="/contact" className={styles.footerLink}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Help Links */}
            <motion.div
              className={styles.footerSection}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className={styles.sectionTitle}>Help</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="/shipping" className={styles.footerLink}>
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a href="/returns" className={styles.footerLink}>
                    Returns & Exchange
                  </a>
                </li>
                <li>
                  <a href="/terms" className={styles.footerLink}>
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy" className={styles.footerLink}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className={styles.footerSection}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className={styles.sectionTitle}>Have a Questions?</h4>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <span>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </div>
                <div className={styles.contactItem}>
                  <FaPhone className={styles.contactIcon} />
                  <span>+2 392 3929 210</span>
                </div>
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <span>info@yourdomain.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            className={styles.footerBottom}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.copyright}>
              <p>
                Copyright ©2025 All rights reserved | This template is made with{" "}
                <FaHeart className={styles.heartIcon} /> by Colorlib
              </p>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className={styles.scrollTop}
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowUp className={styles.scrollIcon} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
