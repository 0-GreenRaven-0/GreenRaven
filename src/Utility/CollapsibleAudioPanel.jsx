import { useState } from "react";
import { FaMusic, FaVolumeUp, FaVolumeMute, FaChevronDown, FaChevronUp } from "react-icons/fa";

const CollapsibleAudioPanel = ({ sound }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [sfxEnabled, setSfxEnabled] = useState(true);

  return (
    <div className="fixed top-12 right-4 z-[9999]">
      {/* Collapsed State - Just Icons */}
      {!isOpen && (
        <div 
          onClick={() => setIsOpen(true)}
          className="flex gap-2 bg-black/25 p-3 rounded-lg cursor-pointer hover:bg-black/70 transition-all"
        >
          <FaMusic className={`text-xl ${musicEnabled ? 'text-green-400/15' : 'text-gray-500/15'}`} />
          {sfxEnabled ? (
            <FaVolumeUp className="text-xl text-green-400/15" />
          ) : (
            <FaVolumeMute className="text-xl text-gray-500/15" />
          )}
          <FaChevronDown className="text-xl text-white/60" />
        </div>
      )}

      {/* Expanded State - Full Panel */}
      {isOpen && (
        <div className="bg-black/80 backdrop-blur-md p-4 rounded-lg shadow-2xl border border-green-400/20">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-semibold text-sm">Audio Controls</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <FaChevronUp className="text-lg" />
            </button>
          </div>

          {/* Controls */}
          <div className="flex gap-6">
            {/* MUSIC TOGGLE */}
            <div className="flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  const next = !musicEnabled;
                  setMusicEnabled(next);

                  if (next) {
                    sound.enableMusic();
                    sound.playMusic(); // ← Added this line
                  } else {
                    sound.disableMusic();
                  }
                }}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  musicEnabled
                    ? "text-green-400 bg-green-400/20 hover:bg-green-400/30"
                    : "text-gray-500 bg-gray-500/10 hover:bg-gray-500/20"
                }`}
              >
                <FaMusic className="text-2xl" />
              </button>
              <span
                className={`font-medium text-xs ${
                  musicEnabled ? "text-green-400" : "text-gray-500"
                }`}
              >
                Music
              </span>
            </div>

            {/* SFX TOGGLE */}
            <div className="flex flex-col items-center gap-2">
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
                className={`p-3 rounded-lg transition-all duration-300 ${
                  sfxEnabled
                    ? "text-green-400 bg-green-400/20 hover:bg-green-400/30"
                    : "text-gray-500 bg-gray-500/10 hover:bg-gray-500/20"
                }`}
              >
                {sfxEnabled ? (
                  <FaVolumeUp className="text-2xl" />
                ) : (
                  <FaVolumeMute className="text-2xl" />
                )}
              </button>
              <span
                className={`font-medium text-xs ${
                  sfxEnabled ? "text-green-400" : "text-gray-500"
                }`}
              >
                Sound FX
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollapsibleAudioPanel;