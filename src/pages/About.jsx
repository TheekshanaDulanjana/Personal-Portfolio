import React, { useState } from "react";
import me from "../assets/me.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function AboutMe() {
  const [activeSection, setActiveSection] = useState("about");

  const handleToggle = (section) => {
    setActiveSection(section);
  };

  const handleArrowClick = () => {
    setActiveSection((prev) => (prev === "about" ? "education" : "about"));
  };

  return (
    <div className=" flex items-center pt-10 justify-center px-4 sm:px-6 md:px-12">
      <div className="w-full max-w-7xl flex flex-col md:flex-row">
        <div className="hidden lg:flex w-1/3 flex-col justify-center font-semibold font-poppins
         text-white leading-none select-none pointer-events-none">
          {/* Background "About Me" text as before */}
          <p className="opacity-27 text-4xl md:text-5xl lg:text-6xl">About Me</p>
          <p className="opacity-24 text-4xl md:text-5xl lg:text-6xl">About Me</p>
          <p className="opacity-21 text-4xl md:text-5xl lg:text-6xl">About Me</p>
          <p className="opacity-75 text-4xl md:text-5xl lg:text-6xl">About Me</p>
          <p className="opacity-15 text-4xl md:text-5xl lg:text-6xl">About Me</p>
          <p className="opacity-12 text-4xl md:text-5xl lg:text-6xl">About Me</p>
          <p className="opacity-9 text-4xl md:text-5xl lg:text-6xl">About Me</p>
          <p className="opacity-6 text-4xl md:text-5xl lg:text-6xl">About Me</p>
          <p className="opacity-6 text-4xl md:text-5xl lg:text-6xl">About Me</p>
        </div>

        <div className="w-full flex justify-center">
          <div
            className={`relative flex flex-col md:flex-row justify-between items-center
              w-full max-w-5xl bg-transparent backdrop-blur-xs outline-2 outline-white rounded-xl overflow-hidden
              ${activeSection === "about"
                ? "h-[calc(100vh-5rem)] max-h-[550px] sm:h-[600px] md:h-[450px] lg:h-[600px]"
                : "py-10"}`
            }
          >
            {/* Navigation buttons */}
            <div className="absolute top-5 left-2 flex space-x-6 z-20 pl-4 sm:pl-6">
              <button
                onClick={() => handleToggle("about")}
                className={`text-sm sm:text-base font-poppins transition-colors duration-300 cursor-pointer ${
                  activeSection === "about" ? "text-[#59ff89]" : "text-white hover:text-[#59ff89]"
                }`}
              >
                About Me
              </button>
              <button
                onClick={() => handleToggle("education")}
                className={`text-sm sm:text-base font-poppins transition-colors duration-300 cursor-pointer ${
                  activeSection === "education" ? "text-[#59ff89]" : "text-white hover:text-[#59ff89]"
                }`}
              >
                Education
              </button>
            </div>

           {/* LEFT CONTENT */}
           {activeSection === "about" ? (
                <>
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 md:px-8 max-w-xl min-w-[260px] z-10">
                  <h1 className="text-3xl sm:text-4xl font-semibold font-poppins text-white mt-20 mb-5">
                    Who, <span className="text-[#59ff89]">I am</span>
                  </h1>

                  {/* Paragraph for md and below */}
                  <p className="block lg:hidden text-xs sm:text-sm md:text-sm md:leading-5 font-light font-poppins text-gray-400 text-justify">
                    I am Theekshana Dulanjana, a third-year BSc (Hons) Information Technology student at General 
                    Sir John Kotelawala Defence University, passionate about emerging technologies and creative design. 
                    Skilled in web development, UI/UX, graphic design, and photography, I bring experience 
                    in camera operation and assisting on shoots. Proficient in Figma, Adobe Creative Suite, and Canva, 
                    I combine technical expertise with creativity to deliver impactful, user-centered digital solutions.
                  </p>

                  {/* Paragraph for lg and above */}
                  <p className="hidden lg:block text-xs md:text-sm font-light font-poppins text-gray-300 leading-5 mb-10 text-justify">
                    I am Theekshana Dulanjana, a driven third-year BSc (Hons) Information Technology undergraduate 
                    at General Sir John Kotelawala Defence University. With a strong foundation in emerging technologies
                     and a keen eye for detail, I specialize in crafting intuitive, user-centered digital experiences through 
                     web development and UI/UX design. Alongside my technical expertise, I bring a creative edge as a skilled 
                     graphic designer and photographer, experienced in camera operation and assisting on professional shoots. 
                     Proficient with industry-standard tools such as Figma, Adobe Photoshop, Illustrator, Premiere Pro, and Canva, 
                     I am passionate about blending technology and creativity to deliver compelling visual storytelling and responsive
                      designs. My work is guided by curiosity, aesthetics, and a commitment to impactful, purposeful solutions.
                  </p>
                  {/* Glow effect */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#59ff89]/40 to-transparent rounded-b-xl blur-3xl z-0" />

                </div>
             

            {/* RIGHT IMAGE ONLY IN ABOUT TAB */}
            {activeSection === "about" && (
              <div className="flex items-end sm:-ml-20 ml-5 justify-center w-full md:w-1/2 px-6 md:px-10 z-10">
                <img
                  src={me}
                  alt="Theekshana Dulanjana"
                  className="max-h-[300px] sm:max-h-[300px] md:max-h-[560px] lg:max-h-[600px] object-contain filter grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
              
            )}
            </>
             ) : (
                <>
                  <div className="w-full max-w-5xl mx-auto px-6">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl font-semibold font-poppins text-white mt-5   mb-10">
                      Pathway to <span className="text-[#59ff89]"> Knowledge</span>
                    </h1>

                    {/* Boxes container */}
                    <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 ">
                      {/* University Education */}
                      <div className="flex-1 bg-black backdrop-blur-3xl p-4 shadow-lg space-y-2 border border-white/60 rounded-xl flex flex-col justify-center">
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold font-poppins text-white">
                          University Education
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base font-light font-poppins text-gray-300 leading-6">
                          General Sir John Kotelawala Defence University <br />
                          BSc (Hons) in Information Technology <br />
                          (2023 - Present)
                        </p>
                      </div>

                      {/* Secondary Education */}
                      <div className="flex-1 bg-black backdrop-blur-3xl p-4 shadow-lg space-y-2 border border-white/60 rounded-xl flex flex-col justify-center">
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold font-poppins text-white">
                          Secondary Education
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base font-light font-poppins text-gray-300 leading-6">
                          St. Thomas' College - Matara <br />
                          GCE A/L Commerce Stream <br />
                          (2008 - 2021)
                        </p>
                      </div>
                    </div>
                    {/* Glow effect */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#59ff89]/40 to-transparent rounded-b-xl blur-3xl z-0" />

                  </div>

                </>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}
