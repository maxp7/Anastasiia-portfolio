// src/App.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Gallery from './Components/Gallery';
import Catalogue from './Components/Catalogue';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer'; 


import queen1 from './assets/img/queen9.jpg'
import photo2 from './assets/img/photo2.jpg'
import photo3 from './assets/img/photo3.jpg'
import photo4 from './assets/img/photo4.jpg'
import photo5 from './assets/img/photo5.jpg'

import film1 from './assets/img/film1.jpg';
import film2 from './assets/img/film2.jpg';
import film3 from './assets/img/film3.jpg';
import film4 from './assets/img/film4.jpg';

import installation from './assets/img/installation.png'

import FirstPage from './Components/FirstPage';
import About from './Components/About';
import Navigation from './Components/Navigation';
import P5Canvas from './Components/P5Canvas';

const App: React.FC = () => {
  return (
    <Router>
      <section id='top'></section>
      <ScrollToTop />
      <Navigation />
      <P5Canvas />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:title/:id" element={<Catalogue />} />
      </Routes>
    </Router>
  );
};

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const sliderImagesFilm = [film1, film2, film3, film4];
  const sliderImagesPhoto = [queen1, photo2, photo3, photo4, photo5];
  const sliderImagesInstallation = [installation];

  return (
    <div>
      <section id='home'>
        <FirstPage />
      </section>
      <section id='films'>
        <Gallery title="Films" images={sliderImagesFilm} />
      </section>
      <section id='photos'>
        <Gallery title="Photos" images={sliderImagesPhoto} />
      </section>
      <section id='installation'>
        <Gallery title="Installation" images={sliderImagesInstallation} />
      </section>
      <section id='about'>
        <About/>
      </section>
      <Footer/>
      
    </div>
  );
};

export default App;
