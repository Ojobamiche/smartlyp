import React from 'react';
import styles from '../styles/Pricing.module.css';

const Pricing: React.FC = () => {
  return (
    <div className={styles.pricingContainer}>
      <div className={styles.pricingCard}>
        <h2>Free</h2>
        <p>Forever free for individuals and small teams up to 3</p>
        <ul>
          <li>Unlimited Access</li>
          <li>100MB Storage</li>
          <li>3 Users</li>
          <li>Unlimited Tasks</li>
        </ul>
        <button>Start for free</button>
      </div>
      <div className={styles.pricingCard}>
        <h2>Unlimited</h2>
        <p>per user/month billed yearly</p>
        <ul>
          <li>All in Free +</li>
          <li>Unlimited Guests</li>
          <li>Priority Support</li>
          <li>Smart Notifications</li>
        </ul>
        <button>Get Unlimited</button>
      </div>
      <div className={styles.pricingCard}>
        <h2>Enterprise</h2>
        <p>per user/month billed yearly</p>
        <ul>
          <li>All in Unlimited +</li>
          <li>Bulk Export</li>
          <li>Advanced Analytics</li>
          <li>Advanced Security</li>
        </ul>
        <button>Get Enterprise</button>
      </div>
    </div>
  );
};

export default Pricing;
