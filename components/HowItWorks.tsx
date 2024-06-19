import React from 'react';
import styles from '../styles/Home.module.css';

const HowItWorks: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>How it's Work</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <span className={styles.cardLabel}>#one</span>
          <h2>Reliability</h2>
          <p>Lorem ipsum praesent ac massa da ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.</p>
        </div>
        <div className={styles.card}>
          <span className={styles.cardLabel}>#two</span>
          <h2>Transparency</h2>
          <p>Lorem ipsum praesent ac massa da ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.</p>
        </div>
        <div className={styles.card}>
          <span className={styles.cardLabel}>#three</span>
          <h2>Simplicity</h2>
          <p>Lorem ipsum praesent ac massa da ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.</p>
        </div>
      </div>
      <button className={styles.signupButton}>Sign up</button>
    </div>
  );
};

export default HowItWorks;
