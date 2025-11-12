import React from "react";
import styles from "./CartTotalsWidget.module.css";

interface CartTotals {
  subtotal: number;
  delivery: number;
  discount: number;
  total: number;
}

const DUMMY_TOTALS: CartTotals = {
  subtotal: 20.6,
  delivery: 0.0,
  discount: 3.0,
  total: 17.6,
};

const CartTotalsWidget: React.FC = () => {
  const { subtotal, delivery, discount, total } = DUMMY_TOTALS;

  return (
    <div className={styles.widgetContainer}>
      <h4 className={styles.widgetTitle}>Cart Totals</h4>

      <div className={styles.totalRow}>
        <span className={styles.label}>Subtotal</span>
        <span className={styles.value}>${subtotal.toFixed(2)}</span>
      </div>

      <div className={styles.totalRow}>
        <span className={styles.label}>Delivery</span>
        <span className={styles.value}>${delivery.toFixed(2)}</span>
      </div>

      <div className={styles.totalRow}>
        <span className={styles.label}>Discount</span>
        <span className={styles.value}>${discount.toFixed(2)}</span>
      </div>

      <div className={`${styles.totalRow} ${styles.finalTotal}`}>
        <span className={styles.label}>TOTAL</span>
        <span className={styles.value}>${total.toFixed(2)}</span>
      </div>

      <button className={styles.checkoutButton}>Proceed to Checkout</button>
    </div>
  );
};

export default CartTotalsWidget;
