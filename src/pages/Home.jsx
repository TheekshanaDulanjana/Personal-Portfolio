import React from "react";
import {
  FaDownload,
  FaExternalLinkAlt,
  FaLinkedin,
  FaBehance,
  FaGithub,
  FaFacebookF,
  FaInstagram
} from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollTopComp from "../Components/ScrollTopComp";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-10 font-poppins"
    >
      {/* Headline */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl leading-10 lg:text-6xl font-semibold text-center z-10 mt-10 text-[#59ff89] sm:leading-tight"
      >
        Hey there!
        <br />
        <span className="text-white">I'm Theekshana Dulanjana</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-gray-400 text-center max-w-lg sm:max-w-xl lg:max-w-2xl z-10 text-base sm:text-lg"
      >
        Blending Code and Creativity <br />
        Crafting intuitive designs and impactful digital experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-6 flex flex-col sm:flex-row gap-4 z-10 w-full sm:w-auto justify-center"
      >
        {/* Download Resume with ripple effect */}
        <motion.a
          href="/Theekshana_Dulanjana.pdf"
          download
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden flex items-center justify-center gap-2 px-5 py-3 border border-gray-600 rounded-full cursor-pointer hover:bg-white hover:text-black transition text-sm sm:text-base"
        >
          <span className="relative z-10 flex items-center gap-2">
            <FaDownload className="text-sm" /> Download Resume
          </span>
          {/* Ripple effect */}
          <span className="absolute inset-0 rounded-full bg-[#59ff89] opacity-0 animate-ping"></span>
        </motion.a>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex items-center justify-center gap-2 px-5 py-3 border border-gray-600 bg-[#59ff89] cursor-pointer text-black rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base"
        >
          <FaExternalLinkAlt className="text-sm" /> Let's Get in Touch
        </motion.button>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 1 }
          }
        }}
        className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 z-10"
      >
        {[
          { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/theekshanadulanjana/" },
          { icon: <FaBehance />, link: "https://www.behance.net/dulanjana" },
          { icon: <FaGithub />, link: "https://github.com/TheekshanaDulanjana" },
          { icon: <FaFacebookF />, link: "https://www.facebook.com/theekshana.dulanjana" },
          { icon: <FaInstagram />, link: "https://www.instagram.com/dulan_jana_/" }
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-md hover:bg-[#59ff89] hover:text-black transition"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="w-full"
      >
        <ScrollTopComp />
      </motion.div>
    </motion.div>
  );
}
