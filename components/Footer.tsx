import React from 'react';
import styles from '../styles/Home.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialMediaLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className={styles.contactDetails}>
          <p>Email: contact@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Example Street, City, Country</p>
        </div>
        <form className={styles.feedbackForm}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Feedback"></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
