import gsap from 'gsap';
import {ScrollTrigger, SplitText} from 'gsap/all';
import { Route, Routes} from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Layout from './utility/Layout';


gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {

  return (
   <Routes>
   <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>}/>
     <Route path='/services' element={<Services/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/projects' element={<Projects/>}/>
     <Route path='/contact' element={<Contact/>}/>
    </Route>
   </Routes>
  )
}

export default App