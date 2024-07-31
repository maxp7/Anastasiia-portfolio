import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSoundContext } from './SoundContext';
import styles from '../Styles/Navigation.module.css';
import crossIcon from '../assets/img/cross.png'
import muteIcon from '../assets/img/muteIcon.png'

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [buttonPressed, setButtonPressed] = useState(false);
  const { audioEnabled, setAudioEnabled, playSound, stopSound } = useSoundContext();

  const muteAudio = () => {
    stopSound();
    setAudioEnabled(false);
  };
  const activateAudio =() =>{
    playSound();
    setAudioEnabled(true);
  }

  const handleClick = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
      setButtonPressed(false); 
    }
    setButtonPressed(false); 
  };

  const buttonPressedHandler = (isButtonPressed: boolean) => {
    if (isButtonPressed !== buttonPressed) {
      setButtonPressed(isButtonPressed);
    }
  };

  return (
    
    <nav className={styles.nav}>
      <div className={`${buttonPressed ? styles.backgroundActive : styles.backgroundDeactive}`} onClick={() => buttonPressedHandler(false)} ></div>
      <div className={`${buttonPressed ? styles.navLinksDeactive : styles.navLinks}`}>
      <div 
          className={`${buttonPressed ? styles.linkActive : styles.linkInactive} ${buttonPressed ? styles.buttonPressed : styles.buttonReleased}`}
          onClick={() => buttonPressedHandler(true)} 
        >
          {(location.pathname === '/' ? "Home" : (location.pathname.split('/')[1] || location.pathname).charAt(0).toUpperCase() + (location.pathname.split('/')[1] || location.pathname).slice(1))} <div className={styles.crossIcon}><img style={{ width:'18px'}} src={crossIcon} alt="cross icon" /></div>
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
          className={`${audioEnabled? styles.audioEnable: styles.audioDisable } ${styles.muteButton}  ${buttonPressed? styles.navLink: styles.linkDeactive}`}
          onClick={audioEnabled ? muteAudio : activateAudio}
        >
          <img src={muteIcon} alt="Mute icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
