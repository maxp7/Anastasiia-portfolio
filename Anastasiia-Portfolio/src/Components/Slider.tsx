import React, { useEffect, useRef, useState } from 'react';
import styles from '../Styles/Slider.module.css';

interface SliderProps {
  images: { url: string; title?: string; description?: string }[];
  onImageClick?: (index: number) => void;
  sliderClassName: string;
  titleClassName: string;
  description?: string; 
}

const Slider: React.FC<SliderProps> = ({ images, onImageClick, sliderClassName, titleClassName }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentTitle, setCurrentTitle] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<{ url: string; title?: string; description?: string } | null>(null);
  const [infoPanelVisible, setInfoPanelVisible] = useState(false);

  useEffect(() => {
    if (images.length > 0 && images[0].title) {
      setCurrentTitle(images[0].title);
    }

    const slider = sliderRef.current;
    if (!slider) return;

    let isScrolling = false;
    let scrollAmount = 0;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > 0 || Math.abs(e.deltaY) < Math.abs(e.deltaX)) {
        return;
      }

      e.preventDefault();
      scrollAmount += e.deltaY;

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
  }, [images]);

  const handleClick = (index: number) => {
    if (onImageClick) {
      onImageClick(index);
    }
    const image = images[index];
    setSelectedImage(image);
    setCurrentTitle(image.title || '');
    setInfoPanelVisible(true);
  };

  const handleInfoButtonClick = (image: { url: string; title?: string; description?: string }) => {
    if (selectedImage && selectedImage.url === image.url) {
      setInfoPanelVisible(false);
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
      setCurrentTitle(image.title || '');
      setInfoPanelVisible(true);
    }
  };

  return (
    <div ref={sliderRef} className={`${currentTitle ? currentTitle : ""} ${styles.slider} ${sliderClassName} ${infoPanelVisible ? styles.scrollDisable : styles.scrollEnable}`}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageContainer}>
          <img
            src={image.url}
            alt={`Image ${index + 1}`}
            onClick={() => handleClick(index)}
            className={styles.image}
          />
          {image.title && (
            <div className={`${styles.title} ${titleClassName}`}>
              <div>{image.title}</div>
              <div className={styles.infoButton}>
                <button>Watch the film</button>
                <button onClick={() => handleInfoButtonClick(image)}>Info</button>         
              </div>
            </div>
          )}
        </div>
      ))}
      {selectedImage && (
        <div className={infoPanelVisible ? styles.infoPanelEnable : styles.infoPanelDisable}>
          <h1>{selectedImage.title}</h1>
          <p>{selectedImage.description}</p>
        </div>
      )}
    </div>
  );
};

export default Slider;
