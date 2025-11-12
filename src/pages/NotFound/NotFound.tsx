import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingBag, FaSearch, FaFrown } from "react-icons/fa";
import { motion } from "motion/react";
import styles from "./NotFound.module.css";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        {/* Animated 404 Text */}
        <motion.div
          className={styles.errorCode}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          404
        </motion.div>

        {/* Animated Icon */}
        <motion.div
          className={styles.errorIcon}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <FaFrown />
        </motion.div>

        {/* Error Message */}
        <motion.h1
          className={styles.errorTitle}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Oops! Page Not Found
        </motion.h1>

        <motion.p
          className={styles.errorDescription}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className={styles.actionButtons}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Link to="/" className={styles.primaryButton}>
            <FaHome className={styles.buttonIcon} />
            Go Home
          </Link>

          <Link to="/shop" className={styles.secondaryButton}>
            <FaShoppingBag className={styles.buttonIcon} />
            Continue Shopping
          </Link>
        </motion.div>

        {/* Search Section */}
        <motion.div
          className={styles.searchSection}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <p className={styles.searchText}>
            Or try searching for what you need:
          </p>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search products..."
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <FaSearch />
            </button>
          </div>
        </motion.div>

        {/* Fun Animation - Floating Vegetables */}
        <div className={styles.floatingElements}>
          <motion.div
            className={styles.floatingElement}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🍅
          </motion.div>
          <motion.div
            className={styles.floatingElement}
            animate={{
              y: [0, -15, 0],
              rotate: [0, -15, 15, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            🥦
          </motion.div>
          <motion.div
            className={styles.floatingElement}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            🥕
          </motion.div>
          <motion.div
            className={styles.floatingElement}
            animate={{
              y: [0, -18, 0],
              rotate: [0, -20, 20, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            🍓
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
