import Hero from "../Sections/Hero";
import Services from "../Sections/Services";
import ParticleBackground from "../utility/ParticleBackground";
import About from "../Sections/About";
import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";
import Offer from "../Sections/Offer";

const Home = () => {
  return (
     <div className='overflow-x-hidden'>
 
      <div className='relative overflow-hidden'>
       <ParticleBackground/>
           <Hero/>
      </div>
      <Services/>
      <Offer /> 
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home