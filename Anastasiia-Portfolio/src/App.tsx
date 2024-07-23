import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './Components/Preloader';
import styles from './App.module.css';
import Gallery from './Components/Gallery';
import Catalogue from './Components/Catalogue';
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
  const [loading, setLoading] = useState<boolean>(true);

  const sliderImagesFilm = [
    { url: recording, title: 'Recording 377' },
    { url: erwachen, title: 'Erwachen' },
    { url: ohrwurm, title: 'Ohrwurm' },
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

  const loadImages = (images: { url: string; title: string }[]): Promise<string[]> => {
    return Promise.all(
      images.map((image) => {
        return new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.src = image.url;
          img.onload = () => resolve(image.url);
          img.onerror = () => reject(new Error(`Failed to load image at ${image.url}`));
        });
      })
    );
  };
  
  useEffect(() => {
    const loadData = async () => {
      try {
        await Promise.all([
          loadImages(sliderImagesFilm),
          loadImages(sliderImagesPhoto),
          loadImages(sliderImagesInstallation),
        ]);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке ресурсов:', error);
      }
    };

    loadData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home loading={loading} />} />
        <Route path="/films" element={<Gallery title="films" images={sliderImagesFilm} />} />
        <Route path="/photos" element={<Gallery title="photos" images={sliderImagesPhoto} />} />
        <Route path="/installation" element={<Gallery title="installation" images={sliderImagesInstallation} />} />
        <Route path="/about" element={<About />} />
        <Route path="/:title/:id" element={<Catalogue />} />
      </Routes>
    </Router>
  );
};

export default App;
interface HomeProps {
  loading: boolean;
}

const Home: React.FC<HomeProps> = ({ loading }) => {
  return (
    <div className={styles.App}>
      {loading ? <Preloader /> : <>
        <Navigation />
        <FirstPage />
      </>}
    </div>
  );
};

