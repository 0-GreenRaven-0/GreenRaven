import { useState, useEffect } from 'react';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Offer from './Sections/Offer';
import Work from './Sections/Work';
import ParticleBackground from './utility/ParticleBackground';

import gsap from 'gsap';
import {ScrollTrigger, SplitText} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {

  return (
    <div className='overflow-x-hidden'>
      <Hero/>
      <div className='relative overflow-hidden'>
       <ParticleBackground/>
       <About/>
      </div>
      <Offer />   
      <Work />

      <Contact/>
    </div>
  )
}

export default App