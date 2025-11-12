import React from "react";
import styles from "./CouponWidget.module.css";

const CouponWidget: React.FC = () => {
  return (
    <div className={styles.widgetContainer}>
      <h4 className={styles.widgetTitle}>Coupon Code</h4>
      <p className={styles.widgetDescription}>
        Enter your coupon code if you have one
      </p>

      <label htmlFor="coupon-code" className={styles.inputLabel}>
        Coupon code
      </label>
      <input
        type="text"
        id="coupon-code"
        className={styles.couponInput}
        placeholder=""
      />

      <button className={styles.applyButton}>Apply Coupon</button>
    </div>
  );
};

export default CouponWidget;
