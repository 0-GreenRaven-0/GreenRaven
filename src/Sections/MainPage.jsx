import { useState, useEffect } from "react";
import SmokePortfolio from "../Utility/SmokePortfolio"
import Cards from "../Utility/Cards"


/* Sections */
import TheArsenal from "./TheArsenal"
import TheChronicle from "./TheChronicle"
import TheInvitation from "./TheInvitation"
import TheWitnesses from "./TheWitnesses"
import TheRaven from "./TheRaven"

const Welcome = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showSection, setShowSection] = useState(null);
  const [showBlackOverlay, setShowBlackOverlay] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleCardClick = (section) => {
    setIsTransitioning(true);
    setShowBlackOverlay(true);
    setSelectedSection(section);
  };

  useEffect(() => {
    if (isTransitioning) {
      // Wait for black overlay to fully fade in
      const timer1 = setTimeout(() => {
        setShowWelcome(false);
        setShowSection(selectedSection);
      }, 500);

      // Wait then fade out black overlay
      const timer2 = setTimeout(() => {
        setShowBlackOverlay(false);
        setIsTransitioning(false);
      }, 800);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isTransitioning, selectedSection]);

  const handleBackClick = () => {
    setIsTransitioning(true);
    setShowBlackOverlay(true);
    
    setTimeout(() => {
      setShowSection(null);
      setShowWelcome(true);
      setShowBlackOverlay(false);
      setIsTransitioning(false);
    }, 800);
  };

  const renderSection = () => {
    if (!showSection) return null;
    
    const commonProps = { onBack: handleBackClick };
    
    switch(showSection) {
      case 'TheArsenal': 
        return (
          <div className="h-screen w-screen">
            <TheArsenal {...commonProps} />
          </div>
        );
      case 'TheChronicle': 
        return (
          <div className="h-screen w-screen">
            <TheChronicle {...commonProps} />
          </div>
        );
      case 'TheInvitation': 
        return (
          <div className="h-screen w-screen">
            <TheInvitation {...commonProps} />
          </div>
        );
      case 'TheWitnesses': 
        return (
          <div className="h-screen w-screen">
            <TheWitnesses {...commonProps} />
          </div>
        );
      case 'TheRaven': 
        return (
          <div className="h-screen w-screen">
            <TheRaven {...commonProps} />
          </div>
        );
      default: 
        return null;
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Black Overlay for transition */}
      <div
        className={`fixed inset-0 bg-black z-[9999] transition-opacity duration-1000 ease-in-out ${
          showBlackOverlay ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Welcome Section */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          showWelcome ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="relative h-screen w-screen overflow-hidden">
          {/* Particle Background - BEHIND content */}
          <SmokePortfolio/>
          
          {/* Content - ABOVE particles */}
          <div className="relative z-100 flex flex-col justify-center items-center h-screen w-full gap-5 py-10">
            <h1 className="text-shadow-drop-center text-white">Pick a card and let's see what awaits you</h1>
            <Cards onCardClick={handleCardClick} />
          </div>
        </div>
      </div>

      {/* Selected Section */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          showSection ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {renderSection()}
      </div>
    </div>
  );
}

export default Welcome;