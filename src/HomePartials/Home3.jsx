import React from 'react';

// You can create this as a separate component file, e.g., BestProject.jsx
const BestProject = () => {
  // --- Helper constants for content ---
  const tags = ['REACT', 'JAVASCRIPT', 'TAILWIND CSS', 'GSAP'];
 
  const projects = [
    { id: 4, image: "./projects/gd1.png", title: "Gradly", description: "Brand identity system", to: "https://ashu-screenshots-gradient.netlify.app" },
    { id: 3, image: "./projects/at3.png", title: "AI Trainer", description: "Interactive experience", to: "https://ashu-ai-trainer.netlify.app" },
    { id: 5, image: "./projects/mc2.png", title: "Minimal Ecommerce", description: "Motion graphics reel", to: "https://ashu-ecommerce.netlify.app/" },
    { id: 1, image: "./projects/p4.png", title: "Anime Hub", description: "Creative design showcase", to: "https://animehub12.netlify.app" },
    { id: 2, image: "./projects/pk4.png", title: "Pokedex", description: "Digital art collection", to: "https://pokedoxmaster.netlify.app" },
    { id: 6, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop", title: "All projects", description: "special card", to: "/projects" },
  ];

  // --- SVG Icons (as components) ---
  const PlusCircleIcon = () => (
    <div className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
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

  const ArrowIcon = () => (
    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-lime-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </div>
  );

  return (
    <div className="bg-[#020617] max-w-8xl mx-auto text-white font-sans p-4 sm:p-6 md:p-8 lg:p-12 mt-5 sm:mt-0">
      {/* ======================= Header Section ======================= */}
      <div className="mb-8 sm:mb-10 md:mb-12 ">
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Title */}
          <h1 className="text-7xl text-center sm:text-left xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-[font1] leading-tight">
            BEST PROJECTS
          </h1>
         
          {/* Tags */}
          <div className=" flex-wrap gap-2 sm:gap-3 md:gap-4 hidden sm:flex ">
            {tags.map((tag) => (
              <div
                key={tag}
                className="border bg-black/20 backdrop-blur-sm border-white/20 text-gray-400 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 cursor-pointer hover:bg-gray-800 transition-colors"
              >
                <PlusCircleIcon />
                <div>{tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================= Grid Section ======================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-3 sm:gap-4 min-h-[600px] sm:min-h-[700px] md:min-h-[800px]">
        {projects.map((project, index) => {
          // Special handling for the last item (All Projects card)
          if (index === projects.length - 1) {
            return (
              <a
                key={project.id}
                href={project.to}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 min-h-[250px] sm:min-h-[250px] md:min-h-[300px]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0" style={{ backgroundImage: `url('${project.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-all duration-300"></div>
                
                {/* Arrow Icon */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-black/20 backdrop-blur-sm border border-white/20 group-hover:bg-emerald-500/80 group-hover:border-emerald-400 transition-all duration-300 rounded-xl p-2 sm:p-2.5 md:p-3">
                  <ArrowIcon />
                </div>
                
                {/* Title */}
                <div className="absolute bottom-2 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4 md:bottom-3 md:left-6 md:right-6">
                  <div className="bg-black/20 flex items-center justify-center flex-col backdrop-blur-sm border border-white/10 rounded-lg p-2 sm:p-2.5 md:p-3 group-hover:bg-black/40 group-hover:border-white/20 transition-all duration-300">
                    <div className="text-base sm:text-lg md:text-xl font-bold text-white uppercase tracking-wide font-[font2] text-center">
                      {project.title}
                    </div>
                  </div>
                </div>
              </a>
            );
          }

          // Regular project cards
          return (
            <a
              key={project.id}
              href={project.to}
              target='_blank'
              rel="noopener noreferrer"
              className="group cursor-pointer relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-slate-800 to-slate-900 min-h-[250px] sm:min-h-[250px] md:min-h-[300px]"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.image}')` }}
              ></div>
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6">
                <div className="transform translate-y-2 sm:translate-y-3 md:translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <div className="bg-black/20 flex items-center justify-center flex-col backdrop-blur-sm border border-white/10 rounded-lg p-2 sm:p-2.5 md:p-3 group-hover:bg-black/40 group-hover:border-white/20 transition-all duration-300">
                    <div className="text-base sm:text-lg md:text-xl font-bold text-white uppercase tracking-wide font-[font2] text-center">
                      {project.title}
                    </div>
                  </div>
                </div>
                
                {/* Subtle hover indicator */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default BestProject;