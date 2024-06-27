import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/Gallery.module.css';
import Slider from './Slider';
import Navigation from './Navigation';
import '../Styles/fadeTransition.css';

interface GalleryProps {
  title: string;
  images: { url: string; title: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ title, images }) => {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  const handleImageClick = (index: number) => {
    setFade(true);
    setTimeout(() => {     
      setFade(false);
      navigate(`/${title}/${index}`); // reset fade state after navigation
    }, 501); // duration of the fade-out animation
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={` ${fade ? 'imageOverlayEnable' : 'imageOverlayDisable'}`} ></div>
      <Navigation />
      <Slider images={images} onImageClick={handleImageClick} />
    </div>
  );
};

export default Gallery;
