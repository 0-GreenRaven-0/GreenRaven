// AudioPanel.jsx
import { useState } from "react";
import { FaMusic, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useSound } from "../Utility/SoundContext";

const AudioPanel = () => {
  const sound = useSound();
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [sfxEnabled, setSfxEnabled] = useState(true);

  return (
    <div className="relative z-150 flex flex-col items-center gap-4 py-2">
      <div className="flex gap-8">
        {/* MUSIC TOGGLE */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <button
            type="button"
            onClick={() => {
              const next = !musicEnabled;
              setMusicEnabled(next);

              if (next) {
                sound.enableMusic();
                // Don't auto-play, let user start it manually if needed
                // Or if you want it to resume: sound.playMusic();
              } else {
                sound.disableMusic(); // This now properly stops the music
              }
            }}
            className={`p-4 md:p-6 xl:p-4 rounded-lg transition-all duration-300 cursor-pointer ${
              musicEnabled
                ? "text-green-400 bg-green-400/20 hover:bg-green-400/30"
                : "text-gray-500 bg-gray-500/10 hover:bg-gray-500/20"
            }`}
          >
            <FaMusic className="text-[28px] md:text-[50px] xl:text-[28px]" />
          </button>

          <span
            className={`font-medium text-sm md:text-3xl xl:text-sm ${
              musicEnabled ? "text-green-400" : "text-gray-500"
            }`}
          >
            Music
          </span>
        </div>

        {/* SFX TOGGLE */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <button
            type="button"
            onClick={() => {
              const next = !sfxEnabled;
              setSfxEnabled(next);

              if (next) {
                sound.enableSFX();
              } else {
                sound.disableSFX();
              }
            }}
            className={`p-4 md:p-6 xl:p-4 rounded-lg transition-all duration-300 cursor-pointer ${
              sfxEnabled
                ? "text-green-400 bg-green-400/20 hover:bg-green-400/30"
                : "text-gray-500 bg-gray-500/10 hover:bg-gray-500/20"
            }`}
          >
            {sfxEnabled ? (
              <FaVolumeUp className="text-[28px] md:text-[50px] xl:text-[28px]" />
            ) : (
              <FaVolumeMute className="text-[28px] md:text-[50px] xl:text-[28px]" />
            )}
          </button>

          <span
            className={`font-medium text-sm md:text-3xl xl:text-sm ${
              sfxEnabled ? "text-green-400" : "text-gray-500"
            }`}
          >
            Sound FX
          </span>
        </div>
      </div>
    </div>
  );
};

export default AudioPanel;