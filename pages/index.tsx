// pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer'; // Assuming you have a Footer component
import styles from '../styles/Home.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header>
        <title>Smartly - Goal and Study Management Platform</title>
        <meta name="description" content="Your All-in-One Goal and Study Management Platform" />
        <link rel="icon" href="/favicon.ico" />
      </header>
      <Navbar />
      <main>
        {/* Home Front Page content */}
        <h1 className={styles.title}>Your All-in-One Goal and Study Management Platform</h1>
        <p className={styles.description}>
          To revolutionize the way individuals plan and manage their goals, tasks, and study plans by integrating all their resources into one platform, generating personalized plans using AI, tracking progress in real-time, and connecting them with accountability partners.
        </p>
        <button className={styles.tryFreeButton}>TRY FREE</button>
        <HowItWorks />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
