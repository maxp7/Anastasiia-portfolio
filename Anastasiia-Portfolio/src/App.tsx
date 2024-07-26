// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './Components/Preloader';
import Gallery from './Components/Gallery';
import Catalogue from './Components/Catalogue';
import Navigation from './Components/Navigation';
import { SoundProvider } from './Components/SoundContext';
import { AnimatePresence } from 'framer-motion';
import recording from './assets/img/0.jpg';
import ohrwurm from './assets/img/1.jpg';
import erwachen from './assets/img/2.jpg';
import rueckenwind from './assets/img/3.jpg';
import kroshka from './assets/img/4.jpg'
import derossi from './assets/img/5.jpg'
import ichSehe from './assets/img/6.jpg'
import nature from './assets/img/7.jpg'
import marvels from './assets/img/8.1.jpg'
import queen from './assets/img/9.6.jpg'

import installation from './assets/img/installation.png';

import FirstPage from './Components/FirstPage';
import About from './Components/About';
import styles from './App.module.css';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const sliderImagesFilm = [
    { url: recording, title: 'RECORDING 377' },
    { url: erwachen, title: 'ERWACHEN' },
    { url: ohrwurm, title: 'OHRWURM' },
    { url: rueckenwind, title: 'RÜCKENWIND' },
    { url: kroshka, title: 'KROSHKA' },
    { url: derossi, title: 'A.DEROSSI' }
  ];

  const sliderImagesPhoto = [
    { url: nature, title: 'SEALED TIME' },
    { url: ichSehe, title: 'ICH BIN EINE BIENE 246' },
    { url: marvels, title: 'EVERYDAY MARVELS' },
    { url: queen, title: 'THE QUEEN OF THE NIGHT' },
    
  ];

  const sliderImagesInstallation = [
    { url: installation, title: 'TANGIBLE MUSIC INTERFACES' }
  ];

  const handleExploreClick = () => {
    setLoading(false);
  };

  return (
    <Router>
      <SoundProvider>
        <AnimatePresence>
            <Preloader onExploreClick={handleExploreClick} />
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/films" element={<Gallery title="Films" images={sliderImagesFilm} />} />
                <Route path="/photos" element={<Gallery title="Photos" images={sliderImagesPhoto} />} />
                <Route path="/installation" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/:title/:id" element={<Catalogue />} />
              </Routes>      
        </AnimatePresence>
      </SoundProvider>
    </Router>
  );
};

export default App;

const Home: React.FC = () => {
  return (
    <div className={styles.App}>
      <FirstPage />
    </div>
  );
};
