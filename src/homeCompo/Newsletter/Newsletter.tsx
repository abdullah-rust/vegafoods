import React, { useState } from "react";
import { motion } from "motion/react";
import { FaPaperPlane } from "react-icons/fa";
import styles from "./Newsletter.module.css";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Subscribed with email:", email);
    setIsSubscribed(true);
    setEmail("");
    setIsSubmitting(false);

    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className={styles.newsletter}>
      <div className="container">
        <div className={styles.newsletterContent}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.title}>Subscribe to our Newsletter</h2>
            <p className={styles.description}>
              Get e-mail updates about our latest shops and special offers
            </p>
          </motion.div>

          <motion.div
            className={styles.formContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className={styles.newsletterForm}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className={styles.emailInput}
                  required
                  disabled={isSubmitting}
                />
                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting || !email}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <div className={styles.spinner}></div>
                  ) : (
                    <FaPaperPlane className={styles.buttonIcon} />
                  )}
                  <span className={styles.buttonText}>
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </span>
                </motion.button>
              </div>
            </form>

            {/* Success Message */}
            <motion.div
              className={styles.successMessage}
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isSubscribed ? 1 : 0,
                height: isSubscribed ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <span className={styles.successText}>
                🎉 Thank you for subscribing! You'll receive updates soon.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
