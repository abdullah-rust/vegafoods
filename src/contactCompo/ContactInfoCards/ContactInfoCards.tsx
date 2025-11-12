import React from "react";
import styles from "./ContactInfoCards.module.css";

// Type-Safe data for info cards
interface InfoCard {
  id: number;
  title: string;
  details: string;
}

const DUMMY_INFO: InfoCard[] = [
  {
    id: 1,
    title: "Address:",
    details: "198 West 21th Street, Suite 721 New York NY 10016",
  },
  { id: 2, title: "Phone:", details: "+ 1235 2355 98" },
  { id: 3, title: "Email:", details: "info@yoursite.com" },
  { id: 4, title: "Website:", details: "yoursite.com" },
];

const ContactInfoCards: React.FC = () => {
  return (
    <section className={styles.cardsSection}>
      {DUMMY_INFO.map((card) => (
        <div key={card.id} className={styles.infoCard}>
          <p className={styles.cardTitle}>{card.title}</p>
          <p className={styles.cardDetail}>{card.details}</p>
        </div>
      ))}
    </section>
  );
};

export default ContactInfoCards;
