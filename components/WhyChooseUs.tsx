import React from 'react';
import styles from '../styles/WhyChooseUs.module.css';

const WhyChooseUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Why User Should Choose Smartly</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2>Reliability</h2>
          <p>Lorem ipsum praesent ac massa da ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.</p>
        </div>
        <div className={styles.card}>
          <h2>Transparency</h2>
          <p>Lorem ipsum praesent ac massa da ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.</p>
        </div>
        <div className={styles.card}>
          <h2>Simplicity</h2>
          <p>Lorem ipsum praesent ac massa da ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.</p>
        </div>
      </div>
      <button className={styles.signupButton}>Sign up</button>
    </div>
  );
};

export default WhyChooseUs;
