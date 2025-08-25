import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";


import AnimatedText from "./AnimatedText";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer2 = () => {
  const logoRef = useRef(null);
const containerRef=useRef(null)


  return (
    <div
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[800px] sticky top-[calc(100vh-800px)]">
          <div ref={containerRef} className="relative  w-full h-full overflow-x-hidden bg-[#fff] pt-24 p-5">
            {/* <TrailEffect/> */}
            <div className="flex justify-end flex-col gap-16">
              <div className="w-full flex flex-col md:flex-row gap-16 md:gap-0">
                {/* First Column - Newsletter */}
                <div className="flex-1">
                  <h3 className="font-['dm'] w-full md:w-2/5 mb-6 text-black">
                    " NGL React is best Javascript library"
                  </h3>
                  <div className="w-full md:w-[65%] py-4 flex items-center gap-4 border-b border-white/[0.125]">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="bg-transparent w-full outline-none border-none text-black  text-sm uppercase py-2.5 placeholder:text-black/50 placeholder:uppercase placeholder:font-['am'] placeholder:text-sm"
                    />
                    <button className="border-none outline-none bg-lime-400 text-[#0f0f0f] w-30 text-lg px-2 py-2.5 uppercase cursor-pointer">
                      <a>Say Hi</a>
                    </button>
                  </div>
                </div>

                {/* Second Column - Links and Locations */}
                <div className="flex-1 flex flex-col-reverse md:flex-col justify-between items-start md:items-end gap-8 md:gap-32">
                  <div className="w-full md:w-[90%] flex flex-col md:flex-row gap-8 md:gap-0">
                    <div className="flex-1 flex gap-8">
                      <a
                        href="https://www.instagram.com/codegridweb/"
                        className="text-black hover:opacity-75 transition-opacity"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://x.com/codegridweb"
                        className="text-black hover:opacity-75 transition-opacity"
                      >
                        Twitter
                      </a>
                      <a
                        href="https://x.com/codegridweb"
                        className="text-black hover:opacity-75 transition-opacity"
                      >
                        Linkedin
                      </a>
                    </div>
                  </div>

                  <div className="w-full md:w-[90%] flex flex-col md:flex-row gap-8 md:gap-0">
                    <div className="flex-1">
                      <h3 className="font-['dm'] text-black w-full mb-3">
                        Australia
                      </h3>
                      <p className="text-black">11 Mebblin Circuit</p>
                      <p className="text-black">Woongarrah</p>
                      <p className="text-black">Sydney</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-['dm'] text-black w-full mb-3">
                        India
                      </h3>
                      <p className="text-black">60-BB Shiv Vihar</p>
                      <p className="text-black">Jalandhar</p>
                      <p className="text-black">Punjab</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logo Section */}
              <div  className="w-full h-full overlow-hidden">
                {/* <AnimatedH1>ASHU DUREJA</AnimatedH1> */}
                <AnimatedText as="h1"  triggerStart="55% 70%" delay={0}
                  
                  className="text-[25vw] md:!text-[20vw] text-center text-black "
                >
                  ASHU DUREJA
                </AnimatedText>
              </div>

              {/* Copyright */}
              <div className="w-full flex flex-col -mt-6 items-start md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
                <p className="text-black">
                  Portfolio &copy;2025. All rights reserved.
                </p>
                <p className="text-black">21/12/2025</p>
              </div>
            </div>

            <style jsx>{`
              .footer-logo-char {
                position: relative;
                display: inline-block;
                will-change: transform, opacity;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
