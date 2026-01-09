import { useEffect, useRef, useState } from "react";

const Work = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPinned, setIsPinned] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const windowHeight = window.innerHeight;

      // Pin when section top reaches viewport top
      if (sectionTop <= 0 && rect.bottom > windowHeight) {
        setIsPinned(true);
        
        // Calculate scroll progress through the pinned section
        const scrolled = Math.abs(sectionTop);
        const maxScroll = rect.height - windowHeight;
        const progress = Math.min(scrolled / maxScroll, 1);
        setScrollProgress(progress);
      } else if (sectionTop > 0) {
        // Before pinning
        setIsPinned(false);
        setScrollProgress(0);
      } else {
        // After unpinning
        setIsPinned(false);
        setScrollProgress(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const card1Transform = {
    transform: `translateX(${scrollProgress * 160}vw) rotate(${scrollProgress * 20}deg)`,
  };

  return (
    <div 
      id="skills" 
      ref={sectionRef}
      className="section p-0 relative" 
      style={{ height: '160vh' }} // Tall section for scroll duration
    >
      <div 
        ref={contentRef}
        style={{ 
          position: isPinned ? 'fixed' : 'absolute',
          top: isPinned ? 0 : (scrollProgress === 1 ? 'auto' : 0),
          bottom: scrollProgress === 1 ? 0 : 'auto',
          left: 0,
          right: 0,
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        <div 
          className="card bg-green-900 text-white z-400 work-bg" 
          id="card1"
          style={{
            ...card1Transform,
            transition: 'none',
            willChange: 'transform'
          }}
        >
          <div>
            <h1 className="text-center">Projects I've done so far</h1>
          </div>
        </div>
        
        <div className="card bg-blue-950 text-white z-300 p1" id="card2">
          <div>
            <h1>Majd AbdulSalam's Dropshipping SAAs</h1>
            <br/>
          <p>
            This project involved building a complete lead qualification funnel for a dropshipping SaaS business. The work included creating a strategic landing page and setting up automated email sequences that nurture and score leads while ensuring only qualified, sales-ready prospects who could schedule a discovery call and purhcase the offer.
          </p>
          </div>
          <img 
            src="https://ik.imagekit.io/greenraven/Green%20Raven/Screenshot%202025-12-24%20194358.png?updatedAt=1766598334861" 
            className="rotate-6 card-img"
            alt="Project screenshot"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;