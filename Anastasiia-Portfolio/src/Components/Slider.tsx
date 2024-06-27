import React, { useEffect, useRef } from 'react';
import styles from '../Styles/Slider.module.css';

interface SliderProps {
  images: { url: string; title?: string }[];
  onImageClick?: (index: number) => void; 
}

const Slider: React.FC<SliderProps> = ({ images, onImageClick }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isScrolling = false;
    let scrollAmount = 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollAmount += e.deltaY ;

      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(scroll);
      }
    };

    const scroll = () => {
      if (Math.abs(scrollAmount) > 1) {
        slider.scrollLeft += scrollAmount * 0.1;
        scrollAmount *= 0.9;
        requestAnimationFrame(scroll);
      } else {
        isScrolling = false;
        scrollAmount = 0;
      }
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
    <div  ref={sliderRef} className={styles.slider}>
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
