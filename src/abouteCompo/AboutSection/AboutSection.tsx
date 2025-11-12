import React from "react";
import { motion } from "motion/react";
import styles from "./AboutSection.module.css";

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutContent}>
          {/* Left Side - Text Content */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.title}>
              Welcome to <span className={styles.highlight}>Vegefoods</span> an
              <br />
              eCommerce website
            </h2>

            <div className={styles.description}>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>

              <p>
                But nothing the copy said could convince her and so it didn't
                take long until a few insidious Copy Writers ambushed her, made
                her drunk with Longe and Parole and dragged her into their
                agency, where they abused her for their.
              </p>
            </div>

            <motion.button
              className={`btn btn-primary ${styles.shopButton}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop now
            </motion.button>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className={styles.imageContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600"
                alt="Fresh Vegetables"
                className={styles.aboutImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
