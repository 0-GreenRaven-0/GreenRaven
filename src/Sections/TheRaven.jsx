import { useState } from 'react';
import ParticleBackground from '../Utility/ParticleBackground'
import { DraggableCardBody, DraggableCardContainer } from '../Utility/DraggableCardBody'
import {FaInstagram} from 'react-icons/fa';
import BackButton from '../Utility/BackButton'

const TheRaven = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('bio');

  const items = [
    {
      title: "Me in the Gym",
      image:
        "https://ik.imagekit.io/greenraven/Green%20Raven/My%20Pictures/WhatsApp%20Image%202025-12-22%20at%2014.44.53_8f6fd2f9.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "My Dad",
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
      title: "My Son",
      image:
        "https://ik.imagekit.io/greenraven/Green%20Raven/My%20Pictures/WhatsApp%20Image%202025-12-22%20at%2014.44.57_ec1997e0.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Me and my son",
      image:
        "https://ik.imagekit.io/greenraven/Green%20Raven/My%20Pictures/WhatsApp%20Image%202025-12-22%20at%2014.44.56_fbf7794d.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
  ];

  return (
    <div className='section relative'>
      <ParticleBackground/>
      <div className='relative'>
        <div className='flex justify-between'>
       <BackButton onBack={onBack}/>
                
         <a 
           href="https://www.instagram.com/matthew_hamdesh?utm_source=qr&igsh=bTRzb29oaTN2aXNw" 
           target="_blank" 
           rel="noopener noreferrer"
           className='flex gap-2 justify-center cursor-pointer hover:text-white transition-all duration-200 items-center text-2xl text-black font-bold'
         >
           <FaInstagram size={50} color='lime'/>
         </a>
        </div>
       <div className='flex justify-between items-center'>

         
         <div className='flex flex-col justify-center items-center w-full gap-1 text-center'>
           <h1 className='my-name text-shadow-drop-center'>Matthew Hamdesh</h1>

           <div className="flex justify-center items-center gap-6 mt-2">
             <button
               onClick={() => setActiveSection('bio')}
               className="relative text-xl font-bold text-white px-4 py-1 transition-all duration-200 cursor-pointer"
             >
               Bio
               <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-lime-500 transition-all duration-200 ${activeSection === 'bio' ? 'opacity-100' : 'opacity-0'}`}></span>
               <span className={`absolute -bottom-0.5 left-0 w-full h-[2px] bg-lime-300 blur-[1px] transition-all duration-200 ${activeSection === 'bio' ? 'opacity-70' : 'opacity-0'}`}></span>
             </button>
             
             <button
               onClick={() => setActiveSection('images')}
               className="relative text-xl font-bold text-white px-4 py-1 transition-all duration-200 cursor-pointer"
             >
               Images
               <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-lime-500 transition-all duration-200 ${activeSection === 'images' ? 'opacity-100' : 'opacity-0'}`}></span>
               <span className={`absolute -bottom-0.5 left-0 w-full h-[2px] bg-lime-300 blur-[1px] transition-all duration-200 ${activeSection === 'images' ? 'opacity-70' : 'opacity-0'}`}></span>
             </button>
           </div>
         </div>

       </div>

       {/* Sections Container */}
       <div className="relative mt-8">
         {/* Bio Section */}
         <div className={`transition-all duration-300 ${
           activeSection === 'bio' 
             ? 'opacity-100 visible max-h-[1000px]' 
             : 'opacity-0 invisible max-h-0 overflow-hidden'
         }`}>
           <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-lime-500/20">
             <div className="text-white">
               {/* Add your bio content here */}
               <h2>Your humble Green Raven, at your service!</h2>
               <br/>
               <h3>I built this interactive portfolio, i hope you like it!</h3>
               <br/>
               <p>I'm a 24 years old guy, i love the color green if you couldn't tell already XD, fond of ravens due to their intelligence, a red belt taekwondo practitioner (next year I'll be black :D) and won a first place in a taekwondo tournament! I listen to Kpop and metal most of the time and I love programming, in fact i wanted to become a game developer and bring all my ideas into life but this dream had to be delayed for now. I chose copywriting because i do enjoy writing and interacting with people on the internet, so i combined my copywriting skills with my web development skills to become a all in one conversion copywriter who write, code, build systems, help people increase their sales through email marketing and unique visuals</p>
             </div>
           </div>
         </div>

         {/* Images Section */}
         <div className={`transition-all duration-300 ${
           activeSection === 'images' 
             ? 'opacity-100 visible' 
             : 'opacity-0 invisible absolute top-0 left-0 w-full'
         }`}>
           <DraggableCardContainer className="relative z-10 flex h-screen w-full items-center justify-center overflow-clip">
             {items.map((item, index) => (
               <DraggableCardBody key={index} className={item.className}>
                 <img
                   src={item.image}
                   alt={item.title}
                   className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                 />
                 <h3 className="mt-4 text-center text-2xl font-bold text-white">
                   {item.title}
                 </h3>
               </DraggableCardBody>
             ))}
           </DraggableCardContainer>
         </div>
       </div>
      </div>
    </div>
  )
}

export default TheRaven