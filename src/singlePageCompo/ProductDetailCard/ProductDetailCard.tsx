import React, { useState } from "react";
import styles from "./ProductDetailCard.module.css";

interface ProductDetailProps {
  name: string;
  price: number;
  description: string;
  rating: number; // e.g., 5.0
  ratingCount: number; // e.g., 100
  soldCount: number; // e.g., 500
  availableKg: number; // e.g., 600
  imageUrl: string;
  hasVariations?: boolean;
}

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <span className={styles.ratingStars}>
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} style={{ color: "#79a34f" }}>
          ★
        </span>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} style={{ color: "#ccc" }}>
          ★
        </span>
      ))}
    </span>
  );
};

const ProductDetailCard: React.FC<ProductDetailProps> = ({
  name,
  price,
  description,
  rating,
  ratingCount,
  soldCount,
  availableKg,
  imageUrl,
  hasVariations = true,
}) => {
  // State for quantity
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className={styles.productSection}>
      <div className={styles.container}>
        {/* 1. Left Column: Image */}
        <div className={styles.imageColumn}>
          <img src={imageUrl} alt={name} className={styles.productImage} />
        </div>

        {/* 2. Right Column: Details and Controls */}
        <div className={styles.detailsColumn}>
          <h1 className={styles.productName}>{name}</h1>

          {/* Rating and Counts */}
          <div className={styles.metaInfo}>
            <RatingStars rating={rating} />
            <span className={styles.ratingText}>{rating.toFixed(1)}</span>
            <span className={styles.metaDivider}>|</span>
            <span className={styles.metaCount}>{ratingCount} Rating</span>
            <span className={styles.metaDivider}>|</span>
            <span className={styles.metaCount}>{soldCount} Sold</span>
          </div>

          {/* Price */}
          <p className={styles.price}>${price.toFixed(2)}</p>

          {/* Description */}
          <p className={styles.description}>{description}</p>

          {/* Variations (Size/Dropdown) */}
          {hasVariations && (
            <div className={styles.variations}>
              <select className={styles.sizeDropdown}>
                <option>SMALL</option>
                <option>MEDIUM</option>
                <option>LARGE</option>
              </select>
            </div>
          )}

          {/* Quantity Selector and Add to Cart */}
          <div className={styles.controls}>
            <div className={styles.quantityControl}>
              <button
                onClick={() => handleQuantityChange(-1)}
                className={styles.qtyButton}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                readOnly
                className={styles.qtyInput}
              />
              <button
                onClick={() => handleQuantityChange(1)}
                className={styles.qtyButton}
              >
                +
              </button>
            </div>
          </div>

          {/* Availability */}
          <p className={styles.availability}>{availableKg} kg available</p>

          {/* Add to Cart Button */}
          <button className={styles.addToCartButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
