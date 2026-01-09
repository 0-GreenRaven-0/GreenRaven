import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import {FaEnvelope, FaCog, FaScroll} from 'react-icons/fa'


const Offer = () => {
  const videoRef = useRef()
  const containerRef = useRef()
  const section1Ref = useRef()
  const section2Ref = useRef()
  const section3Ref = useRef()
  

 

  // Magic circle refs
  const magicCircleRef = useRef()
  const magicCircleOuterRef = useRef()
  const magicCircleInnerRef = useRef()
  const magicSquare1Ref = useRef()
  const magicSquare2Ref = useRef()
  
  // Icon refs for each section
  const icon1Ref = useRef()
  const icon2Ref = useRef()
  const icon3Ref = useRef()

  // ============================================
  // CENTRALIZED SIZE CONTROL - CHANGE THESE VALUES
  // ============================================
  const circleConfig = {
    // Base size (mobile)
    baseSize: 250,
    // Responsive sizes (Tailwind breakpoints)
    mdSize: 600,
    lgSize: 500,
    xlSize: 300,
    
    // Icon size - CHANGE THIS to scale icons (pixels)
 // Simple pixel value, easy to change
    
    // Proportions (don't change these)
    outerOffset: 20,
    innerOffset: 40,
    squareRatio: 0.706106,
  }

  // Calculate all derived sizes
  const calculateSizes = (circleSize) => {
    return {
      circle: circleSize,
      outer: circleSize + circleConfig.outerOffset,
      inner: circleSize - circleConfig.innerOffset,
      square: circleSize * circleConfig.squareRatio,
      margin: circleSize / 2,
      squareMargin: (circleSize - (circleSize * circleConfig.squareRatio)) / 2,
      outerMargin: circleConfig.outerOffset / 2,
      innerMargin: circleConfig.innerOffset / 2,
    }
  }

  useGSAP(() => {
    const video = videoRef.current
    let master;

    video.onloadedmetadata = () => {
      const scrollDistance = 3000
      
      master = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}vh`,
          scrub: 3,
          pin: true,
          anticipatePin: 1,
          id: "offer-section",
          onEnterBack: () => {
            console.log("Scrolled back into Offer section");
          },
          onLeaveBack: () => {
            console.log("Scrolled out of Offer section (backwards)");
          }
        }
      })
      
      master.to("#initial-title", 
        { opacity: 0 },
        0
      )
      
      master.to(video, { 
        currentTime: video.duration,
        ease: "none",
        immediateRender: true
      }, 0)
      
      master.fromTo(magicCircleRef.current, 
        { 
          opacity: 0,
          scale: 0.5,
          rotation: -180,
          borderColor: "#059669",
          boxShadow: `0 0 10px #10b981,
                      0 0 20px #10b981,
                      0 0 30px #10b981,
                      0 0 10px #10b981 inset,
                      0 0 20px #10b981 inset`
        }, 
        { 
          opacity: 1,
          scale: 1,
          rotation: 0,
          ease: "back.out(1.7)"
        }, 
        0.4
      )
      
      master.call(() => {
        gsap.to(magicCircleOuterRef.current, {
          rotation: 360,
          duration: 15,
          repeat: -1,
          ease: "none"
        })
        
        gsap.to(magicCircleInnerRef.current, {
          rotation: -360,
          duration: 20,
          repeat: -1,
          ease: "none"
        })
        
        gsap.to(magicSquare1Ref.current, {
          rotation: 360,
          duration: 25,
          repeat: -1,
          ease: "none"
        })
        
        gsap.to(magicSquare2Ref.current, {
          rotation: -360,
          duration: 30,
          repeat: -1,
          ease: "none"
        })
      }, null, 0.4)
      
      // SECTION 1
      master.to(icon1Ref.current, {
        opacity: 1,
        color: "#10b981",
        ease: "power2.out",
        duration: 0.3,
        immediateRender: false
      }, 0.45)
      
      master.fromTo("#o-1", 
        { opacity: 0 }, 
        { opacity: 1 }, 
        0.6
      )
      
      master.to("#o-1", 
        { opacity: 0 },
        0.85
      )
      
      master.to(icon1Ref.current, {
        opacity: 0,
        ease: "power2.in",
        duration: 0.3
      }, 0.85)
      
      // SECTION 2
      master.fromTo("#o-2", 
        { opacity: 0 }, 
        { opacity: 1 }, 
        1.25
      )
      
      master.to(icon2Ref.current, {
        opacity: 1,
        color: "#3b82f6",
        ease: "power2.out",
        duration: 0.3,
        immediateRender: false
      }, 1.25)
      
      master.to(magicCircleRef.current, {
        borderColor: "#1e40af",
        boxShadow: `0 0 10px #3b82f6,
                    0 0 20px #3b82f6,
                    0 0 30px #3b82f6,
                    0 0 10px #3b82f6 inset,
                    0 0 20px #3b82f6 inset`,
        ease: "power2.out",
        immediateRender: false,
        overwrite: "auto"
      }, 1.25)
      
      master.to(magicCircleOuterRef.current, {
        borderColor: "#60a5fa",
        boxShadow: `0 0 5px #3b82f6,
                    0 0 10px #3b82f6,
                    0 0 5px #3b82f6 inset`,
        ease: "power2.out",
        immediateRender: false,
        overwrite: "auto"
      }, 1.25)
      
      master.to([magicSquare1Ref.current, magicSquare2Ref.current], {
        borderColor: "#60a5fa",
        boxShadow: `0 0 10px #3b82f6,
                    0 0 20px #3b82f6,
                    0 0 30px #3b82f6,
                    0 0 10px #3b82f6 inset,
                    0 0 20px #3b82f6 inset`,
        ease: "power2.out",
        immediateRender: false,
        overwrite: "auto"
      }, 1.25)
      
      master.to("#o-2", 
        { opacity: 0 },
        1.55
      )
      
      master.to(icon2Ref.current, {
        opacity: 0,
        ease: "power2.in",
        duration: 0.3
      }, 1.55)
      
      // SECTION 3
      master.fromTo("#o-3", 
        { opacity: 0 }, 
        { opacity: 1 }, 
        1.95
      )
      
      master.to(icon3Ref.current, {
        opacity: 1,
        color: "#8b5cf6",
        ease: "power2.out",
        duration: 0.3,
        immediateRender: false
      }, 1.95)
      
      master.to(magicCircleRef.current, {
        borderColor: "#7c3aed",
        boxShadow: `0 0 10px #8b5cf6,
                    0 0 20px #8b5cf6,
                    0 0 30px #8b5cf6,
                    0 0 10px #8b5cf6 inset,
                    0 0 20px #8b5cf6 inset`,
        ease: "power2.out",
        immediateRender: false,
        overwrite: "auto"
      }, 1.95)
      
      master.to(magicCircleOuterRef.current, {
        borderColor: "#a78bfa",
        boxShadow: `0 0 5px #8b5cf6,
                    0 0 10px #8b5cf6,
                    0 0 5px #8b5cf6 inset`,
        ease: "power2.out",
        immediateRender: false,
        overwrite: "auto"
      }, 1.95)
      
      master.to([magicSquare1Ref.current, magicSquare2Ref.current], {
        borderColor: "#a78bfa",
        boxShadow: `0 0 10px #8b5cf6,
                    0 0 20px #8b5cf6,
                    0 0 30px #8b5cf6,
                    0 0 10px #8b5cf6 inset,
                    0 0 20px #8b5cf6 inset`,
        ease: "power2.out",
        immediateRender: false,
        overwrite: "auto"
      }, 1.95)
      
      master.to(containerRef.current, {
        backgroundColor: "#000000",
        ease: "power2.out",
        duration: 0.5
      }, 2.0)
      
      setTimeout(() => {
        if (window.ScrollTrigger) {
          window.ScrollTrigger.refresh();
          console.log("📐 ScrollTrigger refreshed for Offer section");
        }
      }, 200);
    }
    
    return () => {
      if (master) {
        master.kill();
      }
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(st => {
          if (st.vars.id === "offer-section") st.kill();
        });
      }
    };
  }, [])

  const baseSizes = calculateSizes(circleConfig.baseSize)

  return (
    <div className='section relative text-white' id="offer" ref={containerRef} style={{ height: '100vh' }}>
      <video 
        className="pt-50 sm:w-190 lg:w-120 sm:ml-30 sm:pt-90 lg:ml-[32%] lg:pt-35"
        src='spellbook.mp4'
        ref={videoRef}
        playsInline
        preload="auto"
        muted
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 id="initial-title" className="pb-70 sm:pb-200 lg:pb-80 special text-center">Keep Scrolling to open the book</h2>
      </div>
      
      <div ref={section1Ref} className="absolute inset-0">
        <div className="relative w-full h-full">
          <div 
            ref={magicCircleRef}
            className="absolute border-4 rounded-full magic-circle z-10"
            style={{
              width: `${baseSizes.circle}px`,
              height: `${baseSizes.circle}px`,
              borderColor: "#059669",
              boxShadow: `0 0 10px #10b981,
                          0 0 20px #10b981,
                          0 0 30px #10b981,
                          0 0 10px #10b981 inset,
                          0 0 20px #10b981 inset`,
              opacity: 0,
              transform: "scale(0.5) rotate(-180deg)",
              top: "50%",
              left: "50%",
              marginTop: `-${baseSizes.margin}px`,
              marginLeft: `-${baseSizes.margin}px`,
              transformOrigin: "center center"
            }}
          >
            <div 
              ref={magicCircleOuterRef}
              className="absolute border-4 border-dashed rounded-full magic-circle-outer"
              style={{
                width: `${baseSizes.outer}px`,
                height: `${baseSizes.outer}px`,
                top: `-${baseSizes.outerMargin}px`,
                left: `-${baseSizes.outerMargin}px`,
                borderColor: "#34d399",
                boxShadow: `0 0 5px #10b981,
                            0 0 10px #10b981,
                            0 0 5px #10b981 inset`
              }}
            ></div>
            
            <div 
              ref={magicCircleInnerRef}
              className="absolute border-4 rounded-full magic-circle-inner"
              style={{
                width: `${baseSizes.inner}px`,
                height: `${baseSizes.inner}px`,
                top: `${baseSizes.innerMargin}px`,
                left: `${baseSizes.innerMargin}px`,
                borderColor: "#34d399"
              }}
            ></div>
            
            <div 
              ref={magicSquare1Ref}
              className="absolute border-4 rounded-lg magic-square"
              style={{
                width: `${baseSizes.square}px`,
                height: `${baseSizes.square}px`,
                top: `${baseSizes.squareMargin}px`,
                left: `${baseSizes.squareMargin}px`,
                borderColor: "#34d399",
                boxShadow: `0 0 10px #10b981,
                            0 0 20px #10b981,
                            0 0 30px #10b981,
                            0 0 10px #10b981 inset,
                            0 0 20px #10b981 inset`
              }}
            ></div>
            
            <div 
              ref={magicSquare2Ref}
              className="absolute border-4 rounded-lg magic-square"
              style={{
                width: `${baseSizes.square}px`,
                height: `${baseSizes.square}px`,
                top: `${baseSizes.squareMargin}px`,
                left: `${baseSizes.squareMargin}px`,
                transform: "rotate(45deg)",
                borderColor: "#34d399",
                boxShadow: `0 0 10px #10b981,
                            0 0 20px #10b981,
                            0 0 30px #10b981,
                            0 0 10px #10b981 inset,
                            0 0 20px #10b981 inset`
              }}
            ></div>
          </div>
          
          {/* Icons - Now using flexbox for perfect centering */}
          <div 
            ref={icon1Ref}
            className="absolute z-20 flex items-center justify-center"
            style={{
              opacity: 0,
              color: "#10b981",
              textShadow: "0 0 10px currentColor, 0 0 20px currentColor",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none"
            }}
          >
            <FaEnvelope className="offer-icon" />
          </div>
          
          <div 
            ref={icon2Ref}
            className="absolute z-20 flex items-center justify-center"
            style={{
              opacity: 0,
              color: "#3b82f6",
              textShadow: "0 0 10px currentColor, 0 0 20px currentColor",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none"
            }}
          >
            <FaScroll className="offer-icon" />
          </div>
          
          <div 
            ref={icon3Ref}
            className="absolute z-20 flex items-center justify-center"
            style={{
              opacity: 0,
              color: "#8b5cf6",
              textShadow: "0 0 10px currentColor, 0 0 20px currentColor",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none"
            }}
          >
            <FaCog className="offer-icon" />
          </div>
        </div>
      </div>

      <div ref={section1Ref} className="absolute inset-0 flex items-center justify-center">
        <div id="o-1" className="book-section z-30" style={{ opacity: 0 }}>
          <h1 className="text-shadow-drop-green text-center special offer-title">Email writing & Marketing</h1>
          <p className="pb-10 offer-desc"> I go beyond writing emails to studying your business and audience, then creating campaigns that actually fit their needs. Plus, I optimize email deliverability so your messages don't just get sent, they get seen.</p>
        </div>
      </div>
      
      <div ref={section2Ref} className="absolute inset-0 flex items-center justify-center">
         <div id="o-2" className="book-section z-30" style={{ opacity: 0 }}>
          <h1 className="text-shadow-drop-blue text-center special offer-title">Sales/Landing Pages Design & Copy</h1>
          <p className="offer-desc"> I build custom sales and landing pages with perfect structure, powerful copy, and unique designs that make you stand out from competitors, all backed by a fully functional system.</p>
        </div>
      </div>
      
      <div ref={section3Ref} className="absolute inset-0 flex items-center justify-center">
        <div id="o-3" className="book-section z-30" style={{ opacity: 0 }}>
          <h1 className="text-shadow-drop-purple text-center special offer-title">Email Systems & Automations</h1>
          <p className="offer-desc">
            I set up your email platform to work on autopilot. Automated sequences, smart tagging, cart recovery flows, and CRM workflows all engineered to nurture leads and drive conversions.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .magic-circle {
            width: ${circleConfig.mdSize}px !important;
            height: ${circleConfig.mdSize}px !important;
            margin-top: -${circleConfig.mdSize/2}px !important;
            margin-left: -${circleConfig.mdSize/2}px !important;
          }
          .magic-circle-outer {
            width: ${circleConfig.mdSize + circleConfig.outerOffset}px !important;
            height: ${circleConfig.mdSize + circleConfig.outerOffset}px !important;
            top: -${circleConfig.outerOffset/2}px !important;
            left: -${circleConfig.outerOffset/2}px !important;
          }
          .magic-circle-inner {
            width: ${circleConfig.mdSize - circleConfig.innerOffset}px !important;
            height: ${circleConfig.mdSize - circleConfig.innerOffset}px !important;
            top: ${circleConfig.innerOffset/2}px !important;
            left: ${circleConfig.innerOffset/2}px !important;
          }
          .magic-square {
            width: ${circleConfig.mdSize * circleConfig.squareRatio}px !important;
            height: ${circleConfig.mdSize * circleConfig.squareRatio}px !important;
            top: ${(circleConfig.mdSize - (circleConfig.mdSize * circleConfig.squareRatio))/2}px !important;
            left: ${(circleConfig.mdSize - (circleConfig.mdSize * circleConfig.squareRatio))/2}px !important;
          }
        }
        
        @media (min-width: 1024px) {
          .magic-circle {
            width: ${circleConfig.lgSize}px !important;
            height: ${circleConfig.lgSize}px !important;
            margin-top: -${circleConfig.lgSize/2}px !important;
            margin-left: -${circleConfig.lgSize/2}px !important;
          }
          .magic-circle-outer {
            width: ${circleConfig.lgSize + circleConfig.outerOffset}px !important;
            height: ${circleConfig.lgSize + circleConfig.outerOffset}px !important;
            top: -${circleConfig.outerOffset/2}px !important;
            left: -${circleConfig.outerOffset/2}px !important;
          }
          .magic-circle-inner {
            width: ${circleConfig.lgSize - circleConfig.innerOffset}px !important;
            height: ${circleConfig.lgSize - circleConfig.innerOffset}px !important;
            top: ${circleConfig.innerOffset/2}px !important;
            left: ${circleConfig.innerOffset/2}px !important;
          }
          .magic-square {
            width: ${circleConfig.lgSize * circleConfig.squareRatio}px !important;
            height: ${circleConfig.lgSize * circleConfig.squareRatio}px !important;
            top: ${(circleConfig.lgSize - (circleConfig.lgSize * circleConfig.squareRatio))/2}px !important;
            left: ${(circleConfig.lgSize - (circleConfig.lgSize * circleConfig.squareRatio))/2}px !important;
          }
        }
        
        @media (min-width: 1280px) {
          .magic-circle {
            width: ${circleConfig.xlSize}px !important;
            height: ${circleConfig.xlSize}px !important;
            margin-top: -${circleConfig.xlSize/2}px !important;
            margin-left: -${circleConfig.xlSize/2}px !important;
          }
          .magic-circle-outer {
            width: ${circleConfig.xlSize + circleConfig.outerOffset}px !important;
            height: ${circleConfig.xlSize + circleConfig.outerOffset}px !important;
            top: -${circleConfig.outerOffset/2}px !important;
            left: -${circleConfig.outerOffset/2}px !important;
          }
          .magic-circle-inner {
            width: ${circleConfig.xlSize - circleConfig.innerOffset}px !important;
            height: ${circleConfig.xlSize - circleConfig.innerOffset}px !important;
            top: ${circleConfig.innerOffset/2}px !important;
            left: ${circleConfig.innerOffset/2}px !important;
          }
          .magic-square {
            width: ${circleConfig.xlSize * circleConfig.squareRatio}px !important;
            height: ${circleConfig.xlSize * circleConfig.squareRatio}px !important;
            top: ${(circleConfig.xlSize - (circleConfig.xlSize * circleConfig.squareRatio))/2}px !important;
            left: ${(circleConfig.xlSize - (circleConfig.xlSize * circleConfig.squareRatio))/2}px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Offer