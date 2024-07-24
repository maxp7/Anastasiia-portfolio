import React, { useState, useEffect } from 'react';
import '../Styles/Preloader.css';
import useSound from 'use-sound';
import sound from '../backgroundSound.wav';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onExploreClick: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onExploreClick }) => {
  // Настроим параметр loop на true
  const [play, { stop }] = useSound(sound, { loop: true });
  const [isVisible, setIsVisible] = useState(true); // Состояние видимости preloader
  const [shouldAnimate, setShouldAnimate] = useState(false); // Состояние начала анимации
  const [buttonVisible, setButtonVisible] = useState(true); // Состояние видимости кнопки
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 }); // Состояние для хранения координат курсора

  useEffect(() => {
    // Обработчик для отслеживания положения курсора
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX - 100, y: event.clientY - 110 });
    };

    // Добавляем слушатель события mousemove
    window.addEventListener('mousemove', handleMouseMove);

    // Удаляем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    play();
    onExploreClick();
    setButtonVisible(false); // Скрыть кнопку немедленно
    setShouldAnimate(true); // Запустить анимацию

    // Устанавливаем видимость preloader в false после завершения анимации
    setTimeout(() => {
      setIsVisible(false);
    }, 1); // Длительность анимации
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          animate={shouldAnimate ? { opacity: 0 } : { opacity: 1 }} // Запускаем анимацию
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }} // Длительность анимации
        >
          {buttonVisible && (
            <button
              className="button"
              onClick={handleClick}
              style={{ position: 'absolute', left: cursorPosition.x, top: cursorPosition.y }}
            >
              Explore
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
