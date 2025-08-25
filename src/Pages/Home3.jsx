import React from 'react'

const Home3 = () => {
    const portfolioImages = [
    { id: '01', src: '/api/placeholder/200/150', alt: 'Portfolio item 1' },
    { id: '02', src: '/api/placeholder/200/150', alt: 'Portfolio item 2' },
    { id: '03', src: '/api/placeholder/200/150', alt: 'Portfolio item 3' },
    { id: '04', src: '/api/placeholder/200/150', alt: 'Portfolio item 4' },
    { id: '05', src: '/api/placeholder/200/150', alt: 'Portfolio item 5' },
    { id: '06', src: '/api/placeholder/200/150', alt: 'Portfolio item 6' },
    { id: '07', src: '/api/placeholder/200/150', alt: 'Portfolio item 7' },
    
  ];
  return (
    <div className='w-full h-screen flex flex-col relative items-center'>
        <div className='flex flex-col text-center mt-40 ' >
            <p className='-mb-12'>YOUR CREATIVE VISION. FAST. ON-TIME. DELIVERED<br />
            TO YOUR CREATIVE STANDARDS.</p>
            <h1 className='tracking-tight !text-[17vw]'> FRONTEND DEVELOPER</h1>
            <p>AFTER WRAPPING SET AND SEEING ALL YOUR HARD WORK COME TO LIFE, YOU SHOULDN'T HAVE TO WORRY ABOUT ENTRUSTING<br />
            YOUR VISION TO SOMEONE ELSE. WE PROVIDE FULL-SERVICE POST-PRODUCTION WITH SEAMLESS COLLABORATION, SO YOU CAN<br />
            MAINTAIN YOUR CREATIVE STANDARDS AND VISION ALL THE WAY THROUGH FINISHING.</p>
        </div>
         <div className="grid grid-cols-7 gap-4 absolute bottom-10">
          {portfolioImages.map((image) => (
            <div key={image.id} className="relative group">
              <div className="text-xs font-bold mb-2 text-black">{image.id}</div>
              <div className="aspect-[5/3] w-40 bg-gray-300 overflow-hidden group-hover:opacity-80 transition-opacity cursor-pointer">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        
        
    </div>
  )
}

export default Home3