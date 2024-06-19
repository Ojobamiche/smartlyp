import React from 'react';
import Navbar from '../components/Navbar';
import HowItWorks from '../components/HowItWorks';
import styles from '../styles/Home.module.css';

const HowItWorksPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <HowItWorks />
    </div>
  );
};

export default HowItWorksPage;
