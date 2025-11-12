import React from "react";
import styles from "./CartTable.module.css";
import image from "../../assets/Catagories/category-3.jpg.webp";
import { FaTimes } from "react-icons/fa";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

// Temporary Dummy Data
const DUMMY_CART_ITEMS: CartItem[] = [
  {
    id: 1,
    name: "Bell Pepper",
    description: "Fresh organic bell pepper from local farms",
    price: 4.9,
    quantity: 1,
    imageUrl: image,
  },
  {
    id: 2,
    name: "Red Cabbage",
    description: "Fresh red cabbage packed with nutrients",
    price: 15.7,
    quantity: 1,
    imageUrl: image,
  },
];

const CartTable: React.FC = () => {
  return (
    <div className={styles.cartContainer}>
      {/* Table Header Section */}
      <div className={styles.tableHeader}>
        <div className={styles.headerColumn}>Product</div>
        <div className={styles.headerColumn}>Price</div>
        <div className={styles.headerColumn}>Quantity</div>
        <div className={styles.headerColumn}>Total</div>
        <div className={styles.headerColumn}>Action</div>
      </div>

      {/* Cart Items List */}
      {DUMMY_CART_ITEMS.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          {/* Product Column */}
          <div className={styles.productDetails}>
            <div className={styles.imageContainer}>
              <img
                src={item.imageUrl}
                alt={item.name}
                className={styles.productImage}
              />
            </div>
            <div className={styles.textDetails}>
              <h4 className={styles.productName}>{item.name}</h4>
              <p className={styles.productDescription}>{item.description}</p>
            </div>
          </div>

          {/* Price Column */}
          <div className={styles.itemPrice}>
            <span className={styles.priceLabel}>Price:</span>
            <span className={styles.priceValue}>${item.price.toFixed(2)}</span>
          </div>

          {/* Quantity Column */}
          <div className={styles.itemQuantity}>
            <span className={styles.quantityLabel}>Qty:</span>
            <div className={styles.quantityControls}>
              <button className={styles.quantityBtn}>-</button>
              <input
                type="number"
                min="1"
                defaultValue={item.quantity}
                className={styles.quantityInput}
              />
              <button className={styles.quantityBtn}>+</button>
            </div>
          </div>

          {/* Total Column */}
          <div className={styles.itemTotal}>
            <span className={styles.totalLabel}>Total:</span>
            <span className={styles.totalValue}>
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>

          {/* Action Column */}
          <div className={styles.itemAction}>
            <button className={styles.removeButton}>
              <FaTimes className={styles.removeIcon} />
            </button>
          </div>
        </div>
      ))}

      {/* Cart Summary */}
      <div className={styles.cartSummary}>
        <div className={styles.summaryRow}>
          <span>Subtotal:</span>
          <span>$20.60</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Shipping:</span>
          <span>$5.00</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Discount:</span>
          <span className={styles.discount}>-$2.00</span>
        </div>
        <div className={styles.summaryTotal}>
          <span>Total:</span>
          <span>$23.60</span>
        </div>
        <button className={styles.checkoutBtn}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartTable;
