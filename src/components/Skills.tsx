import React from "react";
import { techStack } from '../dataStatic/dataStatic'

const Skills = () => {
  return (
    <div className="flex flex-col">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        Tech Stack
      </h2>
      <div className="grid grid-cols-3  sm:grid-cols-5 gap-4 mt-5">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <div className="w-8 h-8  md:w-12 md:h-12 mb-2">
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-sm text-center">{tech.name}</span>
            </div>
          ))}
        </div>
    </div>
  );
};



export default Skills;
