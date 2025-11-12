import React, { useState } from "react";
import { FaTimes, FaShoppingCart, FaBell, FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import styles from "./WishlistTable.module.css";
import image from "../../assets/Catagories/category-4.jpg.webp";
import image2 from "../../assets/Catagories/category-2.jpg.webp";

interface WishlistItem {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  stockStatus: "In Stock" | "Out of Stock";
  imageUrl: string;
  isOnSale?: boolean;
}

// Temporary Dummy Data
const DUMMY_WISHLIST_ITEMS: WishlistItem[] = [
  {
    id: 1,
    name: "Organic Bell Pepper",
    description: "Fresh organic bell pepper from local farms",
    price: 4.9,
    originalPrice: 6.9,
    stockStatus: "In Stock",
    imageUrl: image,
    isOnSale: true,
  },
  {
    id: 2,
    name: "Fresh Strawberries",
    description: "Sweet and juicy organic strawberries",
    price: 15.7,
    stockStatus: "Out of Stock",
    imageUrl: image2,
  },
  {
    id: 3,
    name: "Green Beans",
    description: "Crisp and tender green beans",
    price: 8.5,
    stockStatus: "In Stock",
    imageUrl: image,
  },
  {
    id: 4,
    name: "Purple Cabbage",
    description: "Nutrient-rich purple cabbage",
    price: 12.3,
    originalPrice: 15.0,
    stockStatus: "In Stock",
    imageUrl: image2,
    isOnSale: true,
  },
  {
    id: 5,
    name: "Carrot Bundle",
    description: "Fresh organic carrot bundle",
    price: 7.8,
    stockStatus: "In Stock",
    imageUrl: image,
  },
];

const WishlistTable: React.FC = () => {
  const [wishlistItems, setWishlistItems] =
    useState<WishlistItem[]>(DUMMY_WISHLIST_ITEMS);

  const removeFromWishlist = (id: number) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addToCart = (item: WishlistItem) => {
    if (item.stockStatus === "In Stock") {
      // Add to cart logic here
      console.log("Added to cart:", item.name);
      // You can show a toast notification here
    }
  };

  return (
    <div className={styles.wishlistContainer}>
      {/* Wishlist Header */}
      <div className={styles.wishlistHeader}>
        <div className={styles.headerContent}>
          <FaHeart className={styles.heartIcon} />
          <h1 className={styles.wishlistTitle}>My Wishlist</h1>
          <span className={styles.itemCount}>
            ({wishlistItems.length} items)
          </span>
        </div>
      </div>

      {/* Table Header Section - Desktop Only */}
      <div className={styles.tableHeader}>
        <div className={styles.headerColumn}>Product</div>
        <div className={styles.headerColumn}>Price</div>
        <div className={styles.headerColumn}>Status</div>
        <div className={styles.headerColumn}>Action</div>
      </div>

      {/* Wishlist Items List */}
      <AnimatePresence>
        {wishlistItems.map((item) => (
          <motion.div
            key={item.id}
            className={styles.wishlistItem}
            initial={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Product Details */}
            <div className={styles.productDetails}>
              <button
                className={styles.removeButton}
                onClick={() => removeFromWishlist(item.id)}
                title="Remove from wishlist"
              >
                <FaTimes />
              </button>

              <div className={styles.imageContainer}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className={styles.productImage}
                />
                {item.isOnSale && (
                  <span className={styles.saleBadge}>Sale</span>
                )}
              </div>

              <div className={styles.textDetails}>
                <h4 className={styles.productName}>{item.name}</h4>
                <p className={styles.productDescription}>{item.description}</p>

                {/* Mobile Price - Hidden on desktop */}
                <div className={styles.mobilePrice}>
                  <span className={styles.currentPrice}>
                    ${item.price.toFixed(2)}
                  </span>
                  {item.originalPrice && (
                    <span className={styles.originalPrice}>
                      ${item.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Mobile Stock Status - Hidden on desktop */}
                <div className={styles.mobileStock}>
                  <span
                    className={`${styles.stockStatus} ${
                      item.stockStatus === "In Stock"
                        ? styles.inStock
                        : styles.outOfStock
                    }`}
                  >
                    {item.stockStatus}
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Price */}
            <div className={styles.itemPrice}>
              <div className={styles.priceContainer}>
                <span className={styles.currentPrice}>
                  ${item.price.toFixed(2)}
                </span>
                {item.originalPrice && (
                  <span className={styles.originalPrice}>
                    ${item.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Desktop Stock Status */}
            <div className={styles.itemStock}>
              <span
                className={`${styles.stockStatus} ${
                  item.stockStatus === "In Stock"
                    ? styles.inStock
                    : styles.outOfStock
                }`}
              >
                {item.stockStatus}
              </span>
            </div>

            {/* Action Buttons */}
            <div className={styles.itemAction}>
              <button
                className={`${styles.actionButton} ${
                  item.stockStatus === "In Stock"
                    ? styles.addToCart
                    : styles.notifyMe
                }`}
                onClick={() => addToCart(item)}
                disabled={item.stockStatus === "Out of Stock"}
              >
                {item.stockStatus === "In Stock" ? (
                  <>
                    <FaShoppingCart className={styles.buttonIcon} />
                    Add to Cart
                  </>
                ) : (
                  <>
                    <FaBell className={styles.buttonIcon} />
                    Notify Me
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Empty State */}
      {wishlistItems.length === 0 && (
        <motion.div
          className={styles.emptyState}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaHeart className={styles.emptyHeartIcon} />
          <h3>Your wishlist is empty</h3>
          <p>Start adding items you love to your wishlist</p>
          <button className={styles.continueShoppingBtn}>
            Continue Shopping
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default WishlistTable;
