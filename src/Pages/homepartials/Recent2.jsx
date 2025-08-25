import { useRef, useEffect } from "react";

const Card = ({ title, description, bg, textColor = "text-black", index }) => {
  return (
    <div className={`card w-full ${bg}`} id={`card-${index + 1}`}>
      <div className="card-inner min-h-screen w-full p-8 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        <div className="card-content flex-[3] flex flex-col justify-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${textColor} tracking-tight leading-tight`}>
            {title}
          </h1>
          <p className={`${textColor} text-lg md:text-xl lg:text-2xl font-medium tracking-wide leading-relaxed max-w-3xl`}>
            {description.split('**').map((part, i) => 
              i % 2 === 1 ? (
                <span key={i} className="text-lime-400 font-bold">{part}</span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>
        </div>
        <div className="card-img flex-1 w-full max-w-md lg:max-w-lg">
          <div className="aspect-video bg-gray-300 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={`https://picsum.photos/800/450?random=${index + 1}`}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CardStackComponent() {
  const cards = [
    {
      title: "WEB DEVELOPMENT",
      description: "BUILDING **HIGH-OCTANE** WEB APPS WITH REACT & NEXT.JS. FASTER. STRONGER. UNBREAKABLE.",
      bg: "bg-purple-300",
      textColor: "text-slate-900",
    },
    {
      title: "WEB DESIGNING", 
      description: "DESIGN THAT **CUTS THROUGH THE NOISE**. BOLD. INTUITIVE. UNFORGETTABLE.",
      bg: "bg-white",
      textColor: "text-slate-900",
    },
    {
      title: "SEO OPTIMIZATION",
      description: "DOMINATE **SEARCH RANKINGS**. ENGINEERED FOR VISIBILITY. OPTIMIZED FOR IMPACT.",
      bg: "bg-yellow-300",
      textColor: "text-slate-900",
    },
    {
      title: "BRAND STRATEGY",
      description: "FORGE **UNFORGETTABLE IDENTITIES**. STRATEGIC. POWERFUL. LEGENDARY.",
      bg: "bg-slate-900",
      textColor: "text-white",
    }
  ];

  const containerRef = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        const cardRect = card.getBoundingClientRect();
        const cardTop = cardRect.top + scrollTop;
        const progress = Math.max(0, Math.min(1, (scrollTop - cardTop + windowHeight * 0.5) / windowHeight));
        
        // Stack effect: move cards up as they stack
        const translateY = -progress * (cards.length - index) * 60;
        const scale = 1 - progress * 0.05;
        const opacity = 1 - progress * 0.1;
        
        const cardInner = card.querySelector('.card-inner');
        if (cardInner) {
          cardInner.style.transform = `translateY(${translateY}px) scale(${scale})`;
          cardInner.style.opacity = opacity;
        }
      });
    };

    // Smooth scroll effect
    let ticking = false;
    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', smoothScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', smoothScroll);
    };
  }, [cards.length]);

  return (
    <div className="app bg-slate-50" ref={containerRef}>
      {/* Hero Section */}
      <div className="min-h-screen bg-slate-900 w-full flex flex-col items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-lime-400 text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9] mb-8 animate-pulse">
            SO, WHAT <br /> I CAN <span className="text-white">(DO)</span>
          </h1>
          <p className="text-white/80 text-xs md:text-sm uppercase tracking-[0.5em] mt-8 font-mono animate-bounce">
            ↓ SCROLL TO UNLEASH ↓
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Cards Section */}
      <section className="cards relative">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="card-wrapper sticky top-0"
            style={{ zIndex: cards.length - index }}
          >
            <Card {...card} index={index} />
          </div>
        ))}
      </section>

      {/* Outro Section */}
      <section className="outro min-h-screen bg-white flex items-center justify-center px-8 relative">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
            Let's build a brand that <span className="text-lime-400">leaves a mark</span>.
          </h1>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}