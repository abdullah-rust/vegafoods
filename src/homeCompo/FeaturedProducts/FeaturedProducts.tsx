import React from "react";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import styles from "./FeaturedProducts.module.css";

const productImages = {
  bellPepper:
    "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400",
  strawberry:
    "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400",
  greenBeans:
    "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400",
  purpleCabbage:
    "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400",
  tomato: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400",
  broccoli:
    "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400",
  carrots: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400",
  fruitJuice:
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
};

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "BELL PEPPER",
      price: 120,
      image: productImages.bellPepper,
      category: "Vegetables",
      rating: 4.5,
    },
    {
      id: 2,
      name: "STRAWBERRY",
      price: 120,
      image: productImages.strawberry,
      category: "Fruits",
      rating: 4.8,
    },
    {
      id: 3,
      name: "GREEN BEANS",
      price: 120,
      image: productImages.greenBeans,
      category: "Vegetables",
      rating: 4.3,
    },
    {
      id: 4,
      name: "PURPLE CABBAGE",
      price: 120,
      image: productImages.purpleCabbage,
      category: "Vegetables",
      rating: 4.6,
    },
    {
      id: 5,
      name: "TOMATOE",
      price: 120,
      image: productImages.tomato,
      category: "Vegetables",
      rating: 4.4,
    },
    {
      id: 6,
      name: "BROCOLI",
      price: 120,
      image: productImages.broccoli,
      category: "Vegetables",
      rating: 4.7,
    },
    {
      id: 7,
      name: "CARROTS",
      price: 120,
      image: productImages.carrots,
      category: "Vegetables",
      rating: 4.5,
    },
    {
      id: 8,
      name: "FRUIT JUICE",
      price: 120,
      image: productImages.fruitJuice,
      category: "Juices",
      rating: 4.9,
    },
  ];

  // ✅ Type-safe easing
  const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]; // cubic-bezier

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: ease } },
  };

  return (
    <section className={styles.featuredProducts}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <h3 className={styles.sectionSubtitle}>Our Products</h3>
          <p className={styles.sectionDescription}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className={styles.productsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className={styles.productCard}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3, ease } }}
            >
              {/* Product Image */}
              <div className={styles.productImage}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.image}
                />

                {/* Hover Overlay */}
                <div className={styles.imageOverlay}>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionBtn}>
                      <FaShoppingCart />
                    </button>
                    <button className={styles.actionBtn}>
                      <FaHeart />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <span className={styles.categoryBadge}>{product.category}</span>
              </div>

              {/* Product Info */}
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>

                {/* Rating */}
                <div className={styles.rating}>
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`${styles.star} ${
                        index < Math.floor(product.rating) ? styles.filled : ""
                      }`}
                    />
                  ))}
                  <span className={styles.ratingText}>({product.rating})</span>
                </div>

                {/* Price */}
                <div className={styles.price}>${product.price.toFixed(2)}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
