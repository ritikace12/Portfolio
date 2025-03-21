import React from "react";
import heroImage from "/src/assets/Dev.avif";

const Hero = () => {
  return (
    <section className="bg-[#E8E6F1] text-black px-4 md:px-10 lg:px-12 py-2 flex flex-col items-center justify-center min-h-[85vh]">
      {/* Hero Content */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left - Hero Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-pink-400">
            Hey, <br />
            I'm{" "}
            <span className="text-teal-400 hover:text-black transition-all duration-300">
              Ritik Meena
            </span>
          </h1>
          <p className="text-lg text-gray-700 mt-1 font-medium">
            Full-Stack Developer crafting modern, scalable web applications.
          </p>

          {/* Call-To-Action Button */}
          <a
            href="#projects"
            className="inline-block mt-3 px-5 py-2 text-lg font-bold bg-pink-400 text-black rounded-md shadow-lg 
            transition transform hover:scale-105 hover:shadow-pink-400"
          >
            See My Work
          </a>
        </div>

        {/* Right - Image with Hover Glow */}
        <div className="md:w-1/2 flex justify-center">
          <img
            className="rounded-xl w-36 h-36 md:w-64 md:h-64 object-cover transition-all duration-300 hover:shadow-teal-400 hover:scale-105"
            src={heroImage}
            alt="Ritik Meena"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
