import React, { useState } from "react";
import me from "../assets/me.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function AboutMe() {
  const [activeSection, setActiveSection] = useState("about"); // "about" or "education"

  const handleToggle = (section) => {
    setActiveSection(section);
  };

  const handleArrowClick = (direction) => {
    if (direction === "left" || direction === "right") {
      setActiveSection((prev) => (prev === "about" ? "education" : "about"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Left side ABOUT ME background text */}
      {/* Hide on mobile (smaller than 'md'), smaller text on tablet */}
      <div className="hidden md:flex w-1/3 flex-col justify-center font-semibold font-poppins text-white leading-none">
        <p className="opacity-15 text-[3.5vw] md:text-[6vw] lg:text-[6vw]">About Me</p>
        <p className="opacity-12 text-[3vw] md:text-[5.5vw] lg:text-[6vw]">About Me</p>
        <p className="opacity-50 text-[4vw] md:text-[7vw] lg:text-[6vw]">About Me</p>
        <p className="opacity-9 text-[2.5vw] md:text-[5vw] lg:text-[6vw]">About Me</p>
        <p className="opacity-6 text-[2vw] md:text-[4.5vw] lg:text-[6vw]">About Me</p>
        <p className="opacity-3 text-[1.5vw] md:text-[4vw] lg:text-[6vw]">About Me</p>
      </div>

      {/* Right side: Square container with fixed height */}
      <div className="flex-1 flex justify-center">
        <div className="h-[560px] w-full max-w-full bg-transparent backdrop-blur-xs outline-2 outline-white rounded-xl flex flex-row justify-between relative overflow-hidden">

          {/* Navigation buttons inside top-left corner */}
          <div className="absolute top-8 left-4 flex space-x-6 z-20 pl-6">
            <button
              onClick={() => handleToggle("about")}
              className={`text-sm font-poppins transition-colors duration-300 cursor-pointer ${
                activeSection === "about" ? "text-[#59ff89]" : "text-white hover:text-[#59ff89]"
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => handleToggle("education")}
              className={`text-sm font-poppins transition-colors duration-300 cursor-pointer ${
                activeSection === "education" ? "text-[#59ff89]" : "text-white hover:text-[#59ff89]"
              }`}
            >
              Education
            </button>
          </div>

          {/* Left text inside square */}
          <div className="flex-1 flex flex-col justify-center pl-10 z-10">
            {activeSection === "about" ? (
              <>
                <h1 className="text-4xl font-semibold font-poppins text-white mb-4">
                  Who, <span className="text-[#59ff89]">I am</span>
                </h1>
                <p className="text-medium font-light font-poppins text-gray-400 leading-relaxed">
                  Hi, I'm Theekshana Dulanjana, a passionate IT undergraduate at
                  General Sir John Kotelawala Defence University. I specialize in
                  web development, UI/UX design, and creative digital solutions.
                  With a strong foundation in full-stack development and a flair
                  for design, I love turning ideas into impactful digital
                  experiences.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl font-semibold font-poppins text-white mb-4">
                  Pathway to <span className="text-[#59ff89]"> Knowledge</span>
                </h1>
                <p className="text-medium font-poppins text-white leading-relaxed">
                  AL STC Matara 3As<br />
                  Degree IT KDU
                </p>
              </>
            )}
          </div>

          {/* Right image inside square - show always on all devices */}
          {activeSection === "about" && (
            <div className="flex items-end justify-center w-1/2 z-10">
              <img
                src={me}
                alt="Theekshana Dulanjana"
                className="max-h-[560px] object-contain filter grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          )}

          {/* Glow effect inside the square */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#59ff89]/40 to-transparent rounded-b-xl blur-3xl z-0" />

          {/* Arrows inside square */}
          <div
            onClick={() => handleArrowClick("left")}
            className="absolute bottom-4 left-4 text-xl pl-5 text-white cursor-pointer hover:text-[#59ff89] z-20"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={() => handleArrowClick("right")}
            className="absolute bottom-4 left-20 text-xl text-white cursor-pointer hover:text-[#59ff89] z-20"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
