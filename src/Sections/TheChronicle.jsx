import React, { useState } from 'react';
import { HiMail, HiDocumentText, HiFilm, HiArrowLeft, HiExternalLink } from 'react-icons/hi';
import BackButton from '../Utility/BackButton'
import { useSound } from '../Utility/SoundContext';

const TheChronicle = ({ onBack }) => {
  const sound = useSound()
  const [selectedSection, setSelectedSection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Example data structure - uncomment and fill when ready
  const emailProjects = [
    { id: 1, title: 'Can dropshipping actually replace your 9-5?', link: 'https://docs.google.com/document/d/1-cjtVeZ0HH7MQd1sDBY53bVHzcisi-FNa9ErdzRCPbw/edit?usp=sharing' },
     { id: 2, title: "'But I don't have enough money yet...'", link: 'https://docs.google.com/document/d/1x_-YCg7LA3Pcqz1rK1dzW6eOwmOM8JY9YcsgntOIRxE/edit?usp=sharing' },
     { id: 3, title: "Did you check out the guide?", link: 'https://docs.google.com/document/d/19LWMcsUKEBnYhOgO3sMWpPX6JfVn90wpMQhemCMd1Xw/edit?usp=sharing' },
     { id: 4, title: "From Broke to Business Owner, Real Stories", link: 'https://docs.google.com/document/d/1NLUjTNCKXmHLMNvqOowRnfYl6LXutbNBn4vhiQoa_Mc/edit?usp=sharing' },
     { id: 5, title: "Others already started, why not you?", link: 'https://docs.google.com/document/d/16HCaFuFwyPQV4Lq0V7X_tuDmKNvu_8fjmpSlKOUWJ4g/edit?usp=sharing' },
     { id: 6, title: "How I Started With $300 (And What I Learned)", link: 'https://docs.google.com/document/d/13zXM_ZappK5HXmco4wPJrfNLhdLGCz89Bupj6eNuERo/edit?usp=sharing' },
  ];

  const pageProjects = [
    { id: 1, title: 'MJ Dropshipping Saas', link: 'https://mjbusiness.onrender.com', image: 'https://ik.imagekit.io/greenraven/Green%20Raven/Screenshot%202025-12-24%20194358.png' },
    // { id: 2, title: 'Product Sales Page', link: 'https://example.com', image: null }, // will use placeholder
  ];

  const scriptProjects = [
     { id: 1, title: 'Saas Selling Ad Script', link: 'https://docs.google.com/document/d/1Q-0gI_JhTbSeZ7IGKBdXdKyWAbv3UTNi5r4MK0j3lwg/edit?usp=sharing' },
    { id: 2, title: 'Dropshipping Community Ad Script', link: 'https://docs.google.com/document/d/1HpLbYIA--Yj1N5woG2y2hvaJuMRqykDQDlbMpwb-JfE/edit?usp=sharing' },
  ];

  const sections = [
    {
      id: 'emails',
      title: 'Email Campaigns',
      icon: HiMail,
      projects: emailProjects
    },
    {
      id: 'pages',
      title: 'Sales & Landing Pages',
      icon: HiDocumentText,
      projects: pageProjects
    },
    {
      id: 'scripts',
      title: 'Ad Scripts',
      icon: HiFilm,
      projects: scriptProjects
    }
  ];

  const handleSectionClick = (section) => {
    sound.playSFX("buttonClick");
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedSection(section);
      setIsAnimating(false);
    }, 300);
  };

  const handleBackClick = () => {
    sound.playSFX("buttonClick");
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedSection(null);
      setIsAnimating(false);
    }, 300);
  };

  const renderProjects = () => {
    if (!selectedSection.projects || selectedSection.projects.length === 0) {
      return (
        <div className='text-center py-12'>
          <p className='text-3xl font-bold text-white'>THERE ARE NONE YOU IDIOT</p>
        </div>
      );
    }

    if (selectedSection.id === 'pages') {
      return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {selectedSection.projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105'
              style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '2px solid rgba(16, 185, 129, 0.3)',
              }}
            >
              <div className='aspect-video overflow-hidden bg-gray-800'>
                <img 
                  src={project.image || 'https://via.placeholder.com/400x300/1f2937/10b981?text=No+Preview'} 
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                />
              </div>
              <div className='p-4 flex items-center justify-between'>
                <h3 className='text-lg font-semibold text-white'>{project.title}</h3>
                <HiExternalLink className='text-emerald-400 text-xl group-hover:text-emerald-300 transition-colors' />
              </div>
            </a>
          ))}
        </div>
      );
    }

    return (
      <div className='grid grid-cols-1 gap-4'>
        {selectedSection.projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='group flex items-center justify-between p-5 rounded-xl transition-all duration-300 hover:scale-105'
            style={{
              background: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid rgba(16, 185, 129, 0.3)',
            }}
          >
            <h3 className='text-lg md:text-xl font-semibold text-white'>{project.title}</h3>
            <HiExternalLink className='text-emerald-400 text-2xl group-hover:text-emerald-300 transition-colors' />
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className='section the-chronicle px-4 md:px-8 overflow-auto!'>
     <BackButton onBack={onBack}/>

      <div className='flex flex-col justify-center items-center'>
        <h1 className='pb-8 text-shadow-drop-center text-5xl md:text-6xl'>My Projects</h1>

        {!selectedSection ? (
          <div 
            className={`flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center w-full ${isAnimating ? 'animate-fadeOut' : 'animate-fadeIn'}`}
          >
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section)}
                  className='group relative w-full max-w-sm md:w-64 h-64 md:h-80 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer'
                  style={{
                    background: 'rgba(3, 64, 48, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(16, 185, 129, 0.3)',
                    boxShadow: '0 8px 32px 0 rgba(16, 185, 129, 0.2)'
                  }}
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  <div className='relative z-10 h-full flex flex-col items-center justify-center p-6'>
                    <Icon className='text-8xl md:text-10xl text-emerald-400 mb-4 md:mb-6 transition-transform duration-300 group-hover:scale-110' />
                    <h2 className='font-bold text-white text-center md:text-3xl'>{section.title}</h2>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div 
            className={`w-full max-w-5xl rounded-2xl p-6 md:p-8 ${isAnimating ? 'animate-fadeOut' : 'animate-fadeIn'}`}
            style={{
              background: 'rgba(3, 64, 48, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(16, 185, 129, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(16, 185, 129, 0.2)'
            }}
          >
            <button
              onClick={handleBackClick}
              className='flex items-center gap-2 text-white cursor-pointer hover:text-emerald-300 transition-colors duration-200 mb-6'
            >
              <HiArrowLeft className='text-xl md:text-2xl' />
              <span className='text-lg md:text-xl font-semibold'>Back to Categories</span>
            </button>

            <div className='mt-6 md:mt-8'>
              <h2 className='text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8'>{selectedSection.title}</h2>
              {renderProjects()}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        .animate-fadeOut {
          animation: fadeOut 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default TheChronicle;