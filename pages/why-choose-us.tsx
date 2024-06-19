import React from 'react';
import Navbar from '../components/Navbar';
import WhyChooseUs from '../components/WhyChooseUs';
import styles from '../styles/Home.module.css';

const WhyChooseUsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <WhyChooseUs />
    </div>
  );
};

export default WhyChooseUsPage;
