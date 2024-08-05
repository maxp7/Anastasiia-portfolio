import React, { createContext, useContext, useState, ReactNode, useRef, useEffect } from 'react';
import sound from '../backgroundSound.wav';

interface SoundContextProps {
  audioEnabled: boolean;
  setAudioEnabled: (enabled: boolean) => void;
  playSound: () => void;
  stopSound: () => void;
}

const SoundContext = createContext<SoundContextProps | undefined>(undefined);

export const useSoundContext = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSoundContext must be used within a SoundProvider');
  }
  return context;
};

export const SoundProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioRef = useRef(new Audio(sound));
  
  // Включить повторение
  audioRef.current.loop = true;

  const playSound = () => {
    audioRef.current.play();
    setAudioEnabled(true);
  };

  const stopSound = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setAudioEnabled(false);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopSound();
      } else if (audioEnabled) {
        playSound();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [audioEnabled]);

  return (
    <SoundContext.Provider value={{ audioEnabled, setAudioEnabled, playSound, stopSound }}>
      {children}
    </SoundContext.Provider>
  );
};
