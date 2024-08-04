import React, { useState, useEffect, useRef } from 'react';
import { useSoundContext } from './SoundContext';
import '../Styles/Preloader.css';
import backgroundGif from '../assets/img/background.gif'; // Импортируйте изображение
import cursorImage from '../assets/img/cursor.svg';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onExploreClick: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onExploreClick }) => {
  const { playSound } = useSoundContext();
  const [isVisible, setIsVisible] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonSize, setButtonSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (window.innerWidth > 768) {
        setCursorPosition({ x: event.clientX, y: event.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      const { offsetWidth, offsetHeight } = buttonRef.current;
      setButtonSize({ width: offsetWidth, height: offsetHeight });
    }
  }, [buttonVisible]);

  const handleClick = () => {
    playSound();
    onExploreClick();
    setButtonVisible(false);
    setShouldAnimate(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  const buttonStyle = {
    position: 'absolute' as 'absolute',
    left: window.innerWidth > 768 ? cursorPosition.x - buttonSize.width / 2 : `calc(50% - ${buttonSize.width / 2}px)`,
    top: window.innerWidth > 768 ? cursorPosition.y - buttonSize.height / 2 : `calc(50% - ${buttonSize.height / 2}px)`,
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="preloaderMobile"
          initial={{ top: '0' }}
          animate={shouldAnimate ? { top: '-100vh' } : { top: '0vh' }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: `url(${backgroundGif})`,
            backgroundSize: 'cover',
          }}
        >
          <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            animate={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `url(${backgroundGif})`,
              backgroundSize: 'cover',
            }}
          />

          <button ref={buttonRef} className='mobileButton' onClick={handleClick}>Explore</button>

          {buttonVisible && (
            <button
              ref={buttonRef}
              className="button"
              onClick={handleClick}
              style={buttonStyle}
            >
              explore
              <img src={cursorImage} alt="" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
