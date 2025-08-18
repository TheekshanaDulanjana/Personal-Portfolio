import React from "react";
import { motion } from "framer-motion";
import DesignWorkComponents from "../Components/DesignWorkComponents";
import DesignToolsComponents from "../Components/DesignToolsComponents";

import ReactLogo from "../assets/React.png";
import ReactNativeLogo from "../assets/ReactNative.png";
import ExpressLogo from "../assets/Express.png";
import NodeLogo from "../assets/Node.png";
import MongoDBLogo from "../assets/Mongo.png";
import FirebaseLogo from "../assets/Firebase.png";
import MySQLLogo from "../assets/MySql.png";
import TailwindLogo from "../assets/Tailwind.png";
import HTMLLogo from "../assets/HTML.png";
import CSSLogo from "../assets/CSS.png";
import JSLogo from "../assets/JS.png";
import PythonLogo from "../assets/Python.png";
import WordPressLogo from "../assets/Wordpress.png";
import GitLogo from "../assets/Git.png";
import MaterialUILogo from "../assets/Matirial.png";
import VSCodeLogo from "../assets/VSCode.png";
import FigmaLogo from "../assets/Figma.png";
import PostmanLogo from "../assets/Postman.png";

const skills = [
  { name: "React", logo: ReactLogo },
  { name: "React Native", logo: ReactNativeLogo },
  { name: "Express", logo: ExpressLogo },
  { name: "Node.js", logo: NodeLogo },
  { name: "MongoDB", logo: MongoDBLogo },
  { name: "Firebase", logo: FirebaseLogo },
  { name: "MySQL", logo: MySQLLogo },
  { name: "Tailwind CSS", logo: TailwindLogo },
  { name: "HTML", logo: HTMLLogo },
  { name: "CSS", logo: CSSLogo },
  { name: "JavaScript", logo: JSLogo },
  { name: "Python", logo: PythonLogo },
  { name: "WordPress", logo: WordPressLogo },
  { name: "Git", logo: GitLogo },
  { name: "Material UI", logo: MaterialUILogo },
  { name: "VS Code", logo: VSCodeLogo },
  { name: "Figma", logo: FigmaLogo },
  { name: "Postman", logo: PostmanLogo },
];

const Skills = () => {
  return (
    <div className="w-full py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Heading + Subtitle */}
        <div className="mb-6 px-2 sm:px-4 md:px-0">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-poppins font-semibold text-white"
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Skills that{" "}
            <motion.span
              className="text-[#59ff89] inline-block"
              whileHover={{ scale: 1.1, color: "#4ade80" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Tell My Story
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-md md:text-lg font-poppins text-white mt-2 max-w-full sm:max-w-xl md:max-w-3xl mx-auto"
            whileHover={{ scale: 1.02, color: "#d1fae5" }}
            transition={{ duration: 0.3 }}
          >
            Every skill here is more than a line on a resume — it’s a story of
            challenges faced, problems solved, and creativity unleashed.
          </motion.p>
        </div>

        {/* Skills Container */}
        <motion.div
          className="relative w-full max-w-7xl mt-10 p-4 sm:p-6 rounded-xl flex flex-col items-center justify-between backdrop-blur-xs shadow-lg outline-1 outline-white overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl text-[#59ff89] mb-8 mt-5 font-semibold uppercase z-10 text-center px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Skilled in the full spectrum of development technologies
          </motion.h2>

          {/* Skills Grid */}
          <motion.div
            className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3 sm:gap-4 justify-items-center z-10 px-2 sm:px-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {skills.map(({ name, logo }, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-0.5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
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
                <span className="text-white text-xs sm:text-sm font-medium">
                  {name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Glow effect */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#59ff89]/40 to-transparent rounded-b-xl blur-3xl z-0" />
        </motion.div>
      </div>

      {/* Sub Components with simple fade-up */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <DesignWorkComponents />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <DesignToolsComponents />
      </motion.div>
    </div>
  );
};

export default Skills;
