import React from 'react';
import ProjectsComponents from '../Components/ProjectsComponents';

const Projects = () => {
  return (
    <div className="w-full ">
      <div className="relative w-full h-72 md:h-72 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-poppins font-semibold text-white">
          Creative <span className='text-[#59ff89]'>Portfolio & Projects</span>
        </h1>
        <p className="text-md md:text-medium font-poppins text-white mt-2 max-w-3xl">
          Showcasing innovative ideas, unique designs, and hands-on projects that bring creativity to life. 
          Explore my work and journey through technology and art.
        </p>
      </div>
      <ProjectsComponents />
    </div>
  );
};

export default Projects;
