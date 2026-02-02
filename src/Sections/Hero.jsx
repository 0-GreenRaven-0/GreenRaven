import { useState, useEffect } from 'react'


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger fade-in after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Black overlay that fades out */}
      <div 
        className={`fixed inset-0 bg-black z-[9999] transition-opacity duration-1000 pointer-events-none ${
          isVisible ? 'opacity-0' : 'opacity-100'
        }`}
      />

      <div className="section relative z-100 flex-responsive text-center lg:text-left">
       
        <div className="lg:flex-1">
          <img loading="eager" src="https://ik.imagekit.io/greenraven/Green%20Raven/Green%20Raven.png?updatedAt=1766511556233" className="logo-img m-auto"/>
        </div>

        <div className="flex-cols lg:flex-2">
          <h1 className="name text-shadow-drop-green lg:text-left">Matthew Hamdesh</h1>
          <h2 className="special text-white">Revenue Systems Architect</h2>
          <p className="special text-white font-light">Every great product needs a conquest strategy. I architect complete revenue systems for digital businesses. Precise, powerful, and built to dominate.</p>
          <br/>
          <div>
            <h3 className="special pb-4 text-white">
              Let's discuss how we can strengthen your offer
            </h3>
            <button className="cta-button special" onClick={() => {window.open("https://calendly.com/greenraven1000/business-call")}}>
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero