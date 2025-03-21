import React from "react";
import heroImage from "/src/assets/Dev.avif";

const HeroAbout = () => {
  return (
    <section className="bg-black text-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-[80vh] px-8 md:px-20 border-b-4 border-pink-400">
        {/* Left Side - Welcome Message */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-extrabold text-pink-400 leading-tight" 
              style={{ fontFamily: "'Bangers', cursive" }}>
            Hey, I'm Ritik Meena
          </h1>
          <p className="text-lg text-gray-300 mt-4 font-semibold">
            Full-Stack Developer building modern, scalable web applications.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img 
            className="rounded-xl w-64 h-64 shadow-lg border-4 border-pink-400 object-cover" 
            src={heroImage} 
            alt="Ritik Meena"
          />
        </div>
      </div>

      {/* Experience & Key Highlights Section */}
      <div className="py-16 px-8 md:px-32 border-b-2 border-pink-400">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-400 text-center mb-8">
          My Journey
        </h2>

        {/* Timeline Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Timeline */}
          <div className="space-y-10 border-l-4 border-teal-400 pl-6">
            <div>
              <h3 className="text-2xl font-bold text-teal-400">🚀 Beginnings</h3>
              <p className="text-gray-300">Started my coding journey with JavaScript and instantly fell in love with web development.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-400">💡 React & UI Mastery</h3>
              <p className="text-gray-300">Mastered React, Tailwind CSS, and UI/UX design, crafting sleek, high-performance applications.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-400">🔥 Full-Stack Growth</h3>
              <p className="text-gray-300">Expanded into Full-Stack development using Node.js, MongoDB, and Firebase for scalable web apps.</p>
            </div>
          </div>

          {/* Right - Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-teal-400 rounded-lg shadow-md bg-white text-black transform transition hover:scale-105">
              <h3 className="text-xl font-bold text-teal-400">⚡ 10+ Projects</h3>
              <p>Developed scalable projects using modern web technologies.</p>
            </div>
            <div className="p-6 border-2 border-teal-400 rounded-lg shadow-md bg-white text-black transform transition hover:scale-105">
              <h3 className="text-xl font-bold text-teal-400">💡 React & UI/UX Expert</h3>
              <p>Specialized in crafting sleek, high-performance UI components.</p>
            </div>
            <div className="p-6 border-2 border-teal-400 rounded-lg shadow-md bg-white text-black transform transition hover:scale-105">
              <h3 className="text-xl font-bold text-teal-400">🚀 800+ DSA Problems</h3>
              <p>Strong problem-solving skills with experience in coding contests.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;



