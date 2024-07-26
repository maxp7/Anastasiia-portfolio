// SoundContext.tsx
import React, { createContext, useContext, useRef } from 'react';
import sound from '../backgroundSound.wav';
interface SoundContextProps {
  playSound: () => void;
  stopSound: () => void;
  isPlaying: boolean;
}

const SoundContext = createContext<SoundContextProps | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef(new Audio(sound));
  audioRef.current.loop = true;

  const playSound = () => {
    audioRef.current.play();
  };

  const stopSound = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <SoundContext.Provider value={{ playSound, stopSound, isPlaying: !audioRef.current.paused }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundContext = () => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSoundContext must be used within a SoundProvider');
  }
  return context;
};
