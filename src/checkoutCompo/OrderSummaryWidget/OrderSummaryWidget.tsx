import React from "react";
import styles from "./OrderSummaryWidget.module.css";

const DUMMY_TOTALS = {
  subtotal: 20.6,
  delivery: 0.0,
  discount: 3.0,
  total: 17.6,
};

const OrderSummaryWidget: React.FC = () => {
  const { subtotal, delivery, discount, total } = DUMMY_TOTALS;

  return (
    <div className={styles.orderSummary}>
      {/* 1. Cart Total */}
      <h3 className={styles.sectionTitle}>Cart Total</h3>
      <div className={styles.cartTotalBox}>
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
      </div>

      {/* 2. Payment Method */}
      <div className={styles.paymentMethod}>
        <h3 className={styles.sectionTitle}>Payment Method</h3>

        <label className={styles.radioLabel}>
          <input type="radio" name="payment_method" defaultChecked /> Direct
          Bank Transfer
        </label>
        <label className={styles.radioLabel}>
          <input type="radio" name="payment_method" /> Check Payment
        </label>
        <label className={styles.radioLabel}>
          <input type="radio" name="payment_method" /> Paypal
        </label>

        {/* Terms and Conditions Checkbox */}
        <label className={styles.termsLabel}>
          <input type="checkbox" name="terms_and_conditions" required />I have
          read and accept the terms and conditions
        </label>

        <button type="submit" className={styles.placeOrderButton}>
          Place an order
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryWidget;
