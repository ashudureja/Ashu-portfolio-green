import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TbAsterisk } from "react-icons/tb";
import { ReactLenis, useLenis } from "lenis/react";

const Home8 = () => {
  const containerRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  
  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setContentWidth(width);
    }
  }, []);

  const marqueeVariants = {
    animate: {
      x: [0, -contentWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  return (
    <ReactLenis 
      root 
      // options={{
      //   lerp: 0.1, // Lower values make scrolling slower (0.1 is very smooth/slow)
      //   duration: 5.5, // Longer duration slows down the scroll
      //   smoothWheel: true, // Enables smooth wheel scrolling
      //   syncTouch: true, // Smooth scrolling for touch devices
      //   syncTouchLerp: 0.1, // Slows touch scrolling too
      // }}
    > 
     
      
      <div className="absolute z-[20] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[65%] flex flex-col">
        <div className="relative flex items-center justify-center h-full">
          {/* Marquee Container */}
          <div className="relative overflow-hidden w-full">
            <motion.div
              className="flex whitespace-nowrap"
              variants={marqueeVariants}
              animate="animate"
              style={{ willChange: 'transform' }}
            >
              <div 
                className="flex items-center min-w-max" 
                ref={containerRef}
              >
                <h1 className="!text-[27vw] relative px-10">
                  PORTFOLI0
                </h1>
              </div>
              <div className="flex items-center min-w-max">
                <h1 className="!text-[27vw] relative px-10">
                  PORTFOLI0
                </h1>
              </div>
              <div className="flex items-center min-w-max">
                <h1 className="!text-[27vw] relative px-10">
                  PORTFOLI0
                </h1>
              </div>
              <div className="flex items-center min-w-max">
                <h1 className="!text-[27vw] relative px-10">
                  PORTFOLI0
                </h1>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute top-13 w-full h-1 bg-black"></div>
          <p className="absolute -bottom-24 left-0 !text-[30px]">2025</p>
          <div className="h-1 w-full absolute -bottom-10 bg-black"></div>
        </div>
      </div>
   </ReactLenis>
   
  );
};

export default Home8;