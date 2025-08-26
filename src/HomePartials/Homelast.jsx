import React from 'react';
import { Instagram, Facebook, X, Linkedin, Youtube ,Github} from "lucide-react";

// A simple star icon component for reusability
const StarIcon = () => (
  <div className="w-8 h-8 text-black/50">
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
    </svg>
  </div>
);

// Main component for the section
const Homelast = () => {
  return (
    <div className="bg-[#020617]  w-full font-sans flex flex-col p-4 md:p-6 lg:p-8 mt-10">

      {/* Main content card with lime green background */}
      <div className="bg-lime-400 text-black rounded-2xl p-10 md:p-16 lg:p-20 flex flex-col gap-4 items-center text-center">

        {/* Decorative Stars */}
        <div className="flex gap-4">
         
        </div>

        {/* Main Heading */}
        <div className="font-extrabold font-[font2] text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-none">
          <div>LET'S CONNECT</div>
          <div>YOUR IDEAS</div>
        </div>

        {/* Action Buttons */}
        
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
           <a href="https://www.linkedin.com/in/ashutosh-dureja-919072209/" className="bg-black/30 cursor-pointer rounded-full p-2 sm:p-2.5 hover:bg-black/20 transform transition-colors  duration-[0.4s] ease-out">
            <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
          <a href="https://www.instagram.com/ashudureja_/" className="rounded-full cursor-pointer bg-black/30 p-2 sm:p-2.5 hover:bg-black/20 transform transition-colors  duration-[0.4s] ease-out">
            <Instagram size={16} className="sm:w-[18px]  sm:h-[18px]" />
          </a>
          <a href="https://github.com/ashudureja?tab=overview&from=2025-06-01&to=2025-06-30" className="bg-black/30  cursor-pointer rounded-full p-2 sm:p-2.5 hover:bg-black/20transform transition-colors  duration-[0.4s] ease-out">
            <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
          <a href="https://www.linkedin.com/in/ashutosh-dureja-919072209/" className="bg-black/30 cursor-pointer rounded-full p-2 sm:p-2.5 hover:bg-black/20 transform transition-colors  duration-[0.4s] ease-out">
            <X size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
         
        </div>
         
        
      </div>

      {/* Spacer and "Das Grüne" text */}
      <div className="h-50  flex flex-col items-center justify-center">
        <div className=" text-[6vw] md:text-5xl font-[signature] text-gray-200" >
          Ashu Dureja
        </div>
         <div className="text-center block md:hidden mt-2 text-xs text-gray-500 uppercase tracking-widest">
         @2025 ALL RIGHTS RESERVED
        </div>
      </div>

      {/* --- Footer Section --- */}
      <div className=" hidden md:flex flex-col md:flex-row justify-between items-center w-full text-xs text-gray-500 uppercase tracking-widest gap-y-4">
        
        {/* Terms & Agreements */}
        <div className="text-center md:text-left">
          TERMS & AGREEMENTS
        </div>
        
        {/* Copyright Notice */}
        <div className="text-center">
          @2022 Ashu Dureja ALL RIGHTS RESERVED
        </div>
        
        {/* Privacy Policy */}
        <div className="text-center md:text-right">
          PRIVACY POLICY
        </div>
      </div>

      


     
    </div>
  );
};

export default Homelast;