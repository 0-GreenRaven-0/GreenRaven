import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const About = () => {

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        end: "bottom bottom",
        scrub: 4,
        pin: true
      
      },
      ease: "power1.inOut"
    })

    timeline
    .to("#intro", { opacity: 0, y: -50, duration: 2 })
    .to("#gate-left", { x: "-100vw", duration: 4 })
    .to("#gate-right", { x: "100vw", duration: 4 }, "<")
    .from("#inner-content", { opacity: 0, y: 20, duration: 3 })
  })



  return (
    <div className='pb-10 relative min-h-screen ' id='about'>
      {/* Animated gate */}
      <h1 className='absolute top-70 -translate-x-1/2 left-1/2 -translate-y-1/2 text-white z-150 name' id='intro'>About Me</h1>
       <div id='gate-left' className='absolute left-0 w-[50vw] h-screen bg-green-700 z-100 left-door'/>
       <div id='gate-right' className='absolute right-0 w-[50vw] h-screen bg-green-900 z-100 right-door'/>
      {/* Inner content */}
        <div id='inner-content' className='flex-responsive relative from-zinc-500 pt-15 p-2 sm:pt-30 gap-5! md:px-5'>
          <img 
            loading='lazy' 
            className='w-120 rounded-2xl'
            alt='Matthew Hamdesh' 
            src='https://ik.imagekit.io/greenraven/Green%20Raven/matthew1.jpeg'
          />
          
          <div className='flex-cols'>
            <h1 className='text-green-500 special font-bold'>Hi! I'm Matthew Hamdesh</h1>
            <h2>Funnel Architect & Copywriter</h2>
            <p className='text-white'>I took my love for coding and my copywriting skills and combined them into a career where I help businesses increase revenue, build trust with their ideal audience, and stand out in the digital market.</p>
            <p className='text-white'>I love exploring different brands and businesses in the digital world and seeing the passion behind each one, hopping to be part of building their empires, leaving my mark while gaining knowledge about different niches and the value they bring.</p>
          </div>
        </div>
    </div>
  )
}

export default About