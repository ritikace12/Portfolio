import React from "react";
import heroImage from "/src/assets/Dev.avif"; // Ensure the correct path

const Hero = () => {
  return (
    <section className="pt-20 pb-12 px-6 md:px-16 lg:px-24 bg-[#E8E6F1] flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Side - Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-5">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-pink-400">
          Hey, I'm{" "}
          <span className="text-teal-400 hover:text-black transition-all duration-300">
            Ritik Meena
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Full-Stack Developer crafting modern, scalable web applications.
        </p>
        <a
          href="#projects"
          className="inline-block bg-pink-400 border-2 border-pink-400 text-black font-extrabold px-6 py-3 rounded-xl transition-all hover:bg-white hover:text-pink-400 hover:scale-105"
        >
          See My Work 🚀
        </a>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={heroImage}
          alt="Ritik Meena"
          className="w-60 md:w-80 lg:w-96 h-auto rounded-xl object-cover transition-all hover:shadow-teal-400 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;

