import React, { useState } from "react";
import me from "../assets/me.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutMe() {
  const [activeSection, setActiveSection] = useState("about");
  const [isAnimated, setIsAnimated] = useState(false); // Track if animation has played

  const handleToggle = (section) => {
    setActiveSection(section);
  };

  return (
    <div
      className="flex items-center pt-10 justify-center px-4 sm:px-6 md:px-12"
      onMouseEnter={() => {
        if (!isAnimated) setIsAnimated(true); // Start animation once on first cursor enter
      }}
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row">
        {/* Background large text */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={isAnimated ? { x: 0, opacity: 1 } : {}} // animate only after cursor enters
          transition={{ duration: 1 }}
          className="hidden lg:flex w-1/3 flex-col justify-center font-semibold font-poppins
         text-white leading-none select-none pointer-events-none"
        >
          {["27", "24", "21", "75", "15", "12", "9", "6", "6"].map((op, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={isAnimated ? { opacity: parseFloat(op) / 100 } : {}} // animate after hover
              transition={{ delay: i * 0.05 }}
              className="text-4xl md:text-5xl lg:text-6xl"
            >
              About Me
            </motion.p>
          ))}
        </motion.div>

        {/* Main content box */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={isAnimated ? { scale: 1, opacity: 1 } : {}} // trigger only once
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <div
            className={`relative flex flex-col md:flex-row justify-between items-center
              w-full max-w-5xl bg-transparent backdrop-blur-xs outline-2 outline-white rounded-xl overflow-hidden
              ${
                activeSection === "about"
                  ? "h-[calc(100vh-5rem)] max-h-[550px] sm:h-[600px] md:h-[450px] lg:h-[600px]"
                  : "py-10"
              }`}
          >
            {/* Navigation buttons */}
            <div className="absolute top-5 left-2 flex space-x-6 z-20 pl-4 sm:pl-6">
              <button
                onClick={() => handleToggle("about")}
                className={`text-sm sm:text-base font-poppins transition-colors duration-300 cursor-pointer ${
                  activeSection === "about"
                    ? "text-[#59ff89]"
                    : "text-white hover:text-[#59ff89]"
                }`}
              >
                About Me
              </button>
              <button
                onClick={() => handleToggle("education")}
                className={`text-sm sm:text-base font-poppins transition-colors duration-300 cursor-pointer ${
                  activeSection === "education"
                    ? "text-[#59ff89]"
                    : "text-white hover:text-[#59ff89]"
                }`}
              >
                Education
              </button>
            </div>

            {/* Content switching */}
            <AnimatePresence mode="wait">
              {activeSection === "about" ? (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isAnimated ? { opacity: 1, x: 0 } : {}} // play once
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.6 }}
                  className="flex w-full flex-col md:flex-row"
                >
                  {/* LEFT CONTENT */}
                  <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 md:px-8 max-w-xl min-w-[260px] z-10">
                    <h1 className="text-3xl sm:text-4xl font-semibold font-poppins text-white mt-20 mb-5">
                      Who, <span className="text-[#59ff89]">I am</span>
                    </h1>

                    {/* Paragraph for md and below */}
                    <p className="block lg:hidden text-xs sm:text-sm md:text-sm md:leading-5 font-light font-poppins text-gray-400 text-justify">
                      I am Theekshana Dulanjana, a third-year BSc (Hons)
                      Information Technology student at General Sir John
                      Kotelawala Defence University, passionate about emerging
                      technologies and creative design. Skilled in web
                      development, UI/UX, graphic design, and photography, I
                      bring experience in camera operation and assisting on
                      shoots. Proficient in Figma, Adobe Creative Suite, and
                      Canva, I combine technical expertise with creativity to
                      deliver impactful, user-centered digital solutions.
                    </p>

                    {/* Paragraph for lg and above */}
                    <p className="hidden lg:block text-xs md:text-sm font-light font-poppins text-gray-300 leading-5 mb-10 text-justify">
                      I am Theekshana Dulanjana, a driven third-year BSc (Hons)
                      Information Technology undergraduate at General Sir John
                      Kotelawala Defence University. With a strong foundation in
                      emerging technologies and a keen eye for detail, I
                      specialize in crafting intuitive, user-centered digital
                      experiences through web development and UI/UX design.
                      Alongside my technical expertise, I bring a creative edge
                      as a skilled graphic designer and photographer, experienced
                      in camera operation and assisting on professional shoots.
                      Proficient with industry-standard tools such as Figma,
                      Adobe Photoshop, Illustrator, Premiere Pro, and Canva, I am
                      passionate about blending technology and creativity to
                      deliver compelling visual storytelling and responsive
                      designs. My work is guided by curiosity, aesthetics, and a
                      commitment to impactful, purposeful solutions.
                    </p>

                    {/* Glow effect */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#59ff89]/40 to-transparent rounded-b-xl blur-3xl z-0" />
                  </div>

                  {/* RIGHT IMAGE */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={isAnimated ? { y: 0, opacity: 1 } : {}} // only first time
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex items-end sm:-ml-20 ml-5 justify-center w-full md:w-1/2 px-6 md:px-10 z-10"
                  >
                    <motion.img
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      src={me}
                      alt="Theekshana Dulanjana"
                      className="max-h-[300px] sm:max-h-[300px] md:max-h-[560px] lg:max-h-[600px] object-contain filter grayscale hover:grayscale-0 transition duration-300"
                    />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isAnimated ? { opacity: 1, x: 0 } : {}} // trigger once
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                  className="w-full max-w-5xl mx-auto px-6"
                >
                  {/* Title */}
                  <h1 className="text-3xl sm:text-4xl font-semibold font-poppins text-white mt-5 mb-10">
                    Pathway to <span className="text-[#59ff89]"> Knowledge</span>
                  </h1>

                  {/* Boxes container */}
                  <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6">
                    {/* University Education */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="flex-1 bg-black backdrop-blur-3xl p-4 shadow-lg space-y-2 border border-white/60 rounded-xl flex flex-col justify-center"
                    >
                      <h2 className="text-base sm:text-lg md:text-xl font-semibold font-poppins text-white">
                        University Education
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base font-light font-poppins text-gray-300 leading-6">
                        General Sir John Kotelawala Defence University <br />
                        BSc (Hons) in Information Technology <br />
                        (2023 - Present)
                      </p>
                    </motion.div>

                    {/* Secondary Education */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="flex-1 bg-black backdrop-blur-3xl p-4 shadow-lg space-y-2 border border-white/60 rounded-xl flex flex-col justify-center"
                    >
                      <h2 className="text-base sm:text-lg md:text-xl font-semibold font-poppins text-white">
                        Secondary Education
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base font-light font-poppins text-gray-300 leading-6">
                        St. Thomas' College - Matara <br />
                        GCE A/L Commerce Stream <br />
                        (2008 - 2021)
                      </p>
                    </motion.div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#59ff89]/40 to-transparent rounded-b-xl blur-3xl z-0" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
