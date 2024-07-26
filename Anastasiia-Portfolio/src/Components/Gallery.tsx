// Gallery.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/Gallery.module.css';
import Slider from './Slider';


interface Description {
  general?: string;
}

const descriptions: Record<string, Description> = {

};

interface GalleryProps {
  title: string;
  images: { url: string; title: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ title, images }) => {
  const navigate = useNavigate();
  
  const handleImageClick = (index: number) => { 
    navigate(`/${title}/${index}`); 
  };

  return (
    <div className={styles.galleryContainer}>
      <Slider 
        images={images} 
        onImageClick={handleImageClick} 
        sliderClassName={styles.gallerySlider} 
        titleClassName={styles.galleryTitle} 
        descriptions={descriptions} 
      />
    </div>
  );
};

export default Gallery;
