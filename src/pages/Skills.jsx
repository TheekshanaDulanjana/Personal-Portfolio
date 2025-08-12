import React from 'react';
import DesignWorkComponents from '../Components/DesignWorkComponents';

import ReactLogo from '../assets/React.png';
import ReactNativeLogo from '../assets/ReactNative.png';
import ExpressLogo from '../assets/Express.png';
import NodeLogo from '../assets/Node.png';
import MongoDBLogo from '../assets/Mongo.png';
import FirebaseLogo from '../assets/Firebase.png';
import MySQLLogo from '../assets/MySQL.png';
import TailwindLogo from '../assets/Tailwind.png';
import HTMLLogo from '../assets/HTML.png';
import CSSLogo from '../assets/CSS.png';
import JSLogo from '../assets/JS.png';
import PythonLogo from '../assets/Python.png';
import WordPressLogo from '../assets/Wordpress.png';
import GitLogo from '../assets/Git.png';
import MaterialUILogo from '../assets/Matirial.png';
import VSCodeLogo from '../assets/VSCode.png';
import FigmaLogo from '../assets/Figma.png';
import PostmanLogo from '../assets/Postman.png';

const skills = [
  { name: 'React', logo: ReactLogo },
  { name: 'React Native', logo: ReactNativeLogo },
  { name: 'Express', logo: ExpressLogo },
  { name: 'Node.js', logo: NodeLogo },
  { name: 'MongoDB', logo: MongoDBLogo },
  { name: 'Firebase', logo: FirebaseLogo },
  { name: 'MySQL', logo: MySQLLogo },
  { name: 'Tailwind CSS', logo: TailwindLogo },
  { name: 'HTML', logo: HTMLLogo },
  { name: 'CSS', logo: CSSLogo },
  { name: 'JavaScript', logo: JSLogo },
  { name: 'Python', logo: PythonLogo },
  { name: 'WordPress', logo: WordPressLogo },
  { name: 'Git', logo: GitLogo },
  { name: 'Material UI', logo: MaterialUILogo },
  { name: 'VS Code', logo: VSCodeLogo },
  { name: 'Figma', logo: FigmaLogo },
  { name: 'Postman', logo: PostmanLogo },
];

const Skills = () => {
  return (
    <div className="w-full py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="mb-6 px-2 sm:px-4 md:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-poppins font-semibold text-white">
            Skills that <span className="text-[#59ff89]">Tell My Story</span>
          </h1>
          <p className="text-sm sm:text-md md:text-lg font-poppins text-white mt-2 max-w-full sm:max-w-xl md:max-w-3xl mx-auto">
            Every skill here is more than a line on a resume — it’s a story of challenges faced, problems solved, and creativity unleashed.
          </p>
        </div>
        <div className="relative w-full max-w-7xl mt-10 p-4 sm:p-6 rounded-xl flex flex-col items-center justify-between backdrop-blur-xs shadow-lg outline-1 outline-white overflow-hidden">
          <h2 className="text-lg sm:text-xl md:text-2xl text-[#59ff89] mb-8 mt-5 font-semibold uppercase z-10 text-center px-2">
            Skilled in the full spectrum of development technologies
          </h2>
          <div className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3 sm:gap-4 justify-items-center z-10 px-2 sm:px-0">
            {skills.map(({ name, logo }, index) => (
              <div key={index} className="flex flex-col items-center space-y-0.5">
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center overflow-hidden cursor-pointer filter grayscale hover:grayscale-0 transition duration-300"
                  title={name}
                >
                  <img
                    src={logo}
                    alt={name}
                    className="w-20 h-20 sm:w-20 sm:h-20 md:w-22 md:h-22 object-contain"
                  />
                </div>
                <span className="text-white text-xs sm:text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
          {/* Glow effect under images and text */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#59ff89]/40 to-transparent rounded-b-xl blur-3xl z-0" />
        </div>
      </div>
      <DesignWorkComponents />
    </div>
  );
};

export default Skills;
