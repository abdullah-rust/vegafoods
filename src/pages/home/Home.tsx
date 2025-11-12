import HeroSwiper from "../../homeCompo/HeroSwiper/HeroSwiper";
import Features from "../../homeCompo/Features/Features";
import Categories from "../../homeCompo/Categories/Categories";
import FeaturedProducts from "../../homeCompo/FeaturedProducts/FeaturedProducts";
import DealOfTheDay from "../../homeCompo/DealOfTheDay/DealOfTheDay";
import TestimonialSlider from "../../homeCompo/Testimonials/Testimonials";
import Clients from "../../homeCompo/Clients/Clients";
import Newsletter from "../../homeCompo/Newsletter/Newsletter";
export default function Home() {
  return (
    <>
      <main>
        <HeroSwiper />
        <Features />
        <Categories />
        <FeaturedProducts />
        <DealOfTheDay />
        <TestimonialSlider />
        <Clients />
        <Newsletter />
      </main>
    </>
  );
}
