import React, { useEffect,useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { GiFlowerEmblem } from "react-icons/gi";
import { FaRegCircle } from "react-icons/fa";
import { GoInfinity } from "react-icons/go";

// Import your page components
import Projects from './Pages/Projects';
import About2 from './Pages/About2';
import Contact from './Pages/contact/Contact';
import Homefinal from './Homefinal';
import Mobilemenu from './Components/Mobilemenu';
import HomeFinal2 from './HomePartial2/HomeFinal2';

// Define the animation variants for the page transition
const pageVariants = {
  initial: {
    opacity: 0,
    filter: 'blur(44px)', // Start with a blur
  },
  in: {
    opacity: 1,
    filter: 'blur(0px)', // Animate to no blur
  },
  out: {
    opacity: 0,
    filter: 'blur(20px)', // Animate back to blur on exit
  },
};

// Define the transition properties
const pageTransition = {
  type: 'tween',
  ease: 'anticipate', // An easing function that gives a nice effect
  duration: 0.8,
};

/**
 * A simple wrapper component to apply the motion effects to each page.
 * This makes the Routes definition cleaner.
 */
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: 'blur(44px)',
      }}
      animate={{
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
          duration: 1.2, // Entry duration
          ease: 'anticipate',
        },
      }}
      exit={{
        opacity: 0,
        filter: 'blur(20px)',
        transition: {
          duration: 0, // Exit duration
          ease: 'easeInOut',
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedPage2 = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: 'blur(50px)',
      }}
      animate={{
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
          duration: 0.9, // Entry duration
          ease: 'anticipate',
        },
      }}
      exit={{
        opacity: 0,
        filter: 'blur(20px)',
        transition: {
          duration: 0, // Exit duration
          ease: 'easeInOut',
        },
      }}
    >
      {children}
    </motion.div>
  );
};



const App = () => {
  const location = useLocation();
  const [loading,setloading]=useState(true)

  // This effect scrolls the window to the top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setloading(false)
    },2000)

    return()=>clearTimeout(timer)
  },[])

  // Ensure you have framer-motion installed:
  // npm install framer-motion

  return (
    <div className='bg-[#020617] min-h-screen w-full'>
      {loading ? <div className=' bg-gradient-to-br from-gray-900 via-black to-gray-900 gap-15 md:gap-50  h-screen w-full flex flex-col md:flex-row items-center justify-center ]'>
        <div className='font-[font2] text-white text-xs tracking-widest'>DEVELOPER</div>
        <div className='w-25 h-60 border rounded-full py-5 border-gray-800 flex flex-col justify-between items-center'>
         
          <GiFlowerEmblem className='text-lime-400/90 spin' />
          <div className='text-lime-400 font-[ad] text-8xl'>Ad</div>
           <GiFlowerEmblem className='text-lime-400/90 spin' />
            
        </div>
        <div className='font-[font2] text-white tracking-widest text-xs'>DESIGNER</div>
        
        
       
      </div> :<><Mobilemenu />
     
      <AnimatePresence mode="wait">
        
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage2><Homefinal /></AnimatedPage2>} />
          <Route path="/about" element={<AnimatedPage><About2 /></AnimatedPage>} />
          <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
        </Routes>
      </AnimatePresence></>}
      
    </div>
  );
};

export default App;