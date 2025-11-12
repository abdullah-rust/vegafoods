import React from "react";
import styles from "./BillingDetailsForm.module.css";

const BillingDetailsForm: React.FC = () => {
  return (
    <div className={styles.billingSection}>
      <h3 className={styles.sectionTitle}>Billing Details</h3>

      <form className={styles.billingForm}>
        {/* First Name & Last Name */}
        <div className={styles.formRow}>
          <input
            type="text"
            placeholder="First Name"
            className={styles.inputHalf}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className={styles.inputHalf}
            required
          />
        </div>

        {/* State / Country (Dropdown) */}
        <select className={styles.inputFull} defaultValue="France" required>
          <option value="" disabled>
            State / Country
          </option>
          <option value="France">France</option>
          <option value="Pakistan">Pakistan</option>
          <option value="USA">USA</option>
        </select>

        {/* Street Address */}
        <div className={styles.formRow}>
          <input
            type="text"
            placeholder="House number and street name"
            className={styles.inputHalf}
            required
          />
          <input
            type="text"
            placeholder="Appartment, suite, unit etc. (optional)"
            className={styles.inputHalf}
          />
        </div>

        {/* Town / City & Postcode / ZIP */}
        <div className={styles.formRow}>
          <input
            type="text"
            placeholder="Town / City"
            className={styles.inputHalf}
            required
          />
          <input
            type="text"
            placeholder="Postcode / ZIP *"
            className={styles.inputHalf}
            required
          />
        </div>

        {/* Phone & Email Address */}
        <div className={styles.formRow}>
          <input type="tel" placeholder="Phone" className={styles.inputHalf} />
          <input
            type="email"
            placeholder="Email Address"
            className={styles.inputHalf}
            required
          />
        </div>

        {/* Checkboxes */}
        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" name="create_account" /> Create an Account?
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" name="ship_to_different" /> Ship to different
            address
          </label>
        </div>
      </form>
    </div>
  );
};

export default BillingDetailsForm;
