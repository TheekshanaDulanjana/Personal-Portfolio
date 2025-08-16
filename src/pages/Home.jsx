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
import ScrollTopComp from "../Components/ScrollTopComp";



export default function HeroSection() {
  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-10 font-poppins">
      
      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl leading-10 lg:text-6xl font-semibold text-center z-10 mt-10 text-[#59ff89]  sm:leading-tight">
        Hey there!
        <br />
        <span className="text-white">I'm Theekshana Dulanjana</span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-400 text-center  max-w-lg sm:max-w-xl lg:max-w-2xl z-10 text-base sm:text-lg">
        Blending Code and Creativity <br />
        Crafting intuitive designs and impactful digital experiences.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 z-10 w-full sm:w-auto justify-center">
        <a
          href="/Theekshana_Dulanjana.pdf"
          download
          className="flex items-center justify-center gap-2 px-5 py-3 border border-gray-600 rounded-full cursor-pointer hover:bg-white hover:text-black transition text-sm sm:text-base"
        >
          <FaDownload className="text-sm" /> Download Resume
        </a>

        <button
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex items-center justify-center gap-2 px-5 py-3 border border-gray-600 bg-[#59ff89] cursor-pointer text-black rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base"
        >
          <FaExternalLinkAlt className="text-sm" /> Let's Get in Touch
        </button>

      </div>

      {/* Social Media Icons */}
      <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 z-10">
        {[
          { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/theekshanadulanjana/" },
          { icon: <FaBehance />, link: "https://www.behance.net/dulanjana" },
          { icon: <FaGithub />, link: "https://github.com/TheekshanaDulanjana" },
          { icon: <FaFacebookF />, link: "https://www.facebook.com/theekshana.dulanjana" },
          { icon: <FaInstagram />, link: "https://www.instagram.com/dulan_jana_/" }
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-md hover:bg-[#59ff89] hover:text-black transition"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <ScrollTopComp />
    </div>
  );
}
