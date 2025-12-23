import React from 'react';
import { Vortex } from '../Utility/VortexProps';
import { FaEnvelope, FaFileCode, FaBullhorn, FaCogs } from 'react-icons/fa';
import BackButton from '../Utility/BackButton';

const TheArsenal = ({ onBack }) => {
  const services = [
    {
      id: 1,
      icon: FaEnvelope,
      title: "Email Marketing",
      description: "Emails and sequences that turn leads into customers and build trust with your audience.",
    },
    {
      id: 2,
      icon: FaFileCode,
      title: "Landing Pages & Sales Pages",
      description: "High converting pages with copy and design that make your brand stand out.",
    },
    {
      id: 3,
      icon: FaBullhorn,
      title: "Ad Copy & Ad Scripts",
      description: "Persuasive ad copy and scroll stopping scripts that grab attention.",
    },
    {
      id: 4,
      icon: FaCogs,
      title: "Email System Setup & Strategy",
      description: "Complete email infrastructure setup and automation so you can focus on results.",
    }
  ];

  const content = (
    <div className='section overflow-auto xl:overflow-hidden backdrop-brightness-50 xl:backdrop-brightness-100'>
     <BackButton onBack={onBack}/>
 
      <div className='flex flex-col items-center justify-center gap-4 max-w-7xl mx-auto px-4'>
        <div className='text-center space-y-4'>
          <br className=" xl:hidden"/>
          <h1 className='text-shadow-drop-center text-5xl md:text-6xl font-bold'>My Services</h1>
          <h2 className='text-lg md:text-3xl xl:text-2xl'>
            I help businesses and entrepreneurs sell their products and services and increase their overall revenue, through persuasive copywriting, strategic email marketing, and conversion focused landing pages with unique designs.
          </h2>
        </div>

                  <h3 className='text-xl text-white font-semibold'>
            Work samples and previously done projects are in "The Chronicle" Section
          </h3>
        
        {/* Horizontal Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className='flex flex-col xl:flex-row  items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-emerald-900/40 to-emerald-950/40 backdrop-blur-sm border-2 border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 group'
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`
                }}
              >
                {/* Left: Gemstone with Icon */}
                <div className='relative shrink w-30 h-30'>
                  {/* Glow effect */}
                  <div className='absolute inset-0 bg-emerald-500/20 rounded-full blur-xl group-hover:bg-emerald-400/40 transition-all duration-300'></div>
                  
                  {/* Gemstone image */}
                  <img 
                    src='https://ik.imagekit.io/greenraven/Green%20Raven/gem%20stone.png' 
                    alt="Gemstone"
                    className='w-full h-full object-contain drop-shadow-2xl'
                  />
                  
                  {/* Icon overlay */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <Icon className='text-white group-hover:text-emerald-300 transition-colors duration-300 drop-shadow-lg' size={45} />
                  </div>
                </div>
                
                {/* Right: Text content */}
                <div className='flex flex-col text-center xl:text-left  flex-1 '>
                  <h2 className="font-bold text-xl md:text-3xl xl:text-2xl mb-2 text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className='text-white md:text-xl xl:text-lg leading-relaxed'>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );

  return (
    <Vortex children={content} rangeY={500} baseRadius={0.3} baseSpeed={0.1} />
  );
};

export default TheArsenal;