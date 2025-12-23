import React, { useEffect, useState } from 'react';
import BackButton from '../Utility/BackButton';

const TheWitnesses = ({ onBack }) => {
  const [lights, setLights] = useState([]);

  useEffect(() => {
    const generateLights = () => {
      return Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
      }));
    };

    setLights(generateLights());
  }, []);

  return (
    <div className='section the-witnesses relative overflow-hidden'>
      <div className='absolute inset-0 pointer-events-none'>
        {lights.map((light) => (
          <div
            key={light.id}
            className='absolute rounded-full bg-green-500'
            style={{
              left: `${light.x}%`,
              top: `${light.y}%`,
              width: `${light.size}px`,
              height: `${light.size}px`,
              animation: `flicker ${light.duration}s infinite`,
              animationDelay: `${light.delay}s`,
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)'
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
       <BackButton onBack={onBack}/>
      <div className='flex flex-col justify-center items-center relative z-10'>
        <br className='xl:hidden'/>
        <h1 className='text-shadow-drop-center'>Thy Mirror will call upon testimonials from witnesses</h1>
        <h2 className='text-center'>ONCE WE GET SOME OF THEM THAT IS NOW GET OUT!</h2>
      </div>
    </div>
  );
};

export default TheWitnesses;