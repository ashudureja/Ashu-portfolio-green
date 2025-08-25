import React from "react";

const Home2 = () => {
  const items = [
    "Web Design",
    "Brand Identity",
    "Art Direction",
    "Visual Communication",
  ];

  // Duplicate items for seamless scrolling
  const doubledItems = [...items, ...items];

  return (
    <section className="flex items-center overflow-hidden h-12 lg:h-18 
      [mask-image:linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]">
      <ul className="flex gap-3 lg:gap-6 animate-marquee">
        {doubledItems.map((text, i) => (
          <li key={i} className="flex-shrink-0 uppercase text-4xl lg:text-6xl text-white font-[font1]  whitespace-nowrap">
            {text}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home2;
