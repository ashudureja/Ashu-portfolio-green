import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({
  children,
  className = '',
  charClass = 'animated-char',
  triggerStart = 'top 85%',
  stagger = 0.04,
  duration = 0.8,
  delay=0.33,
  ease = 'power2.out',
  initialY = '100%',
  finalY = '0%',
  marker="false",
  toggleActions = 'play none none none',
  splitTypes = 'chars',
  as: Component = 'div',
  onAnimationComplete,
  ...props
}) => {
  const elementRef = useRef(null);
  const splitInstanceRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    // Create SplitType instance
    const splitInstance = new SplitType(elementRef.current, {
      types: splitTypes,
      charClass: charClass,
    });
    
    splitInstanceRef.current = splitInstance;

    // Set initial state
    gsap.set(`.${charClass}`, {
      y: initialY,
      display: 'inline-block',
    });

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current,
        start: triggerStart,
        toggleActions: toggleActions,
       
        
      },
      onComplete: onAnimationComplete,
    });

    tl.to(`.${charClass}`, {
      y: finalY,
      stagger: stagger,
      delay:delay,
      duration: duration,
      ease: ease,
    });

    // Cleanup function
    return () => {
      if (splitInstanceRef.current) {
        splitInstanceRef.current.revert();
      }
      
      // Kill specific ScrollTriggers for this element
      ScrollTrigger.getAll()
        .filter((st) => st.vars.trigger === elementRef.current)
        .forEach((st) => st.kill());
    };
  }, [
    charClass,
    triggerStart,
    stagger,
    duration,
    ease,
    initialY,
    finalY,
    toggleActions,
    splitTypes,
    onAnimationComplete,
  ]);

  return (
    <Component
      ref={elementRef}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

// Example usage component


export default AnimatedText;

