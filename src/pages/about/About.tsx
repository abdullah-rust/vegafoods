import HeroBanner from "../../components/HeroBanner/HeroBanner";
import AboutSection from "../../abouteCompo/AboutSection/AboutSection";
import Newsletter from "../../homeCompo/Newsletter/Newsletter";
import StatsCounter from "../../abouteCompo/StatsCounter/StatsCounter";
import TestimonialSlider from "../../homeCompo/Testimonials/Testimonials";
import Features from "../../homeCompo/Features/Features";

export default function About() {
  return (
    <>
      <main>
        <HeroBanner h3Text="Home About us" h1Text="About us" height="300px" />
        <AboutSection />
        <Newsletter />
        <StatsCounter />
        <TestimonialSlider />
        <Features />
      </main>
    </>
  );
}
