import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Mobilemenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  // Updated pages array with route information
  const pages = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" }
  ];

  
  
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Elegant clip-path animation from line to full modal
  const menuVariants = {
    hidden: {
      clipPath: "inset(50% 45% 50% 45%)",
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      scale: 1,
      transition: {
        clipPath: {
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        },
        opacity: {
          duration: 0.4,
          delay: 0.1,
        },
        scale: {
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        },
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
    exit: {
      clipPath: "inset(50% 45% 50% 45%)",
      opacity: 0,
      scale: 0.9,
      transition: {
        clipPath: {
          duration: 0.4,
          ease: [0.76, 0, 0.24, 1],
        },
        opacity: {
          duration: 0.3,
        },
        scale: {
          duration: 0.4,
          ease: [0.76, 0, 0.24, 1],
        },
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  // Refined menu items with elegant stagger
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 0.95,
      filter: "blur(2px)",
      transition: {
        duration: 0.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  // Container for staggered menu items
  const menuItemsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.4,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  // Sophisticated close button animation
  const closeButtonVariants = {
    hidden: {
      opacity: 0,
      rotate: 90,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      rotate: 90,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.4,
      },
    },
    exit: {
      opacity: 0,
      rotate: -180,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  // Refined background overlay
  const overlayVariants = {
    hidden: {
      opacity: 0,
      backdropFilter: "blur(0px)",
    },
    visible: {
      opacity: 1,
      backdropFilter: "blur(8px)",
      transition: {
        opacity: {
          duration: 0.4,
        },
        backdropFilter: {
          duration: 0.6,
        },
      },
    },
    exit: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: {
        duration: 0.3,
      },
    },
  };

  // Enhanced button animations
  const buttonVariants = {
    tap: {
      scale: 0.92,
      transition: {
        duration: 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const location=useLocation()

  return (
    <>
      {/* Menu Overlay */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            {/* Enhanced Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 "
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={toggleMenu}
            />
            
            {/* Elegant Menu Content */}
            <div className="fixed inset-0 z-50 flex  items-end justify-center pb-20 p-4 pointer-events-none">
              <motion.div
                className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white w-72 h-80 flex flex-col items-center justify-between py-8 px-10 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10 pointer-events-auto"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Elegant Close Icon */}
                <motion.div
                  className="cursor-pointer text-3xl font-extralight hover:text-gray-300 transition-colors duration-300 select-none"
                  onClick={toggleMenu}
                  variants={closeButtonVariants}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 90,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.div>

                {/* Refined Navigation Items with Stagger */}
                <motion.div 
                  className="flex flex-col items-center space-y-6"
                  variants={menuItemsContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {pages.map((item, i) => (
                    <motion.div
                      key={i}
                      className="relative"
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { 
                          duration: 0.3,
                          ease: [0.25, 0.1, 0.25, 1]
                        }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={item.path}
                        className="text-lg font-light tracking-wider cursor-pointer text-gray-200 select-none group hover:text-white transition-colors duration-300"
                        onClick={() => {
                          setIsMenuOpen(false);
                        }}
                      >
                        <span className={`relative z-10 ${location.pathname === item.path?"line-through decoration-1 decoration-white/70":""}`}>({item.name})</span>
                        {/* Elegant hover effect */}
                        <motion.div
                          className="absolute -inset-x-4 -inset-y-2 bg-white/5 rounded-lg -z-10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ 
                            opacity: 1, 
                            scale: 1,
                            transition: { duration: 0.2 }
                          }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Decorative bottom element */}
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ 
                    width: 48, 
                    opacity: 1,
                    transition: { 
                      delay: 0.6, 
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }}
                  exit={{ 
                    width: 0, 
                    opacity: 0,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Enhanced Menu Trigger Button */}
      <div className="fixed   z-30 bottom-6 w-full items-center justify-center flex flex-col">
        <motion.button
          className="bg-gradient-to-r from-gray-900 to-black text-white rounded-full py-3 px-10 cursor-pointer border border-white/20 backdrop-blur-sm shadow-lg"
          onClick={toggleMenu}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          animate={isMenuOpen ? 
            { 
              backgroundColor: "#1f2937",
              borderColor: "rgba(255, 255, 255, 0.3)",
              transition: { duration: 0.3 }
            } : 
            { 
              backgroundColor: "#000000",
              borderColor: "rgba(255, 255, 255, 0.2)",
              transition: { duration: 0.3 }
            }
          }
        >
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            MENU
          </motion.span>
          <motion.span
            animate={isMenuOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            CLOSE
          </motion.span>
          <span className="opacity-0">MENU</span>
        </motion.button>
      </div>
    </>
  );
};

export default Mobilemenu;