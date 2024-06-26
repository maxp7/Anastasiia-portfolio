import React from 'react';
import { Link } from 'react-router-dom';
import styles from'../Styles/Navigation.module.css'; 

const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>
        <Link to="/" className={styles.navLink}>Vishnevska.com</Link>
      </h1>
      <div className={styles.navLinks}>
        <Link to="/films" className={styles.navLink}>Films</Link>
        <Link to="/photos" className={styles.navLink}>Photos</Link>
        <Link to="/installation" className={styles.navLink}>Installation</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
      </div>
    </nav>
  );
};

export default Navigation;
