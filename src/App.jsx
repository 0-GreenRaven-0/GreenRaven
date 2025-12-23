import { useState, useEffect } from "react";
import MainPage from "./Sections/MainPage";
import Intro from "./Sections/Intro";
import { SoundProvider, useSound } from "./Utility/SoundContext";

const AppContent = () => {
  const sound = useSound();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showBlackOverlay, setShowBlackOverlay] = useState(false);

  const handleEnterClick = () => {
    sound.playSFX("buttonClick");
    sound.playMusic(); // ← Start music on Enter
    setIsTransitioning(true);
    setShowBlackOverlay(true);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer1 = setTimeout(() => {
        setShowIntro(false);
        setShowMainPage(true);
      }, 1000);

      const timer2 = setTimeout(() => {
        setShowBlackOverlay(false);
        setIsTransitioning(false);
      }, 1500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isTransitioning]);

  const EnterButton = ({ onClick }) => (
    <div className="relative z-150">
      <button className="enter-button md:pt-40 xl:pt-0 text-7xl xl:text-5xl" onClick={onClick}>
        Enter
      </button>
    </div>
  );

  return (
    <div className="app-container relative min-h-screen w-full overflow-hidden">
      <div
        className={`fixed inset-0 bg-black z-[9999] transition-opacity duration-1000 ease-in-out ${
          showBlackOverlay ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          showIntro ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: showIntro ? 1 : -1 }}
      >
        {showIntro && <Intro button={<EnterButton onClick={handleEnterClick} />} />}
      </div>

      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          showMainPage ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: showMainPage ? 1 : -1 }}
      >
        {showMainPage && <MainPage />}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <SoundProvider>
      <AppContent />
    </SoundProvider>
  );
};

export default App;