import React from 'react';

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
    <div className="bg-[#020617] h-[70vh] md:h-[100vh] text-white font-sans flex flex-col p-4 md:p-6 lg:p-8 mt-10">

      {/* Main content card with lime green background */}
      <div className="bg-lime-400 text-black rounded-3xl p-10 md:p-16 lg:p-20 flex flex-col items-center text-center">

        {/* Decorative Stars */}
        <div className="flex gap-4 mb-8">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>

        {/* Main Heading */}
        <div className="font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-none">
          <div>LET'S CONNECT</div>
          <div>YOUR IDEAS</div>
        </div>

        {/* Action Buttons */}
        <div className="flex  sm:flex-row gap-5 mt-10">
          <div className="bg-black text-white rounded-full px-8 py-4 font-semibold cursor-pointer">
            <div>CONTACT </div>
          </div>
          <div className="border border-black text-black rounded-full px-8 py-4 font-semibold cursor-pointer">
            <div>FOLLOW</div>
          </div>
        </div>
      </div>

      {/* Spacer and "Das Grüne" text */}
      <div className="h-50  flex flex-col items-center justify-center">
        <div className="text-5xl text-gray-200" style={{ fontFamily: 'serif' }}>
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