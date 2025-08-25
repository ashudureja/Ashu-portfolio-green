import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis, useLenis } from "lenis/react";
import PortfolioComponent from "./PortfolioComponent";
import Copy from "../../Components/Copy";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const StackedCard = ({ title, description, index, bg }) => {
  return (
    <div className="stacked-card -mt-1" id={`card-${index + 1}`}>
      <div className="stacked-card-inner">
        <div className="stacked-card-content">
          <div className={`h-[500px] ${bg} flex overflow-hidden items-center justify-center text-black text-4xl font-bold rounded-t-2xl border-t border-lime-400 hover:border-lime-400/40 transition-colors relative`}>
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-black/30"></div>
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-black/30"></div>
            <div className="h-full text-center relative w-full flex flex-col items-center justify-center gap-4 px-8">
              <div className="relative w-full">
                 <h1 className="">
                  {title}
                </h1>
               
              </div>
              <div className="w-full flex items-center justify-center">
               <Copy>
                 <p className="max-w-2xl text-center text-lg md:text-xl font-bold uppercase tracking-wider leading-tight text-black relative">
                  {description}
                </p>
               </Copy>
              </div>
              <div className="h-30 w-30  relative">
                <div className="absolute -inset-2 border-2 border-black/10 rounded-lg pointer-events-none"></div>
                <img
                  className="h-full w-full object-cover rounded-lg drop-shadow-lime-400"
                  src="./webdev.png"
                  alt="Web Development"
                />
              </div>
              <div className="absolute bottom-8 left-8 text-xs font-mono opacity-50 text-black flex items-center">
                <span className="mr-2">◆</span>0{index + 1}
                <span className="ml-2">◆</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Recent = () => {
  const lenis = useLenis(({ scroll }) => {});
  const container = useRef();
  
  const arr = [
    {
      title: "WEB DEVELOPMENT",
      description: "BUILDING **HIGH-OCTANE** WEB APPS WITH REACT & NEXT.JS. FASTER. STRONGER. UNBREAKABLE.",
      bg: "bg-lime-100",
    },
    {
      title: "WEB DESIGNING", 
      description: "DESIGN THAT **CUTS THROUGH THE NOISE**. BOLD. INTUITIVE. UNFORGETTABLE.",
      bg: "bg-lime-200",
    },
    {
      title: "SEO",
      description: "DOMINATE **SEARCH RANKINGS**. ENGINEERED FOR VISIBILITY. OPTIMIZED FOR IMPACT.",
      bg: "bg-lime-300",
    },
  ];

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".stacked-card");
      
      // Pin the intro section while cards scroll past it
      ScrollTrigger.create({
        trigger: cards[0],
        start: "top 35%",
        endTrigger: cards[cards.length - 1],
        end: "top 30%",
        pin: ".intro",
        pinSpacing: false,
      });

      cards.forEach((card, index) => {
        const isLastCard = index === cards.length - 1;
        const cardInner = card.querySelector(".stacked-card-inner");
        
        if (1===1) {
          // Pin each card as it reaches the trigger point
          ScrollTrigger.create({
            trigger: card,
           start: `top ${15 + index * 23}%`,
            endTrigger: ".outro",
            end: "top 65%",
            pin: true,
           
            pinSpacing: false,
          });

          // Create the stacking effect by moving card content up
          gsap.to(cardInner, {
            y: `-${(cards.length - index) * 14}vh`,
            ease: "none",
            scrollTrigger: {
              trigger: card,
               start: `top ${15 + index * 23}%`,
              endTrigger: ".outro",
              end: "top 65%",
              scrub: true,
            },
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <ReactLenis root><div className="app" ref={container}>
      {/* Hero Section */}
      <section className="intro hero h-screen bg-[#020617] w-full flex flex-col items-center justify-center px-4">
       <Copy delay={0.3}> <h1 className="text-center text-lime-400 text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight !leading-[0.9] mb-8">
          SO, WHAT <br />CAN I <br /> (DO)
        </h1></Copy>
        {/* <p className="text-white/80 text-xs md:text-sm uppercase tracking-[0.5em] mt-8 font-mono">
          ↓ SCROLL TO UNLEASH ↓
        </p> */}
      </section>

     
      <section className="cards w-full flex relative flex-col bg-[#020617]">
        {arr.map((item, index) => (
          <StackedCard 
            key={index} 
            title={item.title}
            description={item.description}
            bg={item.bg}
            index={index} 
          />
        ))}
      </section>

      {/* Outro Section */}
      <section className="outro  bg-white h-[50vh] w-full flex items-center justify-center">
        {/* <div className="mt-[100vh]"><PortfolioComponent/></div> */}
      </section>
    </div></ReactLenis>
    
  );
};

export default Recent;