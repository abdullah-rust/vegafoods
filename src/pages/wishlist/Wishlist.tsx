import HeroBanner from "../../components/HeroBanner/HeroBanner";
import WishlistTable from "../../wishlistCompo/WishlistTable/WishlistTable";
import Newsletter from "../../homeCompo/Newsletter/Newsletter";

export default function Wishlist() {
  return (
    <>
      <main>
        <HeroBanner h3Text="Home Whishlist" h1Text="Wish List" height="300px" />
        <WishlistTable />
        <Newsletter />
      </main>
    </>
  );
}
