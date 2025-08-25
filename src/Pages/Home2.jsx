import React from 'react';

export default function Home2() {
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
    <div className="h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-black font-bold text-lg">CS</div>
        <div className="flex space-x-8 text-black font-bold text-sm tracking-wider">
          <a href="#" className="hover:opacity-70 transition-opacity">ABOUT</a>
          <a href="#" className="hover:opacity-70 transition-opacity">SERVICES</a>
          <a href="#" className="hover:opacity-70 transition-opacity">CONTACT</a>
          <a href="#" className="hover:opacity-70 transition-opacity">REEL</a>
        </div>
        <div className="text-black">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
      </nav>

      {/* Main Content */}
      <div className="  ">
        {/* Tagline */}
        <div className="text-center ">
          <p className="text-black font-bold text-sm   max-w-2xl mx-auto ">
            YOUR CREATIVE VISION. FAST. ON-TIME. DELIVERED<br />
            TO YOUR CREATIVE STANDARDS.
          </p>
        </div>

        {/* Main Title */}
        <div className="text-center mb-2">
          <h1 className="text-black font-black text-[12rem] md:text-[16rem] lg:text-[20rem] leading-none tracking-tight ">
            FRONTEND DEVELOPER
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-20">
          <p className="text-black font-bold text-xs tracking-wider max-w-4xl mx-auto leading-relaxed">
            AFTER WRAPPING SET AND SEEING ALL YOUR HARD WORK COME TO LIFE, YOU SHOULDN'T HAVE TO WORRY ABOUT ENTRUSTING<br />
            YOUR VISION TO SOMEONE ELSE. WE PROVIDE FULL-SERVICE POST-PRODUCTION WITH SEAMLESS COLLABORATION, SO YOU CAN<br />
            MAINTAIN YOUR CREATIVE STANDARDS AND VISION ALL THE WAY THROUGH FINISHING.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="px-6 ">
        <div className="grid grid-cols-7 gap-4">
          {portfolioImages.map((image) => (
            <div key={image.id} className="relative group">
              <div className="text-xs font-bold mb-2 text-black">{image.id}</div>
              <div className="aspect-[4/3] bg-gray-300 overflow-hidden group-hover:opacity-80 transition-opacity cursor-pointer">
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
    </div>
  );
}