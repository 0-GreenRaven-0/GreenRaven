import {DraggableCardBody, DraggableCardContainer} from '../utility/DraggableCardBody';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const About = () => {

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        pin: true
      
      },
      ease: "power1.inOut"
    })

    timeline
    .to("#intro", { opacity: 0, y: -50, duration: 1 })
    .to("#gate-left", { x: "-100vw", duration: 2 })
    .to("#gate-right", { x: "100vw", duration: 2 }, "<")
    .from("#inner-content", { opacity: 0, y: 20, duration: 1.5 })
  })

    const items = [
    {
      title: "Me in the Gym",
      image:
        "https://ik.imagekit.io/greenraven/Green%20Raven/My%20Pictures/WhatsApp%20Image%202025-12-22%20at%2014.44.53_8f6fd2f9.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Please Ignore",
      image:
        "https://ik.imagekit.io/greenraven/Green%20Raven/My%20Pictures/WhatsApp%20Image%202025-12-22%20at%2014.44.57_8265636d.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Taekwondo",
      image:
        "https://ik.imagekit.io/greenraven/Green%20Raven/My%20Pictures/WhatsApp%20Image%202025-12-22%20at%2014.44.55_e3469993.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "My Pet",
      image:
        "https://ik.imagekit.io/greenraven/Green%20Raven/My%20Pictures/WhatsApp%20Image%202025-12-22%20at%2014.44.57_ec1997e0.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
  ];

  return (
    <div className='section relative text-white' id='about'>
      {/* Animated gate */}
      <h1 className='absolute top-70 -translate-x-1/2 left-1/2 -translate-y-1/2 text-white z-150 name' id='intro'>About Me</h1>
       <div id='gate-left' className='absolute left-0 w-[50vw] h-screen bg-green-700 z-100 left-door'/>
       <div id='gate-right' className='absolute right-0 w-[50vw] h-screen bg-green-900 z-100 right-door'/>
      {/* Inner content */}
        <div id='inner-content' className='flex-responsive relative from-zinc-500 pt-15 sm:pt-30'>
          <div className='lg:w-[70%]'>
            <h2>Hi! My name is <span className='text-primary'>Matthew Hamdesh</span> </h2>
            <br/>
          <p>
            I wield copywriting as a strategic weapon and coding as a creative forge. This combination allows me to build complete marketing systems from the ground up—crafting messages that resonate deeply while engineering the unique experiences that make them unforgettable.
          </p>

          <br/>

          <p>
            My process begins with understanding your territory: studying your offer, your audience, and your competitors. Then I forge campaigns that stand apart, where every word is chosen to connect and every interaction is designed to convert.
          </p>

          <br/>

          <p>
            I also build and configure CRM systems to manage your entire funnel from the ground up. This ensures seamless automation and maximum email deliverability, so your message always reaches its intended audience.
          </p>
            <br/>
            <h3>Drag and move the images</h3>
          </div>

           <DraggableCardContainer className="relative z-10 flex h-screen w-full items-center justify-center overflow-clip">
             {items.map((item, index) => (
               <DraggableCardBody key={index} className={item.className}>
                 <img
                   src={item.image}
                   alt={item.title}
                   className="pointer-events-none relative z-10 h-40 w-40 sm:h-100 sm:w-100 lg:h-60 object-cover"
                 />
                 <h3 className="mt-4 text-center text-lg sm:text-4xl lg:text-xl font-bold text-white">
                   {item.title}
                 </h3>
               </DraggableCardBody>
             ))}
           </DraggableCardContainer>
        </div>
    </div>
  )
}

export default About
