import React from 'react'
import Copy from '../../Components/Copy'
import { ReactLenis, useLenis } from "lenis/react";

const Second = () => {
  return (
    <ReactLenis 
      root 
      // options={{
      //   lerp: 0.1, // Lower values make scrolling slower (0.1 is very smooth/slow)
      //   duration: 5.5, // Longer duration slows down the scroll
      //   smoothWheel: true, // Enables smooth wheel scrolling
      //   syncTouch: true, // Smooth scrolling for touch devices
      //   syncTouchLerp: 0.1, // Slows touch scrolling too
      // }}
    >
      <div className='bg-white text-black relative w-screen min-h-screen'>
        <div className='absolute top-5 right-5 aspect-[3/4] h-50 bg-red-100'></div>
        <div className='absolute bottom-8 left-5 !text-[2vw]'>
          <Copy> 
            <h2 className='whitespace-nowrap'> 
              ©‘27 ASHU <span className='h-20 whitespace-nowrap aspect-[3/2] bg-amber-100 inline-block'></span> DUREJA
            </h2>
            <h2 className='indent-55 whitespace-nowrap'>Frontend developer</h2>
            <h2 className='whitespace-nowrap'>SPECIALIZed IN <span className='h-20 aspect-[3/2] bg-amber-100 inline-block'></span></h2>
          </Copy>
          <div className='flex gap-2'>
            <Copy>
              <h2 className='indent-10 whitespace-nowrap !leading-[1]'>JAVASCRIPT AND</h2>
            </Copy>
            <Copy>
              <h2 className='text-lime-400 whitespace-nowrap !leading-[1]'>(REACT)</h2>
            </Copy>
          </div>
        </div>
      </div>
    </ReactLenis>
  )
}

export default Second