import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Gallery from './Components/Gallery';
import Catalogue from './Components/Catalogue';
import Footer from './Components/Footer'; 
import Navigation from './Components/Navigation';

import recording from './assets/img/0.jpg';
import ohrwurm from './assets/img/1.jpg';
import erwachen from './assets/img/2.jpg';
import rueckenwind from './assets/img/3.jpg';
import kroshka from './assets/img/4.jpg'
import derossi from './assets/img/5.jpg'
import ichSehe from './assets/img/6.jpg'
import nature from './assets/img/7.jpg'

import installation from './assets/img/installation.png';

import FirstPage from './Components/FirstPage';
import About from './Components/About';

const App: React.FC = () => {
  const sliderImagesFilm = [
    { url: recording, title: 'Recording377' },
    { url: ohrwurm, title: 'Ohrwurm' },
    { url: erwachen, title: 'Erwachen' },
    { url: rueckenwind, title: 'Rückenwind' },
    { url: kroshka, title: 'Kroshka' },
    { url: derossi, title: 'A.Derossi' }
  ];

  const sliderImagesPhoto = [
    { url: ichSehe, title: 'Ich sehe' },
    { url: nature, title: 'Nature' }
  ];

  const sliderImagesInstallation = [
    { url: installation, title: 'Tactile Music Interfaces' }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Gallery title="films" images={sliderImagesFilm} />} />
        <Route path="/photos" element={<Gallery title="photos" images={sliderImagesPhoto} />} />
        <Route path="/installation" element={<Gallery title="installation" images={sliderImagesInstallation} />} />
        <Route path="/about" element={<About />} />
        <Route path="/:title/:id" element={<Catalogue />} />
      </Routes>
    </Router>
  );
};

const Home: React.FC = () => {
  return (
    <div className={styles.App}>
      <Navigation />
      <FirstPage />
      <Footer />
    </div>
  );
};

export default App;
