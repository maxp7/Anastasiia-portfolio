import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../Styles/Navigation.module.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  const handleClick = (path: string) => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
      navigate(path);
    }, 1000); 
  };

  return (
    <nav className={styles.nav}>
      <div className={` ${fade ? 'imageOverlayEnable' : 'imageOverlayDisable'}`} ></div>
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
