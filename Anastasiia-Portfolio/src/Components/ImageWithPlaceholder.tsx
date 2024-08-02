import React, { useState, useEffect } from 'react';
import styles from '../Styles/Catalogue.module.css';

interface ImageWithPlaceholderProps {
  src: string;
  placeholder: string;
  alt: string;
  onClick?: () => void;
}

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({ src, placeholder, alt, onClick }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
      setImageSrc(src);
    };
  }, [src]);

  return (
    <div className={styles.imageContainer}>
      <img
        src={imageSrc}
        alt={alt}
        onClick={onClick}
        className={`${styles.image} ${loaded ? '' : styles.blur}`}
      />
    </div>
  );
};

export default ImageWithPlaceholder;
