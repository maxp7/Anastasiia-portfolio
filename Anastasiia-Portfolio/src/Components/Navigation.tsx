import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../Styles/Navigation.module.css';
const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (path: string) => {
      navigate(path);
  };

  
  return (
    <nav className={styles.nav}>
      <div className={styles.navLinks}>
        <div
          className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
          onClick={() => handleClick('/')}
        >
          Home
        </div>
        <div
          className={`${styles.navLink} ${location.pathname === '/films' ? styles.active : ''}`}
          onClick={() => handleClick('/films')}
        >
          Films
        </div>
        <div
          className={`${styles.navLink} ${location.pathname === '/photos' ? styles.active : ''}`}
          onClick={() => handleClick('/photos')}
        >
          Photos
        </div>
        <div
          className={`${styles.navLink} ${location.pathname === '/installation' ? styles.active : ''}`}
          onClick={() => handleClick('/installation')}
        >
          Installation
        </div>
        <div
          className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`}
          onClick={() => handleClick('/about')}
        >
          About
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
