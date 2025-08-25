import "./AnimatedCopy.css";
import { useEffect, useRef, useState, Children, cloneElement, isValidElement } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AnimatedCopy = ({
  children,
  className = "",
  delay = 0,
  duration = 1,
  ease = "power4.out",
  stagger = 0.05,
  lineSelector = "",
  animateOnScroll = true,
  direction = "bottom",
  ...restProps
}) => {
  const copyRef = useRef(null);
  const [copyId, setCopyId] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const textSplitRef = useRef(null);

  // Generate unique ID on mount
  useEffect(() => {
    setCopyId(`copy-${Math.floor(Math.random() * 10000)}`);
  }, []);

  // Initialize text splitting and setup
  useEffect(() => {
    if (!copyId || !copyRef.current) return;

    const lineClass = `line-${copyId}`;
    
    try {
      // Store original styles to preserve layout
      const element = copyRef.current;
      const computedStyle = window.getComputedStyle(element);
      const originalWidth = element.offsetWidth;
      
      // Apply fixed width to prevent reflow during split
      element.style.width = `${originalWidth}px`;
      
      const text = new SplitType(copyRef.current, {
        types: "lines",
        lineClass: lineClass,
      });
      
      textSplitRef.current = text;

      const selector = lineSelector || `.${lineClass}`;
      const lines = document.querySelectorAll(selector);
      
      if (lines.length === 0) {
        console.warn('AnimatedCopy: No lines found to animate');
        // Restore original width if no lines found
        element.style.width = '';
        return;
      }

      lines.forEach((line) => {
        const content = line.innerHTML;
        // Add overflow hidden to parent line for clean animation
        line.style.overflow = 'hidden';
        line.innerHTML = `<span class="line-inner-${copyId}">${content}</span>`;
      });

      const initialY = direction === "top" ? "-100%" : "100%";
      gsap.set(`.line-inner-${copyId}`, {
        y: initialY,
        display: "block",
      });

      setIsInitialized(true);
    } catch (error) {
      console.error('AnimatedCopy: Error initializing text split:', error);
    }

    return () => {
      if (textSplitRef.current) {
        textSplitRef.current.revert();
      }
      // Restore original width on cleanup
      if (copyRef.current) {
        copyRef.current.style.width = '';
      }
    };
  }, [copyId, lineSelector, direction]);

  // GSAP animation
  useGSAP(
    () => {
      if (!isInitialized || !copyRef.current || !copyId) return;

      const innerElements = document.querySelectorAll(`.line-inner-${copyId}`);
      if (innerElements.length === 0) return;

      const tl = gsap.timeline({
        defaults: {
          ease,
          duration,
        },
        ...(animateOnScroll
          ? {
              scrollTrigger: {
                trigger: copyRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          : {}),
      });

      tl.to(`.line-inner-${copyId}`, {
        y: "0%",
        stagger,
        delay,
      });

      return () => {
        if (animateOnScroll) {
          ScrollTrigger.getAll()
            .filter((st) => st.vars.trigger === copyRef.current)
            .forEach((st) => st.kill());
        }
      };
    },
    {
      scope: copyRef,
      dependencies: [
        isInitialized,
        animateOnScroll,
        delay,
        duration,
        ease,
        stagger,
        direction,
        copyId,
      ],
    }
  );

  // Don't render until we have a copyId
  if (!copyId) return null;

  // Clone child elements and preserve their original classes
  const enhancedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      const childClassName = child.props.className || "";
      // Only add animated-copy class, let the child keep its own className
      const combinedClassName = childClassName 
        ? `animated-copy ${childClassName}` 
        : 'animated-copy';
      
      return cloneElement(child, {
        ...child.props,
        ...(index === 0 ? { ref: copyRef } : {}), // Add ref only to first child
        className: combinedClassName,
        'data-copy-id': copyId,
        // Don't spread restProps here - let the child handle its own props
      });
    }
    return child;
  });

  return <>{enhancedChildren}</>;
};

export default AnimatedCopy;