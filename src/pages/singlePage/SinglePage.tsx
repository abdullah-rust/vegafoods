import HeroBanner from "../../components/HeroBanner/HeroBanner";
import ProductDetailCard from "../../singlePageCompo/ProductDetailCard/ProductDetailCard";
import image from "../../assets/Catagories/category-1.jpg.webp";
import SectionHeading from "../../singlePageCompo/SectionHeading/SectionHeading";
import Products from "../../shopCompo/FeaturedProducts/Products";
import Newsletter from "../../homeCompo/Newsletter/Newsletter";

export default function SinglePage() {
  return (
    <>
      <main>
        <HeroBanner
          h3Text="Home Product Product Single"
          h1Text="Product Single"
          height="300px"
        />
        <ProductDetailCard
          name="Bell Pepper"
          price={120.0}
          description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn't take long until."
          rating={5.0}
          ratingCount={100}
          soldCount={500}
          availableKg={600}
          imageUrl={image}
          hasVariations={true}
        />
        <SectionHeading
          subTitle="Products"
          mainTitle="Related Products"
          tagline="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
        />
        <Products />
        <Newsletter />
      </main>
    </>
  );
}
