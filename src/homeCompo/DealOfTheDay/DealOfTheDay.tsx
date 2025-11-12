import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import styles from "./DealOfTheDay.module.css";

const spinachImage =
  "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600";

const DealOfTheDay: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date (3 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.dealOfTheDay}>
      <div className="container">
        <div className={styles.dealContent}>
          {/* Left Side - Image */}
          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageContainer}>
              <img
                src={spinachImage}
                alt="Fresh Spinach"
                className={styles.productImage}
              />
              <div className={styles.discountBadge}>
                <span className={styles.discountText}>50% OFF</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className={styles.contentSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.content}>
              <h2 className={styles.smallTitle}>Best Price For You</h2>
              <h3 className={styles.mainTitle}>Deal of the day</h3>

              <p className={styles.description}>
                Far far away, behind the word mountains, far from the countries
                Vokalia
                <br />
                and Consonantia
              </p>

              {/* Product Info */}
              <div className={styles.productInfo}>
                <h4 className={styles.productName}>Spinach</h4>
                <div className={styles.priceSection}>
                  <span className={styles.oldPrice}>$10</span>
                  <span className={styles.newPrice}>now $5 only</span>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className={styles.countdown}>
                <div className={styles.countdownItem}>
                  <span className={styles.countdownNumber}>
                    {timeLeft.days.toString().padStart(2, "0")}
                  </span>
                  <span className={styles.countdownLabel}>DAYS</span>
                </div>

                <div className={styles.countdownItem}>
                  <span className={styles.countdownNumber}>
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </span>
                  <span className={styles.countdownLabel}>HOURS</span>
                </div>

                <div className={styles.countdownItem}>
                  <span className={styles.countdownNumber}>
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </span>
                  <span className={styles.countdownLabel}>MINUTES</span>
                </div>

                <div className={styles.countdownItem}>
                  <span className={styles.countdownNumber}>
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </span>
                  <span className={styles.countdownLabel}>SECONDS</span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                className={`btn btn-primary ${styles.shopButton}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
