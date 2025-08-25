import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";
import { GiWhirlpoolShuriken } from "react-icons/gi";

const Navbar = () => {
  const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'];
  const [scrollPercent, setScrollPercent] = useState(0);
   

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const totalScroll = docHeight - windowHeight;
    

 
    
    if (totalScroll <= 0) {
      setScrollPercent(0);
      return;
    }
    
    const scroll = (scrollTop / totalScroll) * 100;
    setScrollPercent(Math.min(100, Math.round(scroll)));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   

  return (
    <div className='w-full hidden md:block fixed top-5 px-10' style={{ zIndex: 150, mixBlendMode: 'difference' }}>
      <div className="text-white">
        <div className='flex justify-between items-center'>
       <GiWhirlpoolShuriken className='text-xl transition-transform ease-linear' style={{ rotate: `${(scrollPercent / 100) * 360}deg` }} />

          <div className='flex items-center justify-center gap-[36px] nav'>
            {/* {navItems.map((item) => (
              <Link
                key={item}
                to={item === 'HOME' ? '/' : `${item.toLowerCase()}`}
                className="relative group flex flex-col items-center justify-center hover:opacity-80 transition-opacity duration-300 ease-out"
              >
                <span className="relative z-10 ">({item})</span>
                 <span className="absolute inline-block bottom-0 left-0 w-0 h-px bg-white transition-all duration-500 ease-out group-hover:w-[99%]"></span>
                
               
               
              </Link>
              
            ))} */}
          </div>
          <div className='w-10 text-end'>
            <p className=''>{scrollPercent}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;