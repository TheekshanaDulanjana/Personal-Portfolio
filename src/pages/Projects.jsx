import React from "react";
import { motion } from "framer-motion";
import ProjectsComponents from "../Components/ProjectsComponents";

const Projects = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-72 md:h-72 flex flex-col items-center justify-center text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading with hover animation */}
        <motion.h1
          className="text-3xl md:text-5xl font-poppins font-semibold text-white"
          whileHover={{ scale: 1.05, rotate: -1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Creative{" "}
          <motion.span
            className="text-[#59ff89] inline-block"
            whileHover={{ scale: 1.1, color: "#4ade80" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Portfolio & Projects
          </motion.span>
        </motion.h1>

        {/* Paragraph with subtle hover effect */}
        <motion.p
          className="text-md md:text-medium font-poppins text-white mt-2 max-w-3xl"
          whileHover={{ scale: 1.02, color: "#d1fae5" }}
          transition={{ duration: 0.3 }}
        >
          Showcasing innovative ideas, unique designs, and hands-on projects
          that bring creativity to life. Explore my work and journey through
          technology and art.
        </motion.p>
      </motion.div>

      {/* Projects Grid/Component */}
      <ProjectsComponents />
    </div>
  );
};

export default Projects;
