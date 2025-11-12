import React from "react";
import styles from "./ShippingEstimateWidget.module.css";

const ShippingEstimateWidget: React.FC = () => {
  return (
    <div className={styles.widgetContainer}>
      <h4 className={styles.widgetTitle}>Estimate shipping and tax</h4>
      <p className={styles.widgetDescription}>
        Enter your destination to get a shipping estimate
      </p>

      {/* Country Input */}
      <label htmlFor="country" className={styles.inputLabel}>
        Country
      </label>
      <input
        type="text"
        id="country"
        className={styles.shippingInput}
        placeholder="Country"
      />

      {/* State/Province Input */}
      <label htmlFor="state" className={styles.inputLabel}>
        State/Province
      </label>
      <input
        type="text"
        id="state"
        className={styles.shippingInput}
        placeholder="State/Province"
      />

      {/* Zip/Postal Code Input */}
      <label htmlFor="zip" className={styles.inputLabel}>
        Zip/Postal Code
      </label>
      <input
        type="text"
        id="zip"
        className={styles.shippingInput}
        placeholder="Zip/Postal Code"
      />

      <button className={styles.estimateButton}>Estimate</button>
    </div>
  );
};

export default ShippingEstimateWidget;
