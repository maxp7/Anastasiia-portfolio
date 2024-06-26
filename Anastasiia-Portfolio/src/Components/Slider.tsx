import React, { useEffect, useRef } from 'react';
import styles from '../Styles/Gallery.module.css';

interface SliderProps {
  images: { url: string; title?: string }[];
  onImageClick?: (index: number) => void; 
}

const Slider: React.FC<SliderProps> = ({ images, onImageClick }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      slider.scrollLeft += e.deltaY;
    };

    slider.addEventListener('wheel', handleWheel);

    return () => {
      slider.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleClick = (index: number) => {
    if (onImageClick) {
      onImageClick(index); 
    }
  };

  return (
    <div ref={sliderRef} className={styles.slider}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageContainer}>
          <img 
            src={image.url}
            alt={`Image ${index + 1}`}
            onClick={() => handleClick(index)}
            className={styles.image}
          />
          {image.title && <div className={styles.title}>{image.title}</div>}
        </div>
      ))}
    </div>
  );
};

export default Slider;
