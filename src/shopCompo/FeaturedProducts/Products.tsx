import React, { useState } from "react";
import { FaStar, FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import styles from "./Products.module.css";

const productImages = {
  bellPepper:
    "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400&auto=format&fit=crop",
  strawberry:
    "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400&auto=format&fit=crop",
  greenBeans:
    "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400&auto=format&fit=crop",
  purpleCabbage:
    "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400&auto=format&fit=crop",
  tomato:
    "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&auto=format&fit=crop",
  broccoli:
    "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&auto=format&fit=crop",
  carrots:
    "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&auto=format&fit=crop",
  fruitJuice:
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&auto=format&fit=crop",
};

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
}

const Products: React.FC = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "BELL PEPPER",
      price: 120,
      originalPrice: 150,
      image: productImages.bellPepper,
      category: "Vegetables",
      rating: 4.5,
      reviews: 24,
      isSale: true,
    },
    {
      id: 2,
      name: "STRAWBERRY",
      price: 120,
      image: productImages.strawberry,
      category: "Fruits",
      rating: 4.8,
      reviews: 36,
      isNew: true,
    },
    {
      id: 3,
      name: "GREEN BEANS",
      price: 120,
      originalPrice: 140,
      image: productImages.greenBeans,
      category: "Vegetables",
      rating: 4.3,
      reviews: 18,
      isSale: true,
    },
    {
      id: 4,
      name: "PURPLE CABBAGE",
      price: 120,
      image: productImages.purpleCabbage,
      category: "Vegetables",
      rating: 4.6,
      reviews: 29,
    },
    {
      id: 5,
      name: "TOMATO",
      price: 120,
      originalPrice: 135,
      image: productImages.tomato,
      category: "Vegetables",
      rating: 4.4,
      reviews: 31,
      isSale: true,
    },
    {
      id: 6,
      name: "BROCCOLI",
      price: 120,
      image: productImages.broccoli,
      category: "Vegetables",
      rating: 4.7,
      reviews: 42,
      isNew: true,
    },
    {
      id: 7,
      name: "CARROTS",
      price: 120,
      image: productImages.carrots,
      category: "Vegetables",
      rating: 4.5,
      reviews: 27,
    },
    {
      id: 8,
      name: "FRUIT JUICE",
      price: 120,
      originalPrice: 145,
      image: productImages.fruitJuice,
      category: "Juices",
      rating: 4.9,
      reviews: 58,
      isSale: true,
    },
  ];

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className={styles.featuredProducts}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <p className={styles.sectionSubtitle}>Fresh Organic Products</p>
          <p className={styles.sectionDescription}>
            Discover our wide range of fresh, organic vegetables and fruits
            delivered directly from local farms to your doorstep.
          </p>
        </div>

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
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              {/* Product Image */}
              <div className={styles.productImage}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.image}
                />

                {/* Badges */}
                <div className={styles.badges}>
                  {product.isNew && (
                    <span className={`${styles.badge} ${styles.newBadge}`}>
                      New
                    </span>
                  )}
                  {product.isSale && (
                    <span className={`${styles.badge} ${styles.saleBadge}`}>
                      Sale
                    </span>
                  )}
                  <span className={styles.categoryBadge}>
                    {product.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className={styles.imageOverlay}>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionBtn} title="Add to Cart">
                      <FaShoppingCart />
                    </button>
                    <button
                      className={`${styles.actionBtn} ${
                        wishlist.includes(product.id) ? styles.inWishlist : ""
                      }`}
                      onClick={() => toggleWishlist(product.id)}
                      title={
                        wishlist.includes(product.id)
                          ? "Remove from Wishlist"
                          : "Add to Wishlist"
                      }
                    >
                      <FaHeart />
                    </button>
                    <button className={styles.actionBtn} title="Quick View">
                      <FaEye />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>

                {/* Rating */}
                <div className={styles.ratingContainer}>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`${styles.star} ${
                          index < Math.floor(product.rating)
                            ? styles.filled
                            : ""
                        } ${
                          index === Math.floor(product.rating) &&
                          product.rating % 1 !== 0
                            ? styles.halfFilled
                            : ""
                        }`}
                      />
                    ))}
                    <span className={styles.ratingValue}>{product.rating}</span>
                  </div>
                  <span className={styles.reviews}>
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className={styles.priceContainer}>
                  <span className={styles.currentPrice}>
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className={styles.originalPrice}>
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className={styles.addToCartBtn}>
                  <FaShoppingCart className={styles.cartIcon} />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
