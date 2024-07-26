import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSoundContext } from './SoundContext';
import styles from '../Styles/Navigation.module.css';

import muteIcon from '../assets/img/muteIcon.png'

const Navigation: React.FC = () => {
  const { stopSound } = useSoundContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [buttonPressed, setButtonPressed] = useState(false);

  const muteAudio = () => {
    stopSound();
  };

  const handleClick = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
      setButtonPressed(false); // Изменение состояния только если путь изменяется
    }
  };

  const buttonPressedHandler = (isButtonPressed: boolean) => {
    if (isButtonPressed !== buttonPressed) {
      setButtonPressed(isButtonPressed);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navLinks}>
      <div 
          className={`${buttonPressed ? styles.linkActive : styles.linkInactive} ${buttonPressed ? styles.buttonPressed : styles.buttonReleased}`}
          onClick={() => buttonPressedHandler(true)} 
        >
          {`${location.pathname === '/' ? "Home" : location.pathname.replace(/^.(.)/, (_, secondChar) => secondChar.toUpperCase())}`}
        </div>
        <div
          className={`${buttonPressed ? styles.navLink : styles.linkDeactive} ${location.pathname === '/' ? styles.active : ''}`}
          onClick={() => handleClick('/')}
        >
          Home
        </div>
        <div
          className={`${buttonPressed ? styles.navLink : styles.linkDeactive} ${location.pathname === '/films' ? styles.active : ''}`}
          onClick={() => handleClick('/films')}
        >
          Films
        </div>
        <div
          className={`${buttonPressed ? styles.navLink : styles.linkDeactive} ${location.pathname === '/photos' ? styles.active : ''}`}
          onClick={() => handleClick('/photos')}
        >
          Photos
        </div>
        <div
          className={`${buttonPressed ? styles.navLink : styles.linkDeactive} ${location.pathname === '/installation' ? styles.active : ''}`}
          onClick={() => handleClick('/installation/0')}
        >
          Installation
        </div>
        <div
          className={`${buttonPressed ? styles.navLink : styles.linkDeactive} ${location.pathname === '/about' ? styles.active : ''}`}
          onClick={() => handleClick('/about')}
        >
          About
        </div>
        <div
          className={`${buttonPressed ? styles.navLink : styles.linkDeactive} ${styles.muteButton}`}
          onClick={muteAudio}
        >
          <img src={muteIcon} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
