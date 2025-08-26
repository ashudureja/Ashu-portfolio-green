import React from "react";
import { Link } from "react-router-dom";

import ParallaxImage from "../Components/ParallaxImage";

import { ReactLenis, useLenis } from "lenis/react";
import Footer from "../Components/Footer/Footer";
import Copy from "../Components/Copy";
import AnimatedText from "../Components/AnimatedText";
import Footer2 from "../Components/Footer2";
import Homelast from "../HomePartials/Homelast";
import { useEffect,useState ,useRef} from "react";

const Updates = () => {
  const lenis = useLenis(({ scroll }) => {});
  
 

  // Articles data array
   const articles = [
    {
      id: 1,
      image: "/projects/gd1.png",
      alt: "AI Voices Ba",
      date: "6.19.2024",
      category: "https://ashu-screenshots-gradient.netlify.app",
      title: "Gradly"
    },
    {
      id: 2,
      image: "/projects/at3.png",
      alt: "AI Ethics Discussion",
      date: "6.19.2024",
      category: "https://ashu-ai-trainer.netlify.app",
      title: "AI Trainer"
    },
    {
      id: 3,
     image: "/projects/mc2.png",
      alt: "Artists' Rights",
      date: "6.19.2024",
      category: "https://ashu-ecommerce.netlify.app",
      title: "Minimal Ecommerce"
    },
    {
      id: 4,
     image: "/projects/p4.png",
      alt: "AI and Music",
      date: "6.19.2024",
      category: "https://animehub12.netlify.app",
      title: "Anime Hub "
    },
    {
      id: 5,
     image: "/projects/pk4.png",
      alt: "AI and Music",
      date: "6.19.2024",
      category: "https://pokedoxmaster.netlify.app",
      title: "Pokedex"
    },
    {
      id: 6,
     image: "/projects/p5.png",
      alt: "Policy Reforms",
      date: "6.19.2024",
      category: "https://awards-animations.netlify.app",
      title: "Animation Library"
    },
     {
      id: 7,
     image: "/projects/p1.png",
      alt: "Policy Reforms",
      date: "6.19.2024",
      category: "https://yeezykanye.netlify.app",
      title: "Yeezy Store"
    },
     {
      id: 8,
     image: "/projects/bl.png",
      alt: "Policy Reforms",
      date: "6.19.2024",
      category: "https://ashu-awwwards.netlify.app",
      title: "Awards clone"
    },
    {
      id: 9,
     image: "/projects/algora.png",
      alt: "Policy Reforms",
      date: "6.19.2024",
      category: "https://ashu-ai.netlify.app",
      title: "AI Landing page"
    },
    {
      id: 10,
     image: "/projects/an2.png",
      alt: "Future of AI",
      date: "6.19.2024",
      category: "https://shirtthreed.netlify.app",
      title: "Anime Shirt"
    },
    
  ];

  const skills=["React","JavaScript","TailwindCSS","FramerMotion"]
  // Article component
  const ArticleCard = ({ article }) => (
    <a href={article.category} target="_blank" className="relative border group h-[400px] md:h-[470px] lg:h-[750px]  p-2 lg:p-5 border-white/30 ">
       <div className="absolute z-10 top-4 right-4 sm:top-7 sm:right-7 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/30 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                </div>
      
            
      <div  className="relative h-[300px] md:h-[350px] group  lg:h-[600px] overflow-hidden shadow-lg">
        <div className="absolute z-50 inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-300 "/>
               
        <ParallaxImage 
          src={article.image} 
          alt={article.alt}
          className=" hidden md:block
            "
        />
         <ParallaxImage 
          src={article.image} 
          alt={article.alt}
          speed={0.1}
          className=" block md:hidden
            "
        />
       
      </div>
      <div className=" w-full flex flex-col gap-5 items-center justify-center">
        <h3 className="!text-[8vw] text-lime-400 sm:text-xl mt-4 md:!text-[5.5vw] lg:!text-[4vw] font-medium leading-tight">
           "{article.title}"
        </h3>
        <div className="grid grid-cols-4 w-full">
            {skills.map((skill,i)=>{
            return(
                <h5 className="h-6 flex text-sm md:text-lg justify-center items-center   text-gray-300 border border-white/20">{skill}</h5>
            )
        })}
        </div>

      </div>
      
    </a>
  );

  return (
    <ReactLenis root>
      <div className="">
        {/* Updates Hero Section */}
        <section className="w-screen max-w-8xl mx-auto p-4 md:p-4 flex justify-center items-center bg-[#020617] text-lime-400 text-center px-4">
           <div className="overflow-hidden w-full h-full"> <h1 className="text-[26vw]  sm:!text-[22vw] leading-none ">Projects</h1></div>
          
        </section>

        {/* ArticlesSection */}
        <section className="w-full flex max-w-8xl mx-auto justify-center items-center bg-black text-white ">
          {/* Responsive Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2  max-w-8xl ">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          
        </section>

      <div className="mt-20">
         <Homelast/>
      </div>

        
      </div>
    </ReactLenis>
  );
};

export default Updates;