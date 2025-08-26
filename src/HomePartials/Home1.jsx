import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Copy from "../Components/Copy";
import AnimatedText from "../Components/AnimatedText";
const Home1 = () => {
  return (
    <div className="h-screen max-w-8xl mx-auto md:h-[130vw] lg:h-[111vh] w-full bg-lime-400 px-5 flex flex-col gap-8 md:gap-10 lg:gap-6 items-center overflow-hidden">
      <div className="relative mt-0 sm:mt-3 md:mt-6 ">
        {/* <div className=" flex absolute top-6 gap-2 left-1/2 -translate-x-1/2 sm:left-0 sm:-translate-x-0">
          <div className="h-5 w-5 bg-black rounded-full"></div>
          <div className="h-5 w-5 bg-black rounded-full"></div>
        </div> */}
        <div className="overflow-hidden text-center font-medium sm:mt-0  ">
          <h1 className="text-[24.5vw] sm:!text-[16vw] lg:!text-[16.5vw] mt-10 md:mt-4 lg:mt-0 !leading-[0.9] ">
            FRONTEND DEVELOPER
          </h1>
        </div>
      </div>
     <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 w-full items-center px-2 sm:px-4 lg:px-8'>
        <div className='flex flex-wrap gap-3 sm:gap-5 justify-center sm:justify-start'>
          <p className='border border-black/30 rounded-full py-2 px-4 sm:px-5 flex items-center justify-center text-sm sm:text-base font-medium'>
            ASHU DUREJA
          </p>
          <p className='border border-black/30 rounded-full py-2 px-4 sm:px-5 uppercase flex items-center justify-center text-sm sm:text-base font-medium'>
            Sydney based
          </p>
        </div>
        
        {/* Responsive divider line */}
        <div className='hidden sm:flex flex-1 h-[1px] bg-black/20 max-w-[40vw] lg:max-w-[50vw]'></div>
      </div>
      <div className=" h-full ">
        <div
          className="lg:h-full relative lg:w-98 max-w-xs sm:max-w-lg lg:max-w-100
"
        >
          <div className="absolute -inset-2 border border-black/30"></div>
          <img
            className="h-full w-full relative !object-cover  "
            src="./bb4.JPG"
            
          ></img>
          <div
            className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 lg:w-14 lg:h-14 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black text-[
#adff2e] flex items-center justify-center"
          >
            <MdOutlineArrowOutward className=" text-5xl text-lime-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home1;
