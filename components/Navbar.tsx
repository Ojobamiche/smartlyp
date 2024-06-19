import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Smartly Logo" />
        <span>Smartly</span>
      </div>
      <div className={styles.links}>
        <a href="#solutions">Solutions</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
        <button className={styles.signupButton}>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
