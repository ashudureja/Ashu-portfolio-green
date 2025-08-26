import React from 'react';

export default function Skills() {
  const skills = [
    { name: 'React', percentage: 98 },
    { name: 'JavaScript', percentage: 99 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 90 },
    { name: 'HTML5', percentage: 93 },
    
    
  ];

  return (
    <div className=" rounded-lg w-full">
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-white !font-medium text-lg">
                {skill.name}
              </p>
              <span className="text-gray-300 font-medium text-lg font-[font2]">
                {skill.percentage}%
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-[5px] md:h-2">
              <div 
                className="bg-lime-400 h-[5px] md:h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}