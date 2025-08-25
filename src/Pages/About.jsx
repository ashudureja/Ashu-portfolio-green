import React from 'react'
import ParallaxImage from '../Components/ParallaxImage'
import { ReactLenis, useLenis } from "lenis/react";
import Footer from '../Components/Footer/Footer';

const About = () => {
    const lenis = useLenis(({ scroll }) => {});
  return (
    <ReactLenis root> <div className='min-h-screen flex  flex-col  items-center w-full bg-[#020617]'>
        <section className="w-screen h-[50vh] sm:h-[50vh] flex justify-center items-center bg-[#020617] text-[#f9f4eb] text-center px-4">
          <h1 className="text-[18vw] sm:text-[22.75vw] leading-none font-bold">
            About me
          </h1>
          
        </section>
        <div className='text-[#f9f4eb] items-center justify-center flex flex-col gap-10 '>
            <h5 className='max-w-2xl w-full text-center !leading-[2vw]'> I’M ABUBAKAR QOREEBULLAH, BUT YOU CAN REFER TO ME AS "QOREEB." I’M A FREELANCE ART DIRECTOR, CREATIVE VISUAL DESIGNER, UI MOTION DESIGN ENTHUSIAST, AND A WEBFLOW DEVELOPER. I DESIGN MEMORABLE WEB EXPERIENCES FOR BRANDS ACROSS INDUSTRIES.</h5>
            <p className='max-w-2xl w-full text-center !leading-[2vw]'> I’M ABUBAKAR QOREEBULLAH, BUT YOU CAN REFER TO ME AS "QOREEB." I’M A FREELANCE ART DIRECTOR, CREATIVE VISUAL DESIGNER, UI MOTION DESIGN ENTHUSIAST, AND A WEBFLOW DEVELOPER. I DESIGN MEMORABLE WEB EXPERIENCES FOR BRANDS ACROSS INDUSTRIES.</p>
            {/* <img className='!h-100 !w-100' src="https://manofmany.com/wp-content/uploads/2023/06/10-Most-Famous-Male-Models-of-All-Time.jpg"></img> */}
            <div className='!h-120 relative overflow-hidden !w-110 '>
                <ParallaxImage   src="https://manofmany.com/wp-content/uploads/2023/06/10-Most-Famous-Male-Models-of-All-Time.jpg" alt="profile"/>
            </div>
            <p className='max-w-2xl w-full text-center !leading-[2vw]'> I’M ABUBAKAR QOREEBULLAH, BUT YOU CAN REFER TO ME AS "QOREEB." I’M A FREELANCE ART DIRECTOR, CREATIVE VISUAL DESIGNER, UI MOTION DESIGN ENTHUSIAST, AND A WEBFLOW DEVELOPER. I DESIGN MEMORABLE WEB EXPERIENCES FOR BRANDS ACROSS INDUSTRIES.</p>
            <p className='max-w-2xl w-full text-center !leading-[2vw] mb-10'> I’M ABUBAKAR QOREEBULLAH, BUT YOU CAN REFER TO ME AS "QOREEB." I’M A FREELANCE ART DIRECTOR, CREATIVE VISUAL DESIGNER, UI MOTION DESIGN ENTHUSIAST, AND A WEBFLOW DEVELOPER. I DESIGN MEMORABLE WEB EXPERIENCES FOR BRANDS ACROSS INDUSTRIES.</p>
            
        </div>
        <div className='w-full h-screen bg-white'>


        </div>
        <Footer/>
    </div></ReactLenis>
   
  )
}

export default About 