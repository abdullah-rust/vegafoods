import HeroBanner from "../../components/HeroBanner/HeroBanner";
import CartTable from "../../cartCompo/CartTable/CartTable";
import CouponWidget from "../../cartCompo/CouponWidget/CouponWidget";
import ShippingEstimateWidget from "../../cartCompo/ShippingEstimateWidget/ShippingEstimateWidget";
import CartTotalsWidget from "../../cartCompo/CartTotalsWidget/CartTotalsWidget";

// style
import styles from "./CartPage.module.css";

export default function Cart() {
  return (
    <>
      <main>
        <HeroBanner h3Text="Home Cart" h1Text="Cart" height="300px" />
        <CartTable />
        <div className={styles.infoWidgetsContainer}>
          <CouponWidget />
          <ShippingEstimateWidget />
          <CartTotalsWidget />
        </div>
      </main>
    </>
  );
}
