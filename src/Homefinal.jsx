import React from 'react'
import Home1 from './HomePartials/Home1'
import Home2 from './HomePartials/Home2'
import Home3 from './HomePartials/Home3'
import Homelast from './HomePartials/Homelast'
import { ReactLenis, useLenis } from "lenis/react";
import Skills from './Components/Skills'
import { Example } from './HomePartials/Skills'
import Home23 from './HomePartials/Home23'
import ServicesSection from './HomePartials/Home22'
import ProjectsHome from './Pages/ProjectsHome'

const Homefinal = () => {
   const lenis = useLenis(({ scroll }) => {});
  return (
    
       <ReactLenis root>
         <Home1/>
          <Home2/>
         {/* <ProjectsHome/> */}
         
        
         <Home3/>
        
          <Example/>
          <Home23/>
           <ServicesSection/>
        
        
        
       
       
       
        <Homelast/>
       </ReactLenis>
       
   
  )
}

export default Homefinal