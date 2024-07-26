import React, { useEffect, useRef, useState } from 'react';
import styles from '../Styles/Slider.module.css';

interface Crew {
  director?: string;
  cinematographer?: string;
  writer?: string;
  assistant?: string;
  colorist?: string;
  setDesigner?: string;
  costumeDesigner?: string;
  directorOfPhotography?: string;
  producer?: string;
  soundDesign?: string;
  makeUp?: string;
  cast?: string[];
  designAndConception?: string;
  programming?: string;
  supervision?: string;
}

interface Description {
  general?: string;
  year?: string;
  language?: string;
  festivals?: string;
  crew?: Crew;
  youtubeLink?: string;
}

interface SliderProps {
  images: { url: string; title?: string; description?: string }[];
  onImageClick?: (index: number) => void;
  sliderClassName: string;
  titleClassName: string;
  descriptions: Record<string, Description>;
  description?: string;
}

const Slider: React.FC<SliderProps> = ({ images, onImageClick, sliderClassName, titleClassName, descriptions }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentTitle, setCurrentTitle] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<{ url: string; title?: string; description?: string } | null>(null);
  const [infoPanelVisible, setInfoPanelVisible] = useState(false);
  const [currentDescription, setCurrentDescription] = useState<Description | undefined>(undefined);

  useEffect(() => {
    if (images.length > 0 && images[0].title) {
      setCurrentTitle(images[0].title);
      setCurrentDescription(getDescription(images[0].title));
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
    setCurrentDescription(getDescription(image.title));
    setInfoPanelVisible(true);
  };
  
  const handleInfoButtonClick = (image: { url: string; title?: string; description?: string }) => {
    if (selectedImage && selectedImage.url === image.url) {
      setInfoPanelVisible(false);
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
      setCurrentTitle(image.title || '');
      setCurrentDescription(getDescription(image.title));
      setInfoPanelVisible(true);
    }
  };

  const getDescription = (title?: string): Description | undefined => {
    if (!title) return undefined;
    const key = title.trim().toLowerCase();
    return descriptions[key];
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
                {currentDescription?.youtubeLink && (
                  <a className={styles.watchButton} href={currentDescription.youtubeLink} target="_blank" rel="noopener noreferrer">
                    <button>Watch the film</button>
                  </a>
                )}
                <button onClick={() => handleInfoButtonClick(image)}>Info</button>
              </div>
            </div>
          )}
        </div>
      ))}

{selectedImage && selectedImage.title && currentDescription && (
  <div className={infoPanelVisible ? styles.infoPanelEnable : styles.infoPanelDisable}>
    <div>
    <p className={styles.descriptionGeneral}>
      {currentDescription.general || 'No description available'}
    </p>
    </div>
    <div>
    {currentDescription.year && (<p className={styles.descriptionSection}>
      <strong>Year</strong> {currentDescription.year }
    </p>
    )}
     {currentDescription.language && (
      <p className={styles.descriptionSection}>
      <strong>Language</strong>{currentDescription.language }
    </p>
     )}
    {currentDescription.festivals && (
      <p className={styles.descriptionSection}>
        <strong>Festivals</strong> {currentDescription.festivals}
      </p>
    )}
    {currentDescription.crew && (
      <>
        {currentDescription.crew.director && (
          <p className={styles.descriptionSection}>
            <strong>Director</strong>{currentDescription.crew.director}
          </p>
        )}
        {currentDescription.crew.writer && (
          <p className={styles.descriptionSection}>
            <strong>Writer</strong>{currentDescription.crew.writer}
          </p>
        )}
        {currentDescription.crew.cinematographer && (
          <p className={styles.descriptionSection}>
            <strong>Cinematographer</strong> {currentDescription.crew.cinematographer}
          </p>
        )}
        {currentDescription.crew.assistant && (
          <p className={styles.descriptionSection}>
            <strong>Assistant</strong> {currentDescription.crew.assistant}
          </p>
        )}
        {currentDescription.crew.colorist && (
          <p className={styles.descriptionSection}>
            <strong>Colorist</strong> {currentDescription.crew.colorist}
          </p>
        )}
        {currentDescription.crew.setDesigner && (
          <p className={styles.descriptionSection}>
            <strong>Set Designer</strong> {currentDescription.crew.setDesigner}
          </p>
        )}
        {currentDescription.crew.costumeDesigner && (
          <p className={styles.descriptionSection}>
            <strong>Costume Designer</strong> {currentDescription.crew.costumeDesigner}
          </p>
        )}
        {currentDescription.crew.directorOfPhotography && (
          <p className={styles.descriptionSection}>
            <strong>Director of Photography</strong> {currentDescription.crew.directorOfPhotography}
          </p>
        )}
        {currentDescription.crew.producer && (
          <p className={styles.descriptionSection}>
            <strong>Producer</strong> {currentDescription.crew.producer}
          </p>
        )}
        {currentDescription.crew.soundDesign && (
          <p className={styles.descriptionSection}>
            <strong>Sound Design</strong> {currentDescription.crew.soundDesign}
          </p>
        )}
        {currentDescription.crew.makeUp && (
          <p className={styles.descriptionSection}>
            <strong>Make Up</strong> {currentDescription.crew.makeUp}
          </p>
        )}
        {currentDescription.crew.designAndConception && (
          <p className={styles.descriptionSection}>
            <strong>Design and Conception</strong> {currentDescription.crew.designAndConception}
          </p>
        )}
        {currentDescription.crew.programming && (
          <p className={styles.descriptionSection}>
            <strong>Programming</strong> {currentDescription.crew.programming}
          </p>
        )}
        {currentDescription.crew.supervision && (
          <p className={styles.descriptionSection}>
            <strong>Supervision</strong> {currentDescription.crew.supervision}
          </p>
        )}
        {currentDescription.crew.cast && currentDescription.crew.cast.length > 0 && (
          <p className={styles.descriptionSection}>
            <strong>Cast</strong> {currentDescription.crew.cast.join(', ')}
          </p>
        )}
        
      </>
    )}
    </div>
  </div>
)}
    </div>
  );
};

export default Slider;
