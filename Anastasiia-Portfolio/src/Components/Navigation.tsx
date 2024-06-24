// src/Components/Navigation.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import styles from '../Styles/Navigation.module.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'films', 'photos', 'installation', 'about'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.clientHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';

  const handleClick = (section: string) => {
    if (!isHomePage) {
      // If not on the home page, navigate to the home page and then scroll
      window.location.href = `/#${section}`;
    } else {
      // Scroll to the section if already on the home page
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
    }
  };

  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>
        {isHomePage ? (
          <ScrollLink to="top" smooth={true} duration={500} className={styles.navLink}>
            Vishnevska.com
          </ScrollLink>
        ) : (
          <Link to="/" className={styles.navLink}>Vishnevska.com</Link>
        )}
      </h1>
      <div className={styles.navLinks}>
        {['films', 'photos', 'installation', 'about'].map(section => (
          <div
            key={section}
            className={`${styles.navLink} ${activeSection === section ? styles.active : ''}`}
            onClick={() => handleClick(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
