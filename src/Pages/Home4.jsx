import React from "react";
import Sunburst from "../Components/Sun";

// Rotating Sunburst Component

const Home4 = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-lime-400 text-black overflow-hidden">
    
      {/* <div className="absolute top-10 ">
        ASHU
      </div> */}

      <div className="">
        <h3 className="!text-[28vw] ">
          PORTFOLI0
        </h3>
        <div className="absolute -right-32 top-62 transform -translate-y-1/2">
          <Sunburst size="3em" />
        </div>
      </div>

      {/* Arrow Down */}
      <div className="absolute bottom-6 w-full flex justify-center">
        <div className="animate-bounce text-pink-600 text-3xl">⌄</div>
      </div>

      {/* Footer Links */}
      <div className="absolute bottom-2 right-4 text-xs text-black opacity-80 space-x-4">
        <span className="hover:underline cursor-pointer">INSTAGRAM</span>
        <span className="hover:underline cursor-pointer">LINKEDIN</span>
        <span className="hover:underline cursor-pointer">TWITTER</span>
        <span className="hover:underline cursor-pointer">SYDNEY</span>
      </div>
    </div>
  );
};

export default Home4;
