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
    <a href={article.category} target="_blank" className="relative border group h-[500px] lg:h-[750px]  p-2 lg:p-5 border-white/30 ">
      
            
      <div  className="relative h-[400px] sm:h-[350px] group  lg:h-[600px] overflow-hidden shadow-lg">
        <div className="absolute z-50 inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-300 "/>
               
        <ParallaxImage 
          src={article.image} 
          alt={article.alt}
          className=" 
            "
        />
       
      </div>
      <div className=" w-full flex flex-col gap-5 items-center justify-center">
        <h3 className="text-lg text-lime-400 sm:text-xl mt-4 lg:text-2xl font-medium leading-tight">
           "{article.title}"
        </h3>
        <div className="grid grid-cols-4 w-full">
            {skills.map((skill,i)=>{
            return(
                <h5 className="h-6 flex justify-center items-center   text-gray-300 border border-white/20">{skill}</h5>
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
        <section className="w-screen h-[50vh] sm:h-[45vh] flex justify-center items-center bg-[#020617] text-lime-400 text-center px-4">
           <div className="overflow-hidden w-full h-full"> <h1 className="text-[18vw]  sm:!text-[22vw] leading-none ">Projects</h1></div>
          
        </section>

        {/* ArticlesSection */}
        <section className="w-full flex justify-center items-center bg-black text-white ">
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