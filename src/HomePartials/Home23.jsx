import React from 'react'
import { LuArrowUpRight } from 'react-icons/lu'
import ParallaxImage from '../Components/ParallaxImage'
import { BorderBeam } from '../Components/BorderBeam'

const Home23 = () => {
  return (
   <div className='max-w-8xl mx-auto'>
     <div className="h-screen relative w-full bg-[#020617] p-4 lg:p-12 hidden lg:block">
     
      <div className="w-full h-full shadow-2xl  bg-gradient-to-br from-gray-900 via-[#020617] to-gray-900] border backdrop-blur-3xl border-white/10 flex items-center justify-center px-4">
        <div className="text-[2rem] sm:text-7xl md:text-8xl text-white leading-[1] font-[font2] text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-3">
            <span>A CREATIVE</span>
            <span className="hidden sm:inline-block rounded-full overflow-hidden w-44 h-14 mb-5">
              <img
                src="https://img.artpal.com/382091/179-2-49t.jpg"
                alt=""
                className="w-full h-full !object-cover mb-5 "
              />
            </span>
            <span>MIND</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3">
            <span>KNOWS</span>
            <span className="hidden sm:inline-block rounded-full overflow-hidden w-44 h-14 mb-5">
              <img
                src="https://img.artpal.com/382091/209-22-4-20-8-46-37m.jpg"
                alt=""
                className="w-full h-full !object-cover"
              />
            </span>
            <span>HOW TO DO</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3">
            <span>THE</span>
            <span className="inline-flex mb-4 relative items-center justify-center bg-lime-400 text-black rounded-full w-16 h-16 text-5xl">
              <LuArrowUpRight className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </span>
            <span>RIGHT THING AT</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3">
            <span>THE RIGHT PLACE AND</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3">
            <span>AT THE</span>
            <span className="hidden sm:inline-block rounded-full overflow-hidden w-40 h-14 mb-5">
              <img
                src="https://img.artpal.com/382091/205-22-4-8-13-27-39m.jpg"
                alt=""
                className="w-full h-full !object-cover"
              />
            </span>
            <span>RIGHT TIME</span>
          </div>
        </div>
      </div>
    </div>
    <div className='block lg:hidden w-full p-4'>
      <div className='text-center  p-5 text-white/70 text-[10.5vw] md:text-[8.5vw] font-[font2] leading-[1.2]'>A CREATIVE MIND KNOWS HOW TO DO RIGHT THING AT THE RIGHT PLACE AND A THE RIGHT TIME</div>
      
    </div>
   </div>
  )
}

export default Home23