import React from "react";
import { motion } from "motion/react";
import styles from "./Categories.module.css";

import fruitsImg from "../../assets/Catagories/category-2.jpg.webp";
import vegetablesImg from "../../assets/Catagories/category-1.jpg.webp";
import juicesImg from "../../assets/Catagories/category-3.jpg.webp";
import driedImg from "../../assets/Catagories/category-4.jpg.webp";

const Categories: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: "Fruits",
      image: fruitsImg,
      link: "/fruits",
    },
    {
      id: 2,
      name: "Vegetables",
      image: vegetablesImg,
      link: "/vegetables",
    },
    {
      id: 3,
      name: "Juices",
      image: juicesImg,
      link: "/juices",
    },
    {
      id: 4,
      name: "Dried",
      image: driedImg,
      link: "/dried",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]; // cubic-bezier

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: ease,
      },
    },
  };
  return (
    <section className={styles.categories}>
      <div className="container">
        <div className={styles.categoriesLayout}>
          {/* Left Side - Featured Category */}
          <motion.div
            className={styles.featuredCategory}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className={styles.featuredImage}
              style={{ backgroundImage: `url(${vegetablesImg})` }}
            >
              <div className={styles.featuredOverlay}></div>
              <div className={styles.featuredContent}>
                <h2 className={styles.featuredTitle}>
                  Protect the health of every home
                </h2>
                <p className={styles.featuredSubtitle}>
                  Fresh organic vegetables delivered to your doorstep
                </p>
                <motion.button
                  className={`btn btn-primary ${styles.shopButton}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Shop now
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Category Grid */}
          <motion.div
            className={styles.categoryGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                className={styles.categoryCard}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
              >
                <div
                  className={styles.categoryImage}
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className={styles.categoryOverlay}></div>
                  <div className={styles.categoryContent}>
                    <h3 className={styles.categoryName}>{category.name}</h3>
                    <motion.a
                      href={category.link}
                      className={styles.categoryLink}
                      whileHover={{ x: 5 }}
                    >
                      View Products →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
