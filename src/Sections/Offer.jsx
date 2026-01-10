import { useRef, useEffect } from "react"
import {FaEnvelope, FaCog, FaScroll} from 'react-icons/fa'

const Offer = () => {
  // Magic circle refs for each offer
  const magicCircle1Ref = useRef()
  const magicCircleOuter1Ref = useRef()
  const magicCircleInner1Ref = useRef()
  const magicSquare1_1Ref = useRef()
  const magicSquare1_2Ref = useRef()
  
  const magicCircle2Ref = useRef()
  const magicCircleOuter2Ref = useRef()
  const magicCircleInner2Ref = useRef()
  const magicSquare2_1Ref = useRef()
  const magicSquare2_2Ref = useRef()
  
  const magicCircle3Ref = useRef()
  const magicCircleOuter3Ref = useRef()
  const magicCircleInner3Ref = useRef()
  const magicSquare3_1Ref = useRef()
  const magicSquare3_2Ref = useRef()

  // ============================================
  // CENTRALIZED SIZE CONTROL
  // ============================================
  const circleConfig = {
    baseSize: 220,
    mdSize: 600,
    lgSize: 400,
    xlSize: 250,
    outerOffset: 20,
    innerOffset: 40,
    squareRatio: 0.706106,
  }

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

  useEffect(() => {
    // Add CSS animations class to all elements
    if (magicCircleOuter1Ref.current) magicCircleOuter1Ref.current.classList.add('spin-clockwise-15s')
    if (magicCircleInner1Ref.current) magicCircleInner1Ref.current.classList.add('spin-counter-20s')
    if (magicSquare1_1Ref.current) magicSquare1_1Ref.current.classList.add('spin-clockwise-25s')
    if (magicSquare1_2Ref.current) magicSquare1_2Ref.current.classList.add('spin-counter-30s')
    
    if (magicCircleOuter2Ref.current) magicCircleOuter2Ref.current.classList.add('spin-clockwise-15s')
    if (magicCircleInner2Ref.current) magicCircleInner2Ref.current.classList.add('spin-counter-20s')
    if (magicSquare2_1Ref.current) magicSquare2_1Ref.current.classList.add('spin-clockwise-25s')
    if (magicSquare2_2Ref.current) magicSquare2_2Ref.current.classList.add('spin-counter-30s')
    
    if (magicCircleOuter3Ref.current) magicCircleOuter3Ref.current.classList.add('spin-clockwise-15s')
    if (magicCircleInner3Ref.current) magicCircleInner3Ref.current.classList.add('spin-counter-20s')
    if (magicSquare3_1Ref.current) magicSquare3_1Ref.current.classList.add('spin-clockwise-25s')
    if (magicSquare3_2Ref.current) magicSquare3_2Ref.current.classList.add('spin-counter-30s')
  }, [])

  const baseSizes = calculateSizes(circleConfig.baseSize)

  const MagicCircle = ({ refs, color, icon: Icon }) => {
    const { magicCircleRef, magicCircleOuterRef, magicCircleInnerRef, magicSquare1Ref, magicSquare2Ref } = refs
    
    return (
      <div className="relative flex items-center justify-center" style={{ minWidth: `${baseSizes.circle}px`, minHeight: `${baseSizes.circle}px` }}>
      
        <div 
          ref={magicCircleRef}
          className="absolute border-4 rounded-full magic-circle"
          style={{
            width: `${baseSizes.circle}px`,
            height: `${baseSizes.circle}px`,
            borderColor: color.border,
            boxShadow: `0 0 10px ${color.glow},
                        0 0 20px ${color.glow},
                        0 0 30px ${color.glow},
                        0 0 10px ${color.glow} inset,
                        0 0 20px ${color.glow} inset`,
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
              borderColor: color.light,
              boxShadow: `0 0 5px ${color.glow},
                          0 0 10px ${color.glow},
                          0 0 5px ${color.glow} inset`,
              transform: 'rotate(0deg)'
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
              borderColor: color.light,
              transform: 'rotate(0deg)'
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
              borderColor: color.light,
              boxShadow: `0 0 10px ${color.glow},
                          0 0 20px ${color.glow},
                          0 0 30px ${color.glow},
                          0 0 10px ${color.glow} inset,
                          0 0 20px ${color.glow} inset`,
              transform: 'rotate(0deg)'
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
              borderColor: color.light,
              boxShadow: `0 0 10px ${color.glow},
                          0 0 20px ${color.glow},
                          0 0 30px ${color.glow},
                          0 0 10px ${color.glow} inset,
                          0 0 20px ${color.glow} inset`,
              transform: 'rotate(45deg)'
            }}
          ></div>
        </div>
        
        <div 
          className="absolute z-20 flex items-center justify-center"
          style={{
            color: color.glow,
            textShadow: `0 0 10px ${color.glow}, 0 0 20px ${color.glow}`,
          }}
        >
          <Icon className="offer-icon" size={64} />
        </div>
      </div>
    )
  }

  const offers = [
    {
      title: "Email writing & Marketing",
      description: "I go beyond writing emails to studying your business and audience, then creating campaigns that actually fit their needs. Plus, I optimize email deliverability so your messages don't just get sent, they get seen.",
      icon: FaEnvelope,
      color: {
        border: "#059669",
        glow: "#10b981",
        light: "#34d399"
      },
      refs: {
        magicCircleRef: magicCircle1Ref,
        magicCircleOuterRef: magicCircleOuter1Ref,
        magicCircleInnerRef: magicCircleInner1Ref,
        magicSquare1Ref: magicSquare1_1Ref,
        magicSquare2Ref: magicSquare1_2Ref
      }
    },
    {
      title: "Sales/Landing Pages Design & Copy",
      description: "I build custom sales and landing pages with perfect structure, powerful copy, and unique designs that make you stand out from competitors, all backed by a fully functional system.",
      icon: FaScroll,
      color: {
        border: "#1e40af",
        glow: "#3b82f6",
        light: "#60a5fa"
      },
      refs: {
        magicCircleRef: magicCircle2Ref,
        magicCircleOuterRef: magicCircleOuter2Ref,
        magicCircleInnerRef: magicCircleInner2Ref,
        magicSquare1Ref: magicSquare2_1Ref,
        magicSquare2Ref: magicSquare2_2Ref
      }
    },
    {
      title: "Email Systems & Automations",
      description: "I set up your email platform to work on autopilot. Automated sequences, smart tagging, cart recovery flows, and CRM workflows all engineered to nurture leads and drive conversions.",
      icon: FaCog,
      color: {
        border: "#7c3aed",
        glow: "#8b5cf6",
        light: "#a78bfa"
      },
      refs: {
        magicCircleRef: magicCircle3Ref,
        magicCircleOuterRef: magicCircleOuter3Ref,
        magicCircleInnerRef: magicCircleInner3Ref,
        magicSquare1Ref: magicSquare3_1Ref,
        magicSquare2Ref: magicSquare3_2Ref
      }
    }
  ]

  return (
    <div className='section relative text-white bg-[#131613] py-5' id="offer">
        <h1 className="special text-center py-5">My Abilities</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-12 p-6 rounded-lg py-12"
              style={{
                border: `2px solid ${offer.color.border}`,
                boxShadow: `0 0 20px ${offer.color.glow}`
              }}
            >
              <div className="flex-shrink-0">
                <MagicCircle refs={offer.refs} color={offer.color} icon={offer.icon} />
              </div>
              
              <div className="flex-1 sm:text-center">
                <h1 className="special offer-title mb-4" style={{ 
                  textShadow: `0 0 10px ${offer.color.glow}` 
                }}>
                  {offer.title}
                </h1>
                <p className="offer-desc">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spinClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spinCounter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes spinClockwiseFrom45 {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        
        .spin-clockwise-15s {
          animation: spinClockwise 15s linear infinite;
        }
        
        .spin-counter-20s {
          animation: spinCounter 20s linear infinite;
        }
        
        .spin-clockwise-25s {
          animation: spinClockwise 25s linear infinite;
        }
        
        .spin-counter-30s {
          animation: spinClockwiseFrom45 30s linear infinite;
        }
        
        @media (min-width: 768px) {
          .magic-circle {
            width: ${circleConfig.mdSize}px !important;
            height: ${circleConfig.mdSize}px !important;
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