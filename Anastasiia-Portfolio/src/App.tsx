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
  const sliderImages1 = [film1, film2, film3, film4];
  const sliderImages2 = [film4, film3, film2, film1];
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:title/:id" element={<NewPage images={sliderImages1}/>} />
      </Routes>
    </Router>
  );
};

const Home: React.FC = () => {
  const sliderImages1 = [film1, film2, film3, film4];
  const sliderImages2 = [film4, film3, film2, film1];

  return (
    <div>
      <FirstPage />
      <Gallery title="Films" images={sliderImages1} />
      <Gallery title="Photos" images={sliderImages2} />
    </div>
  );
};

export default App;
