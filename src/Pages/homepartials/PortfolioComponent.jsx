import React from 'react';

const PortfolioComponent = () => {
  const portfolioItems = [
    { id: '01', type: 'PW', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop' },
    { id: '02', type: 'PW', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop' },
    { id: '03', type: 'PW', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop' },
    { id: '04', type: 'PW', image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&h=300&fit=crop' },
    { id: '05', type: 'PW', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop' },
    
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Main Content Area */}
      <div className="bg-white  ">
        {/* Header */}
        <div className="flex justify-between items-start p-6 md:p-8">
          <div className="text-left">
            <p className="text-xs md:text-sm font-bold tracking-wider uppercase">
              ARON BERTSHA<br />
              DIGITAL DESIGNER<br />
              & ART DIRECTION
            </p>
          </div>
          
          <p className="text-center text-xs md:text-sm font-bold tracking-wider uppercase">
            INSTAGRAM<br />
            BEHANCE<br />
            LINKEDIN
          </p>
          
          <p className="text-right text-xs md:text-sm font-bold tracking-wider uppercase">
            ABOUT
          </p>
        </div>

        {/* Main Title */}
        <div className="px-6 md:px-8 mb-8 md:mb-12">
          <h2 className=" font-black !text-[12vw]  !leading-[0.9]">
            SELECTED<br />
            (PROJECTS) <br />
            ©16-24
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="">
          <div className="bg-black p-4 md:p-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
              {portfolioItems.map((item, index) => (
                <div key={item.id} className="relative group cursor-pointer">
                  <div className="aspect-[4/5] h-50 bg-gray-200 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={`Portfolio item ${item.id}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-xs p-1 md:p-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">({item.id.padStart(2, '0')})</span>
                      <span className="font-bold">{item.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;