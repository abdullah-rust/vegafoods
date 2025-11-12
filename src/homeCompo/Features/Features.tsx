import React from "react";
import { FaTruck, FaLeaf, FaAward, FaHeadset } from "react-icons/fa";
import { motion } from "motion/react";
import type { Variants, Transition } from "motion/react";

import styles from "./Features.module.css";

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: FaTruck,
      title: "FREE SHIPPING",
      description: "ON ORDER OVER $100",
      color: "#82ae46",
    },
    {
      id: 2,
      icon: FaLeaf,
      title: "ALWAYS FRESH",
      description: "PRODUCT WILL PACKAGE",
      color: "#82ae46",
    },
    {
      id: 3,
      icon: FaAward,
      title: "SUPERIOR QUALITY",
      description: "QUALITY PRODUCTS",
      color: "#82ae46",
    },
    {
      id: 4,
      icon: FaHeadset,
      title: "SUPPORT",
      description: "24/7 SUPPORT",
      color: "#82ae46",
    },
  ];

  // Define easing properly
  const ease: Transition["ease"] = [0.25, 0.1, 0.25, 1]; // cubic-bezier

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: ease,
      },
    },
  };

  return (
    <section className={styles.features}>
      <div className="container">
        <motion.div
          className={styles.featuresGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className={styles.featureCard}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2, ease: ease },
              }}
            >
              <div className={styles.iconWrapper}>
                <feature.icon className={styles.icon} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.description}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
