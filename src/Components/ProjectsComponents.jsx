import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import randulaweb from '../assets/randulaweb.png';
import ieeecskdu from '../assets/ieeecskdu.png';
import uniboard from '../assets/uniboard.png';
import myportfolio from '../assets/myportfolio.png';
import cinnoman from '../assets/cinnoman.png';

import { FaBehance, FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaWordpress, FaElementor, FaGoogle,  } from 'react-icons/fa';
import { SiExpress, SiFigma, SiFirebase, SiGoogleanalytics, SiMongodb, SiRedux, SiTailwindcss, SiVercel } from 'react-icons/si';

const images = [
  { 
    title: 'Ceylon Cinnamon Legends', 
    imageUrl: cinnoman, 
    behance: 'https://www.behance.net/gallery/232382371/Ceylon-Cinnamon-Legends',
    liveSite: 'https://ceyloncinnamonlegends.com',
    technologies: [<FaWordpress />, <FaElementor />]
  },
  { 
    title: 'My Personal Portfolio', 
    imageUrl: myportfolio, 
    github: 'https://github.com/TheekshanaDulanjana/Personal-Portfolio-',
    liveSite: 'https://theekshanadulanjana.com',
    technologies: [ <FaNodeJs />, <FaReact />, <SiTailwindcss />, <SiGoogleanalytics />, <SiVercel />]
  },
  { 
    title: 'Randula Jey Photography', 
    imageUrl: randulaweb, 
    github: 'https://github.com/TheekshanaDulanjana/Randula-Jey-Photography',
    liveSite: 'https://randulajeyphotography.com',
    technologies: [ <SiFigma />, <FaNodeJs />, <FaReact />, <SiTailwindcss />, <SiGoogleanalytics />, <SiVercel />]
  },
  { 
    title: 'IEEE Computer Society Student Branch KDU', 
    imageUrl: ieeecskdu, 
    github: 'https://github.com/TheekshanaDulanjana/IEEE-CS-KDU-Official-',
    liveSite: 'https://ieeecskdu.com',
    technologies: [ <FaNodeJs />, <FaReact />, <SiTailwindcss />,<SiVercel />]
  },
  { 
    title: 'UniBoard.lk | Boarding Finding System', 
    imageUrl: uniboard, 
    github: 'https://github.com/TheekshanaDulanjana/Uniboard.lk-Boarding-Finding-System-Student-Side',
    liveSite: null,
    technologies: [ <FaNodeJs />, <FaReact />, <SiTailwindcss />, <SiExpress />, <SiFirebase />, <SiMongodb />, <SiRedux />]
  },
];

const INITIAL_COUNT = 4;
const INCREMENT = 2;

function ProjectCard({ item, index }) {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className="
        relative border-2 border-white hover:border-[#59ff89] rounded-lg overflow-hidden 
        w-full max-w-[700px] 
        h-[300px] xs:h-[480px] sm:h-[520px] 
        md:h-[270px]
        lg:h-[380px] 
        group cursor-pointer
      "
    >
      <div className="w-full h-full flex flex-col relative">
        <div className="relative overflow-hidden w-full h-3/5 sm:h-4/5 group">
          <img
            src={item.imageUrl}
            alt={item.title}
            className={`
              w-full h-full md:w-fit md:h-fit object-cover object-center transform transition-transform duration-500
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
          </div>

          <div className="flex items-center justify-between relative z-10">
            <div className="flex space-x-2 text-[#59ff89] text-lg">
              {item.technologies.map((TechIcon, i) => (
                <div key={i} className="flex items-center justify-center">
                  {TechIcon}
                </div>
              ))}
            </div>

            <div className="flex space-x-3">
              {item.github ? (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#59ff89] hover:text-white text-xs sm:text-sm font-light font-poppins transition-colors duration-300"
                >
                  <FaGithub className="text-base" />
                  GitHub
                </a>
              ) : item.behance ? (
                <a
                  href={item.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#59ff89] hover:text-white text-xs sm:text-sm font-light font-poppins transition-colors duration-300"
                >
                  <FaBehance className="text-base" />
                  Behance
                </a>
              ) : null}

              {item.liveSite && (
                <a
                  href={item.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#59ff89] hover:text-white text-xs sm:text-sm font-light font-poppins transition-colors duration-300"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Site
                </a>
              )}
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#59ff89]/40 to-transparent rounded-b-xl blur-xl z-0" />
        </div>
      </div>
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
    <div className="w-full  flex flex-col items-center px-3 sm:px-4">
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

      <div className="pt-8 pb-10 sm:pt-10">
        {visibleCount < filteredImages.length ? (
          <button
            onClick={showMore}
            className="text-white hover:bg-white outline-2 outline-white  rounded-full px-4 py-2 text-xs sm:text-base hover:text-black transition"
          >
            View More Projects
          </button>
        ) : (
          filteredImages.length > INITIAL_COUNT && (
            <button
              onClick={showLess}
              className="text-white hover:bg-white outline-2 outline-white  rounded-full px-4 py-2 text-xs sm:text-base hover:text-black transition"
            >
              Show Less
            </button>
          )
        )}
      </div>
    </div>
  );
}
