// src/Components/Footer.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGoogleDrive, FaMailBulk, FaMailchimp, FaTelegram, FaPhone } from 'react-icons/fa';
import styles from '../Styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaPhone />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaTelegram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaMailBulk />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaLinkedin />
        </a>
      </div >
      <p className={styles.credentials}>Website made by <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>Maksym Pidluzhnyi
        </a></p>
        <p>2024</p>
    </footer>
  );
};

export default Footer;
