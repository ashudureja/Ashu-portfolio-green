import React, { useState } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

// Note: Ensure you have 'font1' and 'font2' configured in your tailwind.config.js.
// If not, replace font-[font1] and font-[font2] with standard classes like 'font-serif' or 'font-sans'.

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  const tags = ['DESIGN', 'DEVELOPMENT', 'SEO'];
  
  const PlusCircleIcon = () => (
    <div className="w-4 h-4 text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );

  const services = [
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Building robust, scalable, and performant web applications tailored to your business needs needs.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 'web-design',
      name: 'Web Design',
      description: 'Creating visually stunning, intuitive, and user-friendly interfaces that captivate your audience and enhance user experience.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 'web-animations',
      name: 'Web Animations',
      description: 'Bringing your website to life with smooth, performant, and engaging animations using modern CSS and JavaScript techniques.',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 'brand-story',
      name: 'Brand Story',
      description: 'Crafting compelling narratives and visual brand identities that resonate with your target market and tell your  story.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=300&fit=crop&crop=center'
    }
  ];

  const handleInteraction = (id) => {
    // This function toggles the active service, creating an accordion effect on tap
    setActiveService(activeService === id ? null : id);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen p-4 sm:p-8 md:p-12 mt-2">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-20">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 md:gap-4">
            <h1 className="text-7xl text-center md:text-left sm:text-7xl md:text-9xl text-white font-[font1] ">
              I CAN DO
            </h1>
            <div className=" flex-wrap gap-2 md:gap-3 self-start md:self-end hidden md:flex">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="border border-gray-700 text-gray-400 rounded-full px-4 py-2 text-xs sm:text-sm flex items-center gap-2 hover:bg-gray-800 hover:text-white focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all"
                >
                  <PlusCircleIcon />
                  <span>{tag}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services List Container */}
        <div className="border-t border-white/20">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative" // `group` enables child styling on hover
              // Desktop hover events
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div 
                className="border-b border-white/20 p-4 sm:px-1 cursor-pointer"
                // Click/tap event for all devices
                onClick={() => handleInteraction(service.id)}
                // Accessibility attributes
                role="button" 
                tabIndex={0} 
                onKeyDown={(e) => e.key === 'Enter' && handleInteraction(service.id)}
              >
                <div className="flex justify-center md:justify-between items-center py-3">
                  <div className={`  text-3xl sm:text-4xl md:text-5xl font-[font2] transition-colors duration-300  text-white`}>
                    {service.name}
                  </div>
                  <MdOutlineArrowOutward 
                    className={`hidden md:block text-4xl md:text-6xl transition-all duration-300 transform ${activeService === service.id ? 'text-white' : 'text-gray-600 group-hover:text-white group-hover:rotate-45'}`} 
                  />
                </div>
                
                {/* Accordion content for mobile/tablet (hidden on desktop) */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden max-h-96 pb-4 $`}>
                  <div className="w-full h-45 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-white/70  text-center font-[font2] px-7 ">{service.description}</p>
                </div>
              </div>
              
              {/* Floating image for desktop (hidden on mobile/tablet) */}
              <div 
                className={`
                  pointer-events-none z-50 
                  absolute right-20 top-1/2 -translate-y-1/2
                  w-40 h-50 rounded-sm 
                  opacity-0 transition-all duration-300 scale-95
                  hidden md:block  group-hover:opacity-100
                  
                `}
              >
                <img 
                  src={service.image} 
                  alt={service.name}
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