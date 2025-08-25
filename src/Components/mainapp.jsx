import React from 'react'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Page from './Pages/about/page'
import About2 from './Pages/About2'
import Contact from './Pages/contact/Contact'
import Home from './Pages/Home'
import Home2 from './Pages/Home2'
import Home3 from './Pages/Home3'
import Second from './Pages/homepartials/Second'
import Recent from './Pages/homepartials/Recent'
import Home4 from './Pages/Home4'
import Skills from './Components/Skills'
import Skills2 from './Components/Skills2'
import Recent2 from './Pages/homepartials/Recent2'
import PortfolioComponent from './Pages/homepartials/PortfolioComponent'
import Projects2 from './Pages/homepartials/Projects2'
import React1 from './Pages/homepartials/React1'
import Home5 from './Pages/Home5'
import Home8 from './Pages/Home8'
import Nav from './Components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div className='bg-black '>
      <Routes>
        <Route path="/" element={<Home5/>}> </Route>
        <Route path="/about" element={ <About2/>}> </Route>
        <Route path="/work" element={<Projects/>}> </Route>
        <Route path="/contact" element={<Contact/>}> </Route>
        
      </Routes>

      
      
       {/* <div className="absolute overflow-hidden  !h-70 !w-70 top-0 right-0 ">
            <ParallaxImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vjX0q7-4dBms-8g4ONDH9xOmhhvpICdHyQ&s"></ParallaxImage>
          </div>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vjX0q7-4dBms-8g4ONDH9xOmhhvpICdHyQ&s"
            className="absolute  !h-50 !w-50 bottom-0 left-0 "
          ></img>
       */}
     
      

      
    </div>
  )
}

export default App