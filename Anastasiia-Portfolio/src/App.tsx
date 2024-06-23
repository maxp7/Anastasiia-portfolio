import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Components/Gallery';
import Catalogue from './Components/Catalogue';
import ScrollToTop from './Components/ScrollToTop';
import photo1 from './assets/img/photo1.jpg'
import photo2 from './assets/img/photo2.jpg'
import photo3 from './assets/img/photo3.jpg'
import photo4 from './assets/img/photo4.jpg'
import photo5 from './assets/img/photo5.jpg'
import film1 from './assets/img/film1.jpg';
import film2 from './assets/img/film2.jpg';
import film3 from './assets/img/film3.jpg';
import film4 from './assets/img/film4.jpg';
import FirstPage from './Components/FirstPage';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:title/:id" element={<Catalogue />} />
      </Routes>
    </Router>
  );
};

const Home: React.FC = () => {
  const sliderImagesFilm = [film1, film2, film3, film4];
  const sliderImagesPhoto = [photo1, photo2, photo3, photo4, photo5];

  return (
    <div>
      <FirstPage />
      <Gallery title="Films" images={sliderImagesFilm} />
      <Gallery title="Photos" images={sliderImagesPhoto} />
    </div>
  );
};

export default App;
