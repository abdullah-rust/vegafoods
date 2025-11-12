import HeroBanner from "../../components/HeroBanner/HeroBanner";
import ContactFormSection from "../../contactCompo/ContactFormSection/ContactFormSection";
import ContactInfoCards from "../../contactCompo/ContactInfoCards/ContactInfoCards";

export default function Contact() {
  return (
    <>
      <main>
        <HeroBanner h3Text="Home Contact" h1Text="CONTACT" height="300px" />
        <br />
        <br />
        <ContactFormSection />
        <ContactInfoCards />
      </main>
    </>
  );
}
