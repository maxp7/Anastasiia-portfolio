import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from '../Styles/Navigation.module.css';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      
      <div className={styles.navLinks}>
      <NavLink 
          to="/" 
          className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
        >
          Home
        </NavLink>
        <NavLink 
          to="/films" 
          className={`${styles.navLink} ${location.pathname === '/films' ? styles.active : ''}`}
        >
          Films
        </NavLink>
        <NavLink 
          to="/photos" 
          className={`${styles.navLink} ${location.pathname === '/photos' ? styles.active : ''}`}
        >
          Photos
        </NavLink>
        <NavLink 
          to="/installation" 
          className={`${styles.navLink} ${location.pathname === '/installation' ? styles.active : ''}`}
        >
          Installation
        </NavLink>
        <NavLink 
          to="/about" 
          className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
