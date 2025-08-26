import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
// Import your page components
import Projects from './Pages/Projects';
import About2 from './Pages/About2';
import Contact from './Pages/contact/Contact';
import Homefinal from './Homefinal';
import Mobilemenu from './Components/Mobilemenu';
import HomeFinal2 from './HomePartial2/HomeFinal2';

// Loader Component
const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-[#020617] z-50 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Animated spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin mb-4 mx-auto"></div>
          <div className="w-12 h-12 border-4 border-gray-700 border-t-blue-400 rounded-full animate-spin absolute top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
        
        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white text-lg font-medium"
        >
          Loading...
        </motion.p>
        
        {/* Animated dots */}
        <motion.div
          className="flex justify-center space-x-1 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

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
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Function to check if all fonts are loaded
  const checkFontsLoaded = () => {
    return new Promise((resolve) => {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          resolve(true);
        });
      } else {
        // Fallback for browsers that don't support document.fonts
        setTimeout(() => {
          resolve(true);
        }, 1000);
      }
    });
  };

  // Function to preload critical images
  const preloadImages = (imageUrls) => {
    return new Promise((resolve) => {
      if (!imageUrls || imageUrls.length === 0) {
        resolve(true);
        return;
      }

      let loadedCount = 0;
      const totalImages = imageUrls.length;

      const updateProgress = () => {
        loadedCount++;
        setLoadingProgress((loadedCount / totalImages) * 50 + 50); // 50-100% for images
      };

      imageUrls.forEach((url) => {
        const img = new Image();
        img.onload = () => {
          updateProgress();
          if (loadedCount === totalImages) {
            resolve(true);
          }
        };
        img.onerror = () => {
          updateProgress();
          if (loadedCount === totalImages) {
            resolve(true);
          }
        };
        img.src = url;
      });
    });
  };

  // Function to get all image URLs from the DOM
  const getAllImageUrls = () => {
    const images = [];
    
    // Get images from img tags
    const imgElements = document.querySelectorAll('img[src]');
    imgElements.forEach(img => {
      if (img.src && !img.src.startsWith('data:')) {
        images.push(img.src);
      }
    });

    // Get background images from CSS
    const elementsWithBgImage = document.querySelectorAll('*');
    elementsWithBgImage.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      const bgImage = computedStyle.backgroundImage;
      if (bgImage && bgImage !== 'none') {
        const matches = bgImage.match(/url\(['"]?([^'")]+)['"]?\)/);
        if (matches && matches[1] && !matches[1].startsWith('data:')) {
          images.push(matches[1]);
        }
      }
    });

    return [...new Set(images)]; // Remove duplicates
  };

  // Main loading function
  const initializeApp = async () => {
    try {
      setLoadingProgress(10);
      
      // Wait for DOM to be fully loaded
      if (document.readyState !== 'complete') {
        await new Promise((resolve) => {
          const handleLoad = () => {
            document.removeEventListener('readystatechange', handleLoad);
            resolve(true);
          };
          if (document.readyState === 'complete') {
            resolve(true);
          } else {
            document.addEventListener('readystatechange', handleLoad);
          }
        });
      }
      
      setLoadingProgress(30);

      // Wait for fonts to load
      await checkFontsLoaded();
      setLoadingProgress(50);

      // Small delay to allow DOM to settle before scanning for images
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Get all images and preload them
      const imageUrls = getAllImageUrls();
      
      // If no images found, just complete the loading
      if (imageUrls.length === 0) {
        setLoadingProgress(100);
      } else {
        await preloadImages(imageUrls);
      }

      // Minimum loading time for UX (optional)
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setLoadingProgress(100);
      
      // Small delay before hiding loader
      setTimeout(() => {
        setIsLoading(false);
      }, 200);

    } catch (error) {
      console.error('Loading error:', error);
      // Even if there's an error, hide the loader after a timeout
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    initializeApp();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Show loader while loading
  if (isLoading) {
    return (
      <AnimatePresence>
        <Loader />
      </AnimatePresence>
    );
  }

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