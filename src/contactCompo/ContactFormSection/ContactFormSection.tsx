import React from "react";
import styles from "./ContactFormSection.module.css";

const ContactFormSection: React.FC = () => {
  return (
    <section className={styles.formMapSection}>
      {/* 1. Left Side: Google Map */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425872426408!3d40.74076688939032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle%20Building%2041!5e0!3m2!1sen!2sin!4v1699874835935!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
          className={styles.googleMap}
        ></iframe>
      </div>

      {/* 2. Right Side: Contact Form */}
      <div className={styles.formContainer}>
        <form className={styles.contactForm}>
          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="Your Name"
              className={styles.formInput}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className={styles.formInput}
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className={styles.formInput}
            required
          />
          <textarea
            placeholder="Message"
            className={styles.formMessage}
            rows={6}
            required
          ></textarea>

          <button type="submit" className={styles.sendButton}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
