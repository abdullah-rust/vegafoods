import HeroBanner from "../../components/HeroBanner/HeroBanner";
import BillingDetailsForm from "../../checkoutCompo/BillingDetailsForm/BillingDetailsForm";
import OrderSummaryWidget from "../../checkoutCompo/OrderSummaryWidget/OrderSummaryWidget";
import styles from "./Checkout.module.css";
import Newsletter from "../../homeCompo/Newsletter/Newsletter";

export default function Checkout() {
  return (
    <>
      <HeroBanner h3Text="Home / Checkout" h1Text="CHECKOUT" height="400px" />

      <main>
        <br />
        <div className={styles.checkoutContainer}>
          <BillingDetailsForm />
          <OrderSummaryWidget />
        </div>
        <br />
        <Newsletter />
      </main>
    </>
  );
}
