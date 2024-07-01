import React , {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../Styles/Navigation.module.css';
const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [buttonPressed, setButtonPressed] = useState(false);


  const handleClick = (path: string) => {
      navigate(path);
      setButtonPressed(false);
  };
  const buttonPressedHandler = (isButtonPressed:boolean)=>{
    if (isButtonPressed){
      setButtonPressed(true);
    }
  }
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
          onClick={() => handleClick('/installation')}
        >
          Installation
        </div>
        <div
          className={`${buttonPressed ? styles.navLink : styles.linkDeactive} ${location.pathname === '/about' ? styles.active : ''}`}
          onClick={() => handleClick('/about')}
        >
          About
        </div>
        <div className= {`${buttonPressed ? styles.planeActive: styles.planeInactive}`}></div>
      </div>
      
    </nav>
  );
};

export default Navigation;
