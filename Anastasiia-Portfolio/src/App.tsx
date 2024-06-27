import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Gallery from './Components/Gallery';
import Catalogue from './Components/Catalogue';
import Footer from './Components/Footer'; 
import Navigation from './Components/Navigation';

import film1 from './assets/img/film1.jpg';
import film2 from './assets/img/film2.jpg';
import film3 from './assets/img/film3.jpg';
import film4 from './assets/img/film4.jpg';

import queen1 from './assets/img/queen9.jpg';
import photo2 from './assets/img/photo2.jpg';
import photo3 from './assets/img/photo3.jpg';
import photo4 from './assets/img/photo4.jpg';
import photo5 from './assets/img/photo5.jpg';

import installation from './assets/img/installation.png';

import FirstPage from './Components/FirstPage';
import About from './Components/About';

const App: React.FC = () => {
  const sliderImagesFilm = [
    { url: film1, title: 'Film 1' },
    { url: film2, title: 'Film 2' },
    { url: film3, title: 'Film 3' },
    { url: film4, title: 'Film 4' }
  ];

  const sliderImagesPhoto = [
    { url: queen1, title: 'Queen 1' },
    { url: photo2, title: 'Photo 2' },
    { url: photo3, title: 'Photo 3' },
    { url: photo4, title: 'Photo 4' },
    { url: photo5, title: 'Photo 5' }
  ];

  const sliderImagesInstallation = [
    { url: installation, title: 'Installation' }
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
