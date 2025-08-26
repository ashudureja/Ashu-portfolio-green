import React, { useRef } from "react";
import ParallaxImage from "../Components/ParallaxImage";
import { ReactLenis, useLenis } from "lenis/react";
import Footer from "../Components/Footer/Footer";
import Skills from "../Components/Skills";
import Skills2 from "../Components/Skills2";
import AnimatedCopy from "../Components/AnimatedCopy/AnimatedCopy";
import AnimatedH1 from "../Components/AnimatedH1/AnimatedH1";
import AnimatedText from "../Components/AnimatedText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import ScrollTrigger from "gsap/ScrollTrigger";
import Copy from "../Components/Copy";
import { motion } from "framer-motion";
import Sun from "../Components/Sun";
import Homelast from "../HomePartials/Homelast";

const About2 = () => {
  const lenis = useLenis(({ scroll }) => {});
  const imageref = useRef();
  const container = useRef();
  const gym = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(CustomEase, ScrollTrigger);
      CustomEase.create(
        "hop",
        "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
      );
      gsap.to(imageref.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        delay: 0.3,
        duration: 1,
        ease: "hop",
      });
    },
    { scope: container }
  );

  // useGSAP(
  //   () => {
  //     const ctx = gsap.context(() => {
  //       // Background color animation
  //       const bgTween = gsap.to(gym.current, {
  //         backgroundColor: "#97df03",
  //         scrollTrigger: {
  //           trigger: gym.current,
  //           start: "-20% 50%",
  //           end: "bottom bottom",
  //         },
  //       });

  //       // Pinning the section
  //       const pinTrigger = ScrollTrigger.create({
  //         trigger: gym.current,
  //         start: "top top",
  //         end: "+=1300",
  //         pin: true,

  //         id: "pin-gym",
  //       });

  //       // Animate scrolling images
  //       const scrollingImages =
  //         gym.current.querySelectorAll(".scrolling-image");

  //       const imageTweens = Array.from(scrollingImages).map((img) =>
  //         gsap.to(img, {
  //           bottom: "120vh",
  //           scrollTrigger: {
  //             trigger: gym.current,
  //             start: "top top",
  //             end: "+=1300",
  //             scrub: true,
  //           },
  //           ease: "none",
  //         })
  //       );
  //     }, gym);

  //     // Cleanup function
  //     return () => ctx.revert();
  //   },
  //   { scope: container }
  // );

  return (
    <ReactLenis root>
      {" "}
      <div ref={container} className=" bg-[#020617]">
        {/* heading */}
        <section className="w-screen   flex justify-center items-center bg-[#020617] text-lime-400 text-center px-4">
          <div className="overflow-hidden w-full h-full">
            {" "}
            <h1 className="text-[30vw] hidden md:block sm:!text-[22vw] mt-5  md:mt-4 lg:mt-0 leading-none ">
              HELlLOOO!!
            </h1>
            <h1 className="text-[30vw] text-center ml-1 block md:hidden  sm:!text-[22vw] mt-5  md:mt-4 lg:mt-0 leading-none ">
              HELLOOO!!
            </h1>
          </div>
        </section>
        {/*  about*/}
        <section className=" p-6 lg:pl-10 bg-[#020617] text-[#f9f4eb]  w-full">
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <div className="bg-red-100 overflow-hidden h-full">
              <ParallaxImage src="/ashu2.jpg"></ParallaxImage>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-8">
                <h2 className="!text-[12vw] whitespace-nowrap hidden md:block ">
                  I'M <br /> ASHU DUREJA
                </h2>
                <h2 className="!text-[16vw] mt-4 text-center whitespace-nowrap block md:hidden ">
                  I'M ASHU DUREJA
                </h2>

                <h3 className="text-lime-400 whitespace-nowrap hidden md:block">
                  Frontend Deveolper & UI/UX DESIGNER
                </h3>
                <h3 className="text-lime-400 !text-[9vw] -mt-2 text-center whitespace-nowrap block md:hidden">
                  Frontend Deveolper & <br /> UI/UX DESIGNER
                </h3>

                <p className="sm:!text-[24px]  hidden md:block    ">
                  Hi, I’m Ashutosh Dureja, a 27-year-old web developer and
                  designer based in Sydney, currently pursuing a Masters degree
                  in IT. I’m passionate about creating modern, responsive
                  websites that combine clean UI/UX design with smooth, engaging
                  interactions. My favorite tools include React, Tailwind CSS,
                  and Framer Motion, which I use to build fast, elegant, and
                  animated user experiences. I love exploring the intersection
                  of design and development, bringing ideas to life through
                  thoughtful code and intuitive layouts. Outside of tech, I
                  enjoy going to the gym and watching anime—it keeps me balanced
                  and inspired. I believe in crafting digital experiences that
                  feel both beautiful and functional. I believe in crafting
                  digital experiences that feel both beautiful and
                  functional.This portfolio showcases my work, my style, and my
                  journey as a frontend developer. Thanks for stopping by, and I
                  hope you find something here that sparks your interest.
                </p>

                <p className="sm:!text-[24px] block md:hidden text-center   ">
                  Hi, I’m Ashutosh Dureja, a 27-year-old web developer and
                  designer based in Sydney, currently pursuing a Masters degree
                  in IT. I’m passionate about creating modern, responsive
                  websites that combine clean UI/UX design with smooth, engaging
                  interactions. My favorite tools include React, Tailwind CSS,
                  and Framer Motion, which I use to build fast, elegant, and
                  animated user experiences. I love exploring the intersection
                  of design and development, bringing ideas to life through
                  thoughtful code and intuitive layouts. Outside of tech, I
                  enjoy going to the gym and watching anime—it keeps me balanced
                  and inspired. I believe in crafting digital experiences that
                  feel both beautiful and functional.
                </p>
              </div>

              <button className="p-2 text-black bg-lime-400  mt-8 sm:mt-6 md:mt-0">
                {" "}
                <h3 className="!text-[6vw] md:!text-[4vw]">resume</h3>
              </button>
            </div>
          </div>
        </section>

        {/* skills*/}

        <section className="min-h-screen mt-4 sm:mt-2 md:mt-0 p-6 md:p-12 w-full bg-[#020617] text-white font-sans">
          {/* Education Section */}
          <div className="mb-12 md:mb-24">
            <div className="flex flex-row items-end justify-between mb-6 md:mb-8">
              <div className="overflow-hidden w-full h-full">
                {" "}
                <h1 className=" text-center md:text-left text-[16vw] md:!text-[13vw]  leading-[0.8]  text-lime-400 ">
                  {" "}
                  Education
                </h1>
              </div>
              <span className=" hidden md:block !md:text-lg !text-sm uppercase whitespace-nowrap tracking-widest text-gray-400 mt-2 md:mt-0">
                Academic Journey
              </span>
            </div>

            <motion.div
              whileInView={{ width: "100%" }}
              transition={{ duration: 1 }}
              className="h-px w-0 bg-gradient-to-r from-transparent via-white to-transparent mb-8 md:mb-12"
            ></motion.div>

            <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8">
              <div className="md:col-span-5 relative">
                <div className="md:sticky md:top-24">
                  <div className="hidden md:block h-32 w-32 bg-lime-400 mix-blend-overlay opacity-20 rounded-full absolute -left-10 -top-10"></div>
                  <p className=" text-center text-base md:text-lg leading-relaxed ">
                    My academic path has equipped me with both technical
                    expertise and strategic thinking capabilities.
                  </p>
                </div>
              </div>

              <div className="md:col-span-7 space-y-10 md:space-y-16 text-center md:text-left">
                <div className="relative   pl-4 md:pl-8 border-l-1 border-lime-400/30">
 <div className="absolute -left-[7px] md:-left-[9px]  h-3 w-3 md:h-4 md:w-4 rounded-full bg-lime-400"></div>
                  <div className="text-[7vw] md:text-[4vw] font-[font1]   uppercase mb-2">
                    Masters of Information Technology
                  </div>
                  <p className="text-gray-400 uppercase text-xs md:text-sm mb-1">
                    Kaplan Business School, Sydney
                  </p>
                  <p className="text-lime-400 font-mono text-xs md:text-sm">
                    [2023 - 2025]
                  </p>
                  <p className="mt-2 md:mt-4 text-gray-300 leading-relaxed text-sm md:text-base">
                    Specialized in Web Development with distinction honors.
                  </p>
                </div>
               <div className="relative pl-3 md:pl-8 border-l-2 border-lime-400/30">
 <div className="absolute -left-[7px] md:-left-[9px] top-0 h-3 w-3 md:h-4 md:w-4 rounded-full bg-lime-400"></div>
                  <div className="text-[7vw] md:text-[4vw]  font-[font1] uppercase mb-2">
                    Bachelor of Instrumentation Engineering
                  </div>
                  <p className="text-gray-400 uppercase text-xs md:text-sm tracking-wider mb-1">
                    NIT, Jalandhar
                  </p>
                  <p className="text-lime-400 font-mono text-xs md:text-sm">
                    [2018 - 2022]
                  </p>
                  <p className="mt-2 md:mt-4 text-gray-300 leading-relaxed text-sm md:text-base">
                    Focused on Instrumentation Systems, Control Engineering, and
                    Human-Machine Interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="flex p-6 flex-col-reverse md:flex-row md:items-end justify-between ">
              <span className=" hidden md:block md:text-lg !text-sm uppercase tracking-widest whitespace-nowrap text-gray-400 mt-2 md:mt-0">
                Technical Expertise
              </span>
              <div className="overflow-hidden w-full h-full">
                {" "}
                <h1 className=" text-[16vw] md:!text-[13vw] leading-[0.8]  text-lime-400 text-center md:text-end ">
                  Skills
                </h1>
              </div>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent mb-8 md:mb-12 origin-right"
            />

            <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8">
               <p className=" block md:hidden text-center text-base md:text-lg leading-relaxed  mb-4 md:mb-0">
                    A diverse skill set developed through academic projects and
                    real life experience.
                  </p>
              <div className="md:col-span-7">
                <Skills />{" "}
              </div>
              <div className="md:col-span-5">
                <div className="md:sticky md:top-24 hidden md:block ">
                  <p className="text-center text-base md:text-lg leading-relaxed text-gray-300 mb-4 md:mb-0">
                    A diverse skill set developed through academic projects and
                    real life experience.
                  </p>
                  <div className=" mt-4 md:mt-8 p-4 md:p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                    <h4 className="text-lime-400 !text-[4vw] font-bold mb-3 md:mb-4">
                      Key Strengths
                    </h4>
                    <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                      <li className="flex items-center">
                        <span className="h-1 w-3 md:w-4 bg-lime-400 mr-2"></span>
                        Problem Solving
                      </li>
                      <li className="flex items-center">
                        <span className="h-1 w-3 md:w-4 bg-lime-400 mr-2"></span>
                        Technical Architecture
                      </li>
                      <li className="flex items-center">
                        <span className="h-1 w-3 md:w-4 bg-lime-400 mr-2"></span>
                        Cross-functional Collaboration
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* gym*/}

        {/* <section
          ref={gym}
          className="bg-[#020617] text-black relative h-screen w-full flex justify-center items-center overflow-hidden"
        >
         
          <img
            src="/bb1.jpg"
            alt="Gym equipment"
            className="scrolling-image bottom-[-70vh] left-10 absolute !w-100 !h-100 object-cover  z-10"
          />
          <img
            src="bb2.JPG"
            alt="Gym workout"
            className="scrolling-image absolute bottom-[-200vh] left-[30vw]  !w-100 !h-120 object-cover    z-10"
          />
          <img
            src="bb4.JPG"
            alt="Gym interior"
            className="scrolling-image absolute !w-100 !h-120 bottom-[-300vh] right-0 object-cover z-20"
          />
          <img
            src="bb3.JPG"
            alt="Gym interior"
            className="scrolling-image absolute !w-100 !h-100 bottom-[-450vh] right-60 object-cover  z-20"
          />

          
          <Copy y={-7}>
            {" "}
            <h2 className="relative whitespace-nowrap  w-220 !text-[9vw] pointer-events-none">
              <span className="text-[#97df03]">
                i am ashuuuuuuuuuuuuuuuuuuuuiuuuuuuuuuuuuuuuuu
              </span>
              "Besides
              <br />
              coding,I occasionally
              <br /> challenge gravity at
              <br /> the gym."
            </h2>
          </Copy>

          <p className="absolute bottom-10 right-60 w-63 !text-[15px] z-10  pointer-events-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Curabitur
            suscipit suscipit tellus. Maecenas tincidunt, tortor nec facilisis,
            sapien eros, ultrices et, posuere et, nisl. Nulla facilisi. Etiam
            imperdiet magna.
          </p>
        </section> */}

        {/* chicky bhaiya*/}

        {/* <section className="relative w-screen py-32 overflow-hidden">
          <div className="relative w-1/2 mx-auto">
            <div className="relative pl-8">
             
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1 }}
                className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white/30 to-transparent origin-top"
              />

              <Copy  triggerStart="1300 75%">
                <h3 className="mb-12 !text-xl md:!text-[4vw] md:!leading-[0.9] text-white w-100 sm:w-full whitespace-nowrap">
                  "Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit. Curabitur
                  <br /> varius, erat nec fermentum gravida,
                  <br /> magna justo cursus leo, vitae sagittis
                  <br /> nulla sapien eget."
                </h3>
              </Copy>
              <div className="w-[200px] mt-50 mb-5">
                <img
                  src="https://palashchhabra.com/static/media/face-home.e61e21a7.png"
                  alt=""
                />
              </div>
              <div className="founter-info text-white">
                <p className="!text-[2vw] !font-semibold">Palash Chhabra</p>
                <p className="text-lime-400">Senior Frontend Developer</p>
              </div>
            </div>
          </div>
        </section> */}
        <Homelast />
      </div>
    </ReactLenis>
  );
};

export default About2;
