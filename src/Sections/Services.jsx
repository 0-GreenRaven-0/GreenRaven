import { useEffect, useRef, useState } from 'react'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const sectionRef = useRef(null)
  const fullText = "From copy that cuts through noise to complete systems that dominate"

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      let index = 0
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index))
          index++
        } else {
          clearInterval(timer)
        }
      }, 20) // Faster typing speed (20ms per character)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  return (
    <div ref={sectionRef} className='section bg-light-bg p-5'>
      <div className='h-40 lg:h-28'>
        <h1 className='special text-white flex-1 '>
        {displayedText}
        <span className={`${isVisible && displayedText.length < fullText.length ? 'animate-pulse' : 'opacity-0'}`}>|</span>
      </h1> 
      </div>

      <br/>
      <div className="flex-responsive gap-10!">
        <div 
          className={`flex-1 transition-all duration-[1500ms] delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <p>Marketing an offer isn't just writing a few ads and hoping they work. It requires a complete system: landing pages that convert, email sequences that nurture, sales pages that close, and copy that actually connects with your audience at every step.</p>
          <br/>
          <p>That's what I build. I study your offer, research your audience across multiple platforms, analyze what your competitors are doing, then architect the complete campaign from sales & landing pages, ad scripts, engagement content, email marketing, and ongoing optimization. Everything connected. Everything engineered to convert.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 flex-1">
          {/* First row - 1 column */}
          <div>
            <img 
              className={`w-120 rounded-2xl ml-10 transition-all duration-[1500ms] delay-500 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
              loading="lazy" 
              alt="img-1" 
              src="https://ik.imagekit.io/greenraven/Green%20Raven/Screenshot%202026-01-28%20141511.png"
            />
          </div>
          
          {/* Second row - 2 columns */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              className={`w-80 rounded-2xl transition-all duration-[1500ms] delay-700 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
              loading="lazy" 
              alt="img-2" 
              src="https://ik.imagekit.io/greenraven/Green%20Raven/Screenshot%202026-01-28.png?updatedAt=1769680037359"
            />
            <img 
              className={`w-60 rounded-2xl transition-all duration-[1500ms] delay-[900ms] ${
                isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
              loading="lazy" 
              alt="img-3" 
              src="https://ik.imagekit.io/greenraven/Green%20Raven/laptop.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services