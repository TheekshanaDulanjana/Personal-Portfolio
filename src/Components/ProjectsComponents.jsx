import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import randulaweb from '../assets/randulaweb.png';
import ieeecskdu from '../assets/ieeecskdu.png';
import uniboard from '../assets/uniboard.png';
import myportfolio from '../assets/myportfolio.png';
import cinnoman from '../assets/cinnoman.png';

import ReactLogo from '../assets/react-logo.png';
import NodeLogo from '../assets/node-logo.png';
import PhotoshopLogo from '../assets/photoshop-logo.png';

const images = [
  { 
    title: 'Ceylon Cinnamon Legends', 
    imageUrl: cinnoman, 
    projectID: 'randulajeyphotography.com',
    description: 'sample descrip for the website need add  ',
    technologies: [ReactLogo, NodeLogo, PhotoshopLogo]
  },
  { 
    title: 'My Personal Portfolio', 
    imageUrl: myportfolio, 
    projectID: '13DBxHgDcalyG5S3ef6MUHKvlZNDTwP6I?usp',
    description: 'sample descrip for the website need add',
    technologies: [ReactLogo, NodeLogo, PhotoshopLogo]
  },
  { 
    title: 'Randula Jey Photography', 
    imageUrl: randulaweb, 
    projectID: '13DBxHgDcalyG5S3ef6MUHKvlZNDTwP6I?usp',
    description: 'sample descrip for the website need add',
    technologies: [ReactLogo, NodeLogo, PhotoshopLogo]
  },
  { 
    title: 'IEEE Computer Society KDU', 
    imageUrl: ieeecskdu, 
    projectID: '13DBxHgDcalyG5S3ef6MUHKvlZNDTwP6I?usp',
    description: 'sample descrip for the website need add',
    technologies: [ReactLogo, NodeLogo, PhotoshopLogo]
  },
  { 
    title: 'UniBoard', 
    imageUrl: uniboard, 
    projectID: '13DBxHgDcalyG5S3ef6MUHKvlZNDTwP6I?usp',
    description: 'sample descrip for the website need add',
    technologies: [ReactLogo, NodeLogo, PhotoshopLogo]
  },
];

const INITIAL_COUNT = 4;
const INCREMENT = 2;

function ProjectCard({ item, index }) {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (isActive) {
      navigate(`/album/${item.projectID}`);
    } else {
      setIsActive(true);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className="relative border-2 border-white hover:border-[#59ff89] rounded-lg overflow-hidden w-full max-w-[700px] h-[300px] xs:h-[480px] sm:h-[520px] md:h-[380px] group"
    >
      <button
        onClick={handleClick}
        className="w-full h-full flex flex-col cursor-pointer relative"
      >
        <div className="relative overflow-hidden w-full h-3/5 sm:h-4/5 group">
          <img
            src={item.imageUrl}
            alt={item.title}
            className={`
              w-full h-full  md:w-fit md:h-fit object-cover object-center transform transition-transform duration-500
              ${isActive ? 'grayscale-0' : 'grayscale'}
              group-hover:grayscale-0
            `}
          />
        </div>

        <div className="w-full p-3 sm:p-4 flex-1 flex flex-col justify-between bg-white/10 backdrop-blur-sm text-left relative z-10">
          <div>
            <h3 className="text-base sm:text-lg font-medium text-[#59ff89] font-poppins text-left truncate mb-1">
              {item.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-1 font-thin font-poppins text-left">
              {item.description}
            </p>
          </div>

          <div className="flex items-center justify-between relative z-10">
            <div className="flex space-x-1">
              {item.technologies.map((tech, i) => (
                <div
                  key={i}
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/80 flex items-center justify-center p-1"
                >
                  <img
                    src={tech}
                    alt="Tech logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            <button className="px-3 sm:px-4 py-1 text-[#59ff89] rounded-full text-xs sm:text-sm font-light font-poppins hover:text-white cursor-pointer transition-colors duration-300 whitespace-nowrap">
              Show more
            </button>
          </div>

          {/* Glow effect div */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#59ff89]/40 to-transparent rounded-b-xl blur-xl z-0" />
        </div>
      </button>
    </motion.div>
  );
}

export default function ProjectsComponents({ searchTerm = '' }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredImages = images.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showMore = () =>
    setVisibleCount((prev) => Math.min(prev + INCREMENT, filteredImages.length));

  const showLess = () => setVisibleCount(INITIAL_COUNT);

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-3 sm:px-4 pt-4">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-2 
          lg:grid-cols-2 
          gap-x-4
          sm:gap-x-6
          md:gap-x-8 
          gap-y-6
          sm:gap-y-8
          md:gap-y-10 
          max-w-7xl 
          justify-center
          w-full
        "
      >
        {filteredImages.length > 0 &&
          filteredImages.slice(0, visibleCount).map((item, index) => (
            <ProjectCard key={index} item={item} index={index} />
          ))}
      </div>

      <div className="pt-8 sm:pt-10">
        {visibleCount < filteredImages.length ? (
          <button
            onClick={showMore}
            className="mx-auto font-poppins px-2 sm:px-4 py-1 bg-transparent font-thin text-white border border-white rounded-full backdrop-blur-sm transition duration-300 hover:text-black hover:bg-[#59ff89] hover:border-[#59ff89] text-xs sm:text-base"
          >
            View All Projects
          </button>
        ) : (
          filteredImages.length > INITIAL_COUNT && (
            <button
              onClick={showLess}
              className="mx-auto font-poppins px-2 sm:px-4 py-1 bg-transparent font-thin text-white border border-white rounded-full backdrop-blur-sm transition duration-300 hover:text-black hover:bg-[#59ff89] hover:border-[#59ff89] text-xs sm:text-base"
            >
              Show less
            </button>
          )
        )}
      </div>
    </div>
  );
}