import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home8 from './Home8';
import Second from './homepartials/Second';
import Recent from './homepartials/Recent';
import Projects2 from './homepartials/Projects2';
import Footer from '../Components/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const home8Ref = useRef(null);
  const secondRef = useRef(null);
  const recentRef = useRef(null);

  useEffect(() => {
    
    const sections = [home8Ref.current, secondRef.current, recentRef.current];
    
    sections.forEach((section, index) => {
      if (index < sections.length - 1) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div ref={home8Ref}>
        <Home8/>
      </div>
      <div ref={secondRef}>
        <Second/>
      </div>
      <div ref={recentRef} className=''>
        <Recent/>
      </div>
      <div>
        <Projects2/>
        
      </div>
      
    </div>
  );
};

export default Home;