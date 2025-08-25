import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

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


const App = () => {
  const location = useLocation();

  // This effect scrolls the window to the top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Ensure you have framer-motion installed:
  // npm install framer-motion

  return (
    <div className='bg-[#020617] min-h-screen'>
      <Mobilemenu />
      {/* AnimatePresence handles the animation of components when they are mounted or unmounted */}
      {/* 'mode="wait"' ensures the outgoing animation finishes before the new one starts */}
      <AnimatePresence mode="wait">
        {/* We pass location and a unique key to Routes to let AnimatePresence know when the page changes */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><Homefinal /></AnimatedPage>} />
          <Route path="/about" element={<AnimatedPage><About2 /></AnimatedPage>} />
          <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;