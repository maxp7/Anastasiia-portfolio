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
      <p className={styles.description}>Hello! My name is Anastasiia Vishnevska. I am a visual communication artist from Ukraine, currently studying communication design at HTW University in Berlin. I hold a Bachelor's degree in Fine Arts from the Odessa State Academy of Civil Engineering and Architecture and have further refined my skills through advanced courses at Projector - Creative & Tech Institute. <br /><br />

My artistic focus is film, photography, and media art, where I confidently explore social, moral, and psychological themes. My work dives deep into philosophical questions, making complex ideas accessible and thought-provoking. <br /><br />I have a strong foundation in contemporary visual communication trends and technologies, and I excel in team collaborations and project coordination. I bring unparalleled creative energy and the ability to turn ideas into reality, making me a valuable asset to any project. <br /><br />

If you're looking for a dedicated artist to bring your ideas to fruition, I'm the one for the job. I'm eager to work with you to create impactful and high-quality results.</p>
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
