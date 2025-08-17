import React, { useState, useEffect, useRef } from 'react';

import Design from '../assets/Design.png';
import Web from '../assets/Web.png';
import VideoEdit from '../assets/VideoEdit.png';
import Drone from '../assets/Drone.png';
import Photography from '../assets/Photography.png';
import Live from '../assets/Live.png';

const DesignWorkComponents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const items = [
     {
    image: Web,
    title: "Web Site Design & Development",
    text: "Designing and developing responsive, user-friendly, and visually engaging websites tailored to client needs."
  },
  {
    image: Design,
    title: "Creative Design",
    text: "Delivering innovative and aesthetically refined designs that elevate brand identity."
  },
  {
    image: VideoEdit,
    title: "Video Editing",
    text: "Producing high-quality edits that transform raw footage into compelling visual stories."
  },
  {
    image: Photography,
    title: "Photography",
    text: "Capturing moments with precision, creativity, and professional artistry."
  },
  {
    image: Drone,
    title: "Drone Operating",
    text: "Providing dynamic aerial photography and videography with advanced drone technology."
  },
  {
    image: Live,
    title: "Live Broadcasting",
    text: "Delivering seamless, high-quality live streaming experiences for events of any scale."
  }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY;
      
      if (delta > 0) {
        setCurrentIndex(prev => (prev + 1) % items.length);
      } else if (delta < 0) {
        setCurrentIndex(prev => prev === 0 ? items.length - 1 : prev - 1);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [items.length]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) {
      return;
    }
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    
    if (Math.abs(walk) > 50) {
      if (walk > 0) {
        setCurrentIndex(prev => prev === 0 ? items.length - 1 : prev - 1);
        setIsDragging(false);
      } else if (walk < 0) {
        setCurrentIndex(prev => (prev + 1) % items.length);
        setIsDragging(false);
      }
    }
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex(prev => (prev + 1) % items.length);
      } else if (diff < 0) {
        setCurrentIndex(prev => prev === 0 ? items.length - 1 : prev - 1);
      }
    }
  };

  const getItemStyle = (index) => {
    const distance = Math.abs(index - currentIndex);
    const isCenter = index === currentIndex;
    
    // Calculate position with proper gaps
    const baseOffset = (index - currentIndex) * 560; // 300px card width + 20px gap
    
    let scale = 1;
    let opacity = 1;
    let zIndex = 10;
    
    if (isCenter) {
      scale = 1.1;
      opacity = 1;
      zIndex = 20;
    } else if (distance === 1) {
      scale = 0.9;
      opacity = 0.8;
      zIndex = 15;
    } else {
      scale = 0.8;
      opacity = 0.6;
      zIndex = 10;
    }
    
    return {
      transform: `translateX(${baseOffset}px) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <div className="w-full py-10 ">
      {/* Heading Section */}
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 pt-15">
        <h1 className="text-xl md:text-3xl font-semibold text-white">
          Crafting with <span className="text-[#59ff89]">Passion</span>
        </h1>
        <p className="text-md md:text-lg text-white mt-2 max-w-3xl">
          Crafting unique visuals with creativity and precision to bring ideas to life.
        </p>
      </div>

      {/* Horizontal Scrolling Cards Container */}
      <div 
        ref={containerRef}
        className="relative w-screen flex justify-center items-center h-80 overflow-hidden cursor-grab select-none"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
<div className="relative flex items-center justify-center sm:-mt-15">
  {items.map((item, index) => (
    <div
      key={index}
      className="absolute md:w-lg w-80 border border-white p-6 rounded-2xl text-left bg-black/50 backdrop-blur-sm flex items-start gap-4"
      style={getItemStyle(index)}
    >
      {/* Image on the left */}
      <img
        src={item.image}
        alt={item.image}
        className="w-20 h-20 object-cover rounded-lg"
      />

      {/* Title + Text on the right */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-1">
          {item.title}
        </h2>
        <p className="text-sm text-white leading-relaxed">
          {item.text}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center sm:-mt-15 space-x-1">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#59ff89] scale-125'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default DesignWorkComponents;