import React from 'react';
import styles from '../Styles/About.module.css';
import Navigation from './Navigation';

const About: React.FC = () => {
  
  return (

    <div className={styles.container}>
          <Navigation />
      <h1>About</h1>
    </div>
  );
};

export default About;
