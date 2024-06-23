import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Styles/Gallery.module.css';
import Slider from './Slider';

interface GalleryProps {
  title: string;
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ title, images }) => {
  const navigate = useNavigate();

  const handleImageClick = (index: number) => {
    navigate(`/${encodeURIComponent(title)}/${index}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{title}</h1>
      <Slider images={images} onImageClick={handleImageClick} />
    </div>
  );
};

export default Gallery;
