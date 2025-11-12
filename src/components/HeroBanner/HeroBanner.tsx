import React from "react";
import { motion } from "motion/react";
import styles from "./HeroBanner.module.css";

interface HeroBannerProps {
  backgroundImage?: string;
  h3Text?: string;
  h1Text?: string;
  height?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  backgroundImage = "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200",
  h3Text = "Welcome to Our Store",
  h1Text = "Fresh Organic Products",
  height = "400px",
}) => {
  return (
    <section
      className={styles.heroBanner}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: height,
      }}
    >
      <div className={styles.overlay}></div>

      <div className="container">
        <div className={styles.content}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.subtitle}>{h3Text}</h3>
            <h1 className={styles.title}>{h1Text}</h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
