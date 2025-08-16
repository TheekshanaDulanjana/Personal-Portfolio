import React from 'react';

import Ae from '../assets/Ae.png';
import Ai from '../assets/Ai.png';
import Li from '../assets/Li.png';
import Pr from '../assets/Pr.png';
import Ps from '../assets/Ps.png';
import vMix from '../assets/vMix.png';

  

const logos = [
  { src: Ps, alt: 'Photoshop' },
  { src: Li, alt: 'Lightroom' },
  { src: Ai, alt: 'Illustrator' },
  { src: Pr, alt: 'Premiere Pro' },
  { src: Ae, alt: 'After Effects' },
  { src: vMix, alt: 'vMix' },
];

const DesignToolsComponents = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="max-w-screen mx-auto p-4  rounded-lg   overflow-hidden">
      <div className="animate-scroll-left hover:pause flex items-center gap-6 w-max">
        {duplicatedLogos.map(({ src, alt, link }, i) => (
          <div
            key={`${alt}-${i}`}
            className={`flex justify-center items-center flex-shrink-0 ${
              link ? 'w-78' : 'h-24 w-56'
            }`}
          >
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
              </a>
            ) : (
              <img
                src={src}
                alt={alt}
                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default DesignToolsComponents;
