import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Import your page components
import Projects from './Pages/Projects';
import About2 from './Pages/About2';
import Contact from './Pages/contact/Contact';
import Homefinal from './Homefinal';
import Mobilemenu from './Components/Mobilemenu';

// ---------- Loader Component ----------
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#020617] flex items-center justify-center z-[9999]">
      <motion.div
        className="w-12 h-12 border-4 border-[#9ae600] border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

// ---------- Page Transition Wrapper ----------
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(44px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)', transition: { duration: 1.2, ease: 'anticipate' } }}
      exit={{ opacity: 0, filter: 'blur(20px)', transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Preload fonts and images
  useEffect(() => {
    const loadFonts = document.fonts.ready; // Wait for fonts
    const loadImages = Promise.all(
      Array.from(document.images).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) resolve();
            else img.onload = img.onerror = resolve;
          })
      )
    );

    Promise.all([loadFonts, loadImages]).then(() => {
      setTimeout(() => setLoading(false), 800); // Small delay for smoother experience
    });
  }, []);

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-[#020617] min-h-screen relative">
      {loading && <Loader />}
      {!loading && (
        <>
          <Mobilemenu />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<AnimatedPage><Homefinal /></AnimatedPage>} />
              <Route path="/about" element={<AnimatedPage><About2 /></AnimatedPage>} />
              <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
              <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default App;
