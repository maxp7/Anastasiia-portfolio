import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../Styles/About.module.css';

const About: React.FC = () => {
  
  const location = useLocation();
  const [buttonPressed, setButtonPressed] = useState(false);

  const buttonPressedHandler = (isButtonPressed: boolean) => {
    if (isButtonPressed !== buttonPressed) {
      setButtonPressed(isButtonPressed);
    }
  };
  return (

    <div className={styles.container}>
      <p className={styles.header}>Hello! I'm Anastasiia Vishnevska, a visual communication artist from Ukraine, currently studying Communication Design in Berlin.</p>

      <p className={styles.description}>With a background in fine arts, I currently focus on film, photography and media art, often exploring social, moral and psychological issues. I enjoy delving into philosophical issues, aiming to make complex ideas more accessible and relatable. By developing my project coordination skills, I've learned how to smoothly bring creative ideas to life and believe that collaboration is the key to great resales.  <br /> <br />

      If you're looking for an artist to bring ideas to life, I'd love to work with you to create meaningful and high-quality results.</p>
<nav className={styles.nav}>
      <div className={styles.navLinks}>
        <div
          className={`${buttonPressed ? styles.navLink : styles.linkDeactive} `}
        >
          <a href="https://www.instagram.com/_vish.na_/" target='blank'>Instagram</a>
        </div>
        <div
          className={`${buttonPressed ? styles.navLink : styles.linkDeactive} `}
        >
          <a href="mailto:yavishnevskayaya@gmail.com" target='blank'>Yavishnevskayaya@gmail.com</a>
        </div>
        <div
          className={`${buttonPressed ? styles.navLink : styles.linkDeactive}`}
        >
         <a href="https://t.me/viishnii" target='blank'>Telegram</a> 
        </div>
        
      </div>
    </nav>
    </div>
  );
};

export default About;
