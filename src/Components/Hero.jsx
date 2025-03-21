import React from "react";
import { CiLinkedin } from "react-icons/ci"; // Import LinkedIn Icon
import heroImage from "/src/assets/Dev.avif"; // Ensure the correct path

const Hero = () => {
  return (
    <section className="mt-5 pt-15 pb-8 px-6 md:px-16 lg:px-24 bg-white flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Side - Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-5">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-pink-400">
          Hey, I'm{" "}
          Ritik Meena
        </h1>
        <p className="text-lg md:text-2xl text-teal-800">
          I wanted to be Spider-man in the future 
          <br />
          Now, I'm a Web-Developer 🕸️
        </p>
        
        {/* LinkedIn Button */}
        <a
          href="https://linkedin.com/in/ritik-meena-9a5582204"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-100 text-[#FFAC32] font-extrabold px-6 py-3 rounded-xl 
                    transition-all border-2 border-[#FFAC32] shadow-[0_0_5px_rgba(255,172,50,0.7)] 
                 hover:scale-105"
        >
          Let's Connect <CiLinkedin size={24} />
        </a>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={heroImage}
          alt="Ritik Meena"
          className="w-60 md:w-80 lg:w-96 h-auto rounded-xl object-cover transition-all "
        />
      </div>
    </section>
  );
};

export default Hero;


