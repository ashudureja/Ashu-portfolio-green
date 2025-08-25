import React from "react";
import ParallaxImage from "../../Components/ParallaxImage";
import { Link } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import Footer from "../../Components/Footer/Footer";
import Copy from "../../Components/Copy";

const Projects2 = () => {
  return (
      <ReactLenis root 
  > <section className="latest-updates ">
    <Copy> <h1 className="w-full !text-[15vw] !leading-[0.85] indent-3"> SELECTED<br />
            (PROJECTS) <br />
            ©16-24</h1></Copy>
     
      {/* <p className="lp-tagline">
        Explore the latest updates, comprehensive guidelines, and valuable
        resources at the crossroads of AI innovation and the music industry.
      </p> */}

      <div className="updates-page-link">
        <Link to="/">View All Updates</Link>
      </div>
      <div className="w-full grid grid-cols-2 gap-5 bg-black p-5">
        <div className="h-120 border border-white/20  overflow-hidden">
           <ParallaxImage src="/updates/article1.jpg" alt="" speed={0.1} />

        </div>
         <div className="h-120 overflow-hidden border border-white/20">
            <ParallaxImage src="/updates/article2.jpg" alt="" speed={0.1} />

        </div>

      </div>
     
    </section>
     <Footer/></ReactLenis>
   
  );
};

export default Projects2;
