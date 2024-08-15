import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSoundContext } from './SoundContext';
import styles from '../Styles/Slider.module.css';
import { motion, AnimatePresence } from 'framer-motion';

interface Crew {
  director?: string;
  filmBy?: string;
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
  const { audioEnabled, setAudioEnabled, stopSound } = useSoundContext();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentTitle, setCurrentTitle] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<{ url: string; title?: string; description?: string } | null>(null);
  const [infoPanelVisible, setInfoPanelVisible] = useState(false);
  const [currentDescription, setCurrentDescription] = useState<Description | undefined>(undefined);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(images.length).fill(false));

  const location = useLocation();
  const muteAudio = () => {
    stopSound();
    setAudioEnabled(false);
  };

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

  useEffect(() => {
    const infoPanel = document.querySelector(`.${styles.infoPanelEnable}`);
    if (infoPanel) {
      const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault();
      };
  
      (infoPanel as HTMLElement).addEventListener('touchmove', handleTouchMove, { passive: false });
  
      return () => {
        (infoPanel as HTMLElement).removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [infoPanelVisible]);

  useEffect(() => {
    closeInfoPanel();
  }, [location.pathname]);

  const handleClick = (index: number) => {
    if (onImageClick) {
      onImageClick(index);
      window.scrollTo(0, 0);
    }
    const image = images[index];
    setSelectedImage(image);
    setCurrentTitle(image.title || '');
    setCurrentDescription(getDescription(image.title));
    setInfoPanelVisible(true);
  };
  
  const handleInfoButtonClick = (image: { url: string; title?: string; description?: string }) => {
    if (selectedImage && selectedImage.url === image.url && infoPanelVisible) {
      window.scrollTo(0, 0);
      setInfoPanelVisible(false);
      setSelectedImage(null);
    } else {
      window.scrollTo(0, 0);
      setSelectedImage(image);
      setCurrentTitle(image.title || '');
      setCurrentDescription(getDescription(image.title));
      setInfoPanelVisible(true);
    }
  };

  const closeInfoPanel = () => {
    setInfoPanelVisible(false);
    setSelectedImage(null);
  };

  const getDescription = (title?: string): Description | undefined => {
    if (!title) return undefined;
    const key = title.trim().toLowerCase();
    return descriptions[key];
  };

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -700 : 700;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  function createLineBreaks(text: string) {
    return text.split('<br>').map((item, index) => (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    ));
  }

  const loadImage = (src: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(src);
      img.onerror = (err) => reject(err);
    });
  };

  const loadImagesInSequence = async (imageUrls: string[]) => {
    const loadedImages = [];
    for (const url of imageUrls) {
      try {
        await loadImage(url);
        loadedImages.push(url);
      } catch (err) {
        console.error(`Failed to load image ${url}`, err);
      }
    }
    return loadedImages;
  };

  useEffect(() => {
    const imageUrls = images.map(image => image.url);
    
    const fetchImages = async () => {
      const loaded = await loadImagesInSequence(imageUrls);
      const loadedImageStates = images.map(image => loaded.includes(image.url));
      setLoadedImages(loadedImageStates);
    };
  
    if (images.length > 0) {
      fetchImages();
    }
  }, [images]);

  const convertStyle = () => {
    const height = window.innerHeight;
    Array.from(document.getElementsByClassName("InfoPanelEnabled")).forEach((element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.height = `${height}px`;
    });
  };

  window.addEventListener("resize", convertStyle);
  window.addEventListener("DOMContentLoaded", convertStyle);

  return (
    <AnimatePresence>
    <div className={styles.sliderWrapper}>
      <div className={`${styles.slider} ${sliderClassName}`} ref={sliderRef}>
        <div className={styles.leftNav} onClick={() => scrollSlider('left')}></div>
        <div className={styles.rightNav} onClick={() => scrollSlider('right')}></div>
        {images.map((image, index) => (
  <div key={index} className={styles.imageContainer}>
    <motion.img
      src={image.url}
      alt={`Image ${index + 1}`}
      onClick={() => handleClick(index)}
      className={styles.image}
      initial={{ opacity: 0 }}
      animate={{ opacity: loadedImages[index] ? 1 : 0 }}
      transition={{ duration: 2 }}
    />
    {image.title && (
      <motion.div className={`${styles.title} ${titleClassName}`}initial={{ opacity: 0 }}
      animate={{ opacity: loadedImages[index] ? 1 : 0 }}
      transition={{ duration: 2 }}>
        <div>{image.title}</div>
        <div className={styles.controlButtons}>
          {currentDescription?.youtubeLink && (
            <a className={styles.watchButton} href={currentDescription.youtubeLink} onClick={() => muteAudio()} target="_blank" rel="noopener noreferrer">
              <button>{location.pathname === "/installation/0" ? 'Watch the Teaser' : "Watch the Film"}</button>
            </a>
          )}
          <button className={infoPanelVisible ? styles.infoDisabled : styles.InfoEnabled} onClick={() => handleInfoButtonClick(image)}>Info</button>
          <div className={infoPanelVisible ? styles.InfoButtonEnabled : styles.infoButtonDisabled} onClick={() => closeInfoPanel()}></div>
        </div>
      </motion.div>
    )}
  </div>
))}
        {selectedImage && selectedImage.title && currentDescription && (
          <div className={infoPanelVisible ? styles.infoPanelEnable : styles.infoPanelDisable} onClick={() => closeInfoPanel()}>
            <div>
              <p className={styles.descriptionGeneral} onClick={() => closeInfoPanel()}>
                {currentDescription.general || 'No description available'}
              </p>
            </div>
            <div>
              {currentDescription.year && (
                <p className={styles.descriptionSection}>
                  <strong className={styles.leftColumn}>YEAR</strong>
                  <div className={styles.rightColumn}> {currentDescription.year}</div>
                </p>
              )}
              {currentDescription.language && (
                <p className={styles.descriptionSection}>
                  <strong className={styles.leftColumn}>LANGUAGE</strong>
                  <div className={styles.rightColumn}>{currentDescription.language}</div>
                </p>
              )}
              {currentDescription.festivals && (
                <p className={styles.descriptionSection}>
                  <strong className={styles.leftColumn}>FESTIVALS</strong>
                  <div className={styles.rightColumn}>
                    {currentDescription.festivals.split(';').map((festival, index) => (
                      <div key={index}>{festival.trim()}</div>
                    ))}
                  </div>
                </p>
              )}
              {currentDescription.crew && (
                <>
                  {currentDescription.crew.director && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>{`${currentDescription.youtubeLink === "https://youtu.be/eAsrqH0uvyA" ? "DIRECTOR, WRITER, EDITOR" : "DIRECTOR"}`}</strong>
                      <div className={styles.rightColumn}>{currentDescription.crew.director}</div>
                    </p>
                  )}
                  {currentDescription.crew.filmBy && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>FILM BY</strong>
                      <div className={styles.rightColumn}> {currentDescription.crew.filmBy}</div>
                    </p>
                  )}
                  {currentDescription.crew.writer && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>{`${currentDescription.youtubeLink === "https://youtu.be/eAsrqH0uvyA" ? "WRITER, COLORIST, ASSISTANT" : "WRITER"}`}</strong>
                      <div className={styles.rightColumn}>{currentDescription.crew.writer}</div>
                    </p>
                  )}
                  {currentDescription.crew.cinematographer && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>CINEMATOGRAPHER</strong>
                      <div className={styles.rightColumn}> {currentDescription.crew.cinematographer}</div>
                    </p>
                  )}
                  {currentDescription.crew.assistant && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>ASSISTANT</strong>
                      <div className={styles.rightColumn}> {currentDescription.crew.assistant}</div>
                    </p>
                  )}
                  {currentDescription.crew.colorist && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>COLORIST</strong>
                      <div className={styles.rightColumn}> {currentDescription.crew.colorist}</div>
                    </p>
                  )}
                  {currentDescription.crew.setDesigner && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>SET DESIGNER</strong>
                      <div className={styles.rightColumn}> {currentDescription.crew.setDesigner}</div>
                    </p>
                  )}
                  {currentDescription.crew.costumeDesigner && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>COSTUME DESIGNER</strong>
                      <div className={styles.rightColumn}> {currentDescription.crew.costumeDesigner}</div>
                    </p>
                  )}
                  {currentDescription.crew.directorOfPhotography && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>CINEMATOGRAPHER</strong>
                      <div className={styles.rightColumn}> {currentDescription.crew.directorOfPhotography}</div>
                    </p>
                  )}
                  {currentDescription.crew.producer && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>PRODUCER</strong>
                      <div className={styles.rightColumn}> {currentDescription.crew.producer}</div>
                    </p>
                  )}
                  {currentDescription.crew.soundDesign && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>SOUND DESIGN</strong>
                      <div className={styles.rightColumn}> {currentDescription.crew.soundDesign}</div>
                    </p>
                  )}
                  {currentDescription.crew.makeUp && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>MAKE UP</strong>
                      <div className={styles.rightColumn}> {currentDescription.crew.makeUp}</div>
                    </p>
                  )}
                  {currentDescription.crew.designAndConception && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>DESIGN AND CONCEPTION</strong>
                      <strong className={styles.rightColumn}>{createLineBreaks(currentDescription.crew.designAndConception)}</strong>
                    </p>
                  )}
                  {currentDescription.crew.programming && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>PROGRAMMING</strong>
                      <div className={styles.rightColumn}> {currentDescription.crew.programming}</div>
                    </p>
                  )}
                  {currentDescription.crew.supervision && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>SUPERVISION</strong>
                      <div className={styles.rightColumn}> {currentDescription.crew.supervision}</div>
                    </p>
                  )}
                  {currentDescription.crew.cast && currentDescription.crew.cast.length > 0 && (
                    <p className={styles.descriptionSection}>
                      <strong className={styles.leftColumn}>CAST</strong>
                      <div className={styles.rightColumn}> {currentDescription.crew.cast.join(', ')}</div>
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    </AnimatePresence>
  );
};

export default Slider;
