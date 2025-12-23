import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { CometCard } from './CometCard';
import { useSound } from './SoundContext';
import { useMediaQuery } from 'react-responsive';

const cardStyles = {
  fadeIn: {
    animation: 'fadeIn 0.3s ease-out'
  },
  fadeInDelayed: {
    animation: 'fadeIn 0.3s ease-out 0.1s backwards'
  }
};

const Cards = ({ onCardClick }) => {
  const sound = useSound()
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const flipSound = () => {
    sound.playSFX("cardFlip");
  } 

  const [activeIndex, setActiveIndex] = useState(0);
  
  const cards = [
    { 
      id: 1, 
      src: "https://ik.imagekit.io/greenraven/Green%20Raven/The%20Arsenal.png?updatedAt=1766079255463",
      // Higher quality version for inactive slides
      srcHighRes: "https://ik.imagekit.io/greenraven/Green%20Raven/The%20Arsenal.png?updatedAt=1766079255463&tr=w-800,q-90",
      title: "The Arsenal (Services)",
      description: "Words that convert. Pages that captivate. Systems that scale. Behold the weapons of transformation.",
      section: 'TheArsenal'
    },
    { 
      id: 2, 
      src: "https://ik.imagekit.io/greenraven/Green%20Raven/The%20Chronicle.png?updatedAt=1766079255750",
      srcHighRes: "https://ik.imagekit.io/greenraven/Green%20Raven/The%20Chronicle.png?updatedAt=1766079255750&tr=w-800,q-90",
      title: "The Chronicle (Projects)",
      description: "Tales of triumph etched in results. Witness the battles won and empires built through strategic mastery.",
      section: 'TheChronicle'
    },
    { 
      id: 3, 
      src: "https://ik.imagekit.io/greenraven/Green%20Raven/The%20Witnesses.png?updatedAt=1766079255225",
      srcHighRes: "https://ik.imagekit.io/greenraven/Green%20Raven/The%20Witnesses.png?updatedAt=1766079255225&tr=w-800,q-90",
      title: "The Witnesses (Testimonials)",
      description: "Voices from those who walked through darkness into light. Their words carry the weight of transformation.",
      section: 'TheWitnesses'
    },
    { 
      id: 4, 
      src: "https://ik.imagekit.io/greenraven/Green%20Raven/The%20Raven.png?updatedAt=1766079254818",
      srcHighRes: "https://ik.imagekit.io/greenraven/Green%20Raven/The%20Raven.png?updatedAt=1766079254818&tr=w-800,q-90",
      title: "The Raven (About Me)",
      description: "Born in shadow, forged in purpose. Discover the journey of the guardian who bridges worlds through words.",
      section: 'TheRaven'
    },
    { 
      id: 5, 
      src: "https://ik.imagekit.io/greenraven/Green%20Raven/The%20Invitation.png?updatedAt=1766079256432",
      srcHighRes: "https://ik.imagekit.io/greenraven/Green%20Raven/The%20Invitation.png?updatedAt=1766079256432&tr=w-800,q-90",
      title: "The Invitation (Contact)",
      description: "The path is laid before you. Step forward and seal the covenant. Your transformation awaits.",
      section: 'TheInvitation'
    },
  ];

  const handleCardClick = () => {
    const selectedCard = cards[activeIndex];
    if (onCardClick && selectedCard) {
      onCardClick(selectedCard.section);
      sound.playSFX("buttonClick")
    }
  };

  return (
    <>
      {/* Title and description for active card with transitions */}
      <div className="text-center text-white">
        <h2 
          className="xl:text-3xl font-bold mb-2"
          style={cardStyles.fadeIn}
        >
          {cards[activeIndex].title}
        </h2>
        <p 
          className="xl:text-2xl font-semibold"
          style={cardStyles.fadeInDelayed}
        >
          {cards[activeIndex].description}
        </p>
      </div>
      
      <div className="w-full xl:w-[75%] z-100 h-screen flex justify-center items-center"> 
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={isMobile ? 1 : 3}
          allowTouchMove={false}
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          // Disable lazy loading completely
          lazy={false}
          preloadImages={true}
          updateOnImagesReady={true}
          watchSlidesProgress={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={card.id} style={{ willChange: 'transform' }}>
              {({ isActive }) => (
                <div 
                  className='flex items-center justify-center'
                  onClick={isActive ? handleCardClick : undefined}
                >
                  <CometCard
                    rotateDepth={isActive ? 17.5 : 10}
                    translateDepth={isActive ? 20 : 10}
                    className={`transition-all duration-300 ${
                      isActive 
                        ? 'scale-90 opacity-100 cursor-pointer' 
                        : 'scale-70 opacity-75'
                    }`}
                  >
                    <div className="relative rounded-xl overflow-hidden">
                      {/* 
                        CRITICAL FIX: Use different image URLs based on active state
                        Inactive slides get pre-optimized smaller images
                        Active slides get full quality images
                      */}
                      <img 
                        src={isActive ? card.srcHighRes : card.srcHighRes} 
                        alt={card.title}
                        loading="eager"
                        className={`w-70 md:w-120 xl:w-80 h-auto object-contain! transition-all duration-300 ${
                          isActive ? 'brightness-100' : 'brightness-75'
                        }`}
                        style={{
                          // Force high-quality image rendering
                          imageRendering: isActive ? 'auto' : 'crisp-edges',
                          // Prevent blurry scaling
                          transform: 'translateZ(0)',
                          backfaceVisibility: 'hidden'
                        }}
                      />
                    </div>
                  </CometCard>
                </div>
              )}
            </SwiperSlide>
          ))}
          
          <div onClick={flipSound} className="swiper-button-prev text-transparent! w-25! h-25!"></div>
          <div onClick={flipSound} className="swiper-button-next text-transparent! w-25! h-25!"></div>
        </Swiper>
      </div>
    </>
  );
};

export default Cards;