import React from "react";
import { motion } from "motion/react";
import styles from "./Clients.module.css";

const clientLogos = {
  microsoft:
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  tigran: "https://dummyimage.com/150x60/82ae46/ffffff.png&text=TIGRAN",
  java: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  google:
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  adobe:
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png", // changed to PNG for browser
};

const Clients: React.FC = () => {
  const clients = [
    {
      id: 1,
      name: "Microsoft",
      logo: clientLogos.microsoft,
      url: "#",
    },
    {
      id: 2,
      name: "Tigran",
      logo: clientLogos.tigran,
      url: "#",
    },
    {
      id: 3,
      name: "Java",
      logo: clientLogos.java,
      url: "#",
    },
    {
      id: 4,
      name: "Google",
      logo: clientLogos.google,
      url: "#",
    },
    {
      id: 5,
      name: "Adobe",
      logo: clientLogos.adobe,
      url: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]; // cubic-bezier

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: ease,
      },
    },
  };
  return (
    <section className={styles.clients}>
      <div className="container">
        <motion.div
          className={styles.clientsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              className={styles.clientLogo}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className={styles.logoImage}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
