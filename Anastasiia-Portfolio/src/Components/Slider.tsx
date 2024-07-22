import React, { useEffect, useRef, useState } from 'react';
import styles from '../Styles/Slider.module.css';


interface SliderProps {
  images: { url: string; title?: string }[];
  onImageClick?: (index: number) => void;
  sliderClassName: string;
  titleClassName: string;
}

const Slider: React.FC<SliderProps> = ({ images, onImageClick, sliderClassName, titleClassName }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<{ url: string; title?: string } | null>(null);
  const [infoPanelVisible, setInfoPanelVisible] = useState(false);

  useEffect(() => {
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
}, []);

  const handleClick = (index: number) => {
    if (onImageClick) {
      onImageClick(index);
    }
    setSelectedImage(images[index]);
    setInfoPanelVisible(true);
  };

  const handleInfoButtonClick = (image: { url: string; title?: string }) => {
    if (selectedImage && selectedImage.url === image.url) {
      setInfoPanelVisible(false);
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
      setInfoPanelVisible(true);
    }
  };

  return (
    <div ref={sliderRef} className={`${styles.slider} ${sliderClassName} ${infoPanelVisible ? styles.scrollDisable : styles.scrollEnable}`}>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat atque aliquid, rem tempore, ipsa cumque ut ex quaerat ea expedita quidem. Vitae quia numquam doloribus nulla rerum natus fuga error. Aspernatur cumque repellendus tempora! Molestias odio sunt ea, at fugiat ducimus ad cupiditate corporis similique debitis laboriosam asperiores alias?
          </p>
        </div>
      )}
    </div>
  );
};

export default Slider;
