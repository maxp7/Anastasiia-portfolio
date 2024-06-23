import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Components/Gallery';
import NewPage from './Components/NewPage';
import ScrollToTop from './Components/ScrollToTop';
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
        <Route path="/:title/:id" element={<NewPage />} />
      </Routes>
    </Router>
  );
};

const Home: React.FC = () => {
  const sliderImagesFilm0 = [film1, film2, film3, film4];
  const sliderImagesPhoto0 = [film1, film2, film3, film4];

  return (
    <div>
      <FirstPage />
      <Gallery title="Films" images={sliderImagesFilm0} />
      <Gallery title="Photos" images={sliderImagesPhoto0} />
    </div>
  );
};

export default App;
