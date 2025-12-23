import { createContext, useContext } from "react";
import { soundManager } from "./SoundManager";

const SoundContext = createContext(soundManager);

export const SoundProvider = ({ children }) => {
  return (
    <SoundContext.Provider value={soundManager}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
