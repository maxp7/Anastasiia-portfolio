import React from 'react';
import styles from '../Styles/FirstPage.module.css';


const FirstPage: React.FC = () => {
  
  return (
    <div className={styles.container}>
      <h1><span className={styles.noOpacity}> Turning</span> <span className={styles.opacity}>  fleeting <br /> </span> <span className={styles.noOpacity}> moments into <br /></span></h1>
      <h1> <span className={styles.opacity}> timeless</span> <span className={styles.noOpacity}>stories</span>.</h1>
      <h2> <span className={styles.bold} >Anastasia Vishnevska –</span> visual communication <br />through filmmaking, photography and media art.</h2>
    </div>
  );
};

export default FirstPage;
