import React from "react";
import { CiLinkedin } from "react-icons/ci"; // Import LinkedIn Icon
import { motion } from "framer-motion";
import { FaSpider, FaGlobe } from "react-icons/fa";
import heroImage from "../Assets/DEV.avif"; // Fixed the image path to match the actual file

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-red-950 via-blue-950 to-red-950 overflow-hidden">
      {/* Web Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full border-[8px] border-white rounded-full"
        />
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-[8px] border-white rounded-full"
        />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side - Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <div className="space-y-8">
            {/* Comic-style Header */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-yellow-400 px-6 py-2 transform -rotate-2 shadow-xl"
            >
              <span className="text-black font-bold tracking-wide text-lg">YOUR FRIENDLY NEIGHBORHOOD</span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-2">
              <motion.h1 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-6xl md:text-8xl font-extrabold"
              >
                <span className="text-red-500">WEB</span>
                <span className="text-blue-500">DEV</span>
              </motion.h1>
              
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-4 justify-center md:justify-start"
              >
                <FaSpider className="text-4xl text-red-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Ritik Meena</h2>
                <FaGlobe className="text-4xl text-blue-500" />
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 font-medium"
            >
              "With great <span className="text-red-500">code</span> comes great <span className="text-blue-500">responsibility</span>" 🕸️
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-8 justify-center md:justify-start text-lg font-bold"
            >
              <div className="bg-red-500/10 px-6 py-3 rounded-lg border border-red-500/20">
                <span className="text-red-500">800+ </span>
                <span className="text-gray-300">Problems Solved</span>
              </div>
              <div className="bg-blue-500/10 px-6 py-3 rounded-lg border border-blue-500/20">
                <span className="text-blue-500">10+ </span>
                <span className="text-gray-300">Projects Shipped</span>
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://linkedin.com/in/ritik-meena-9a5582204"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-blue-500 
                          text-white font-bold px-8 py-4 rounded-xl 
                          shadow-[0_0_15px_rgba(219,39,119,0.5)]
                          hover:shadow-[0_0_30px_rgba(219,39,119,0.8)]
                          transition-all duration-300 group"
              >
                <span className="group-hover:tracking-wider transition-all duration-300">SWING BY MY PROFILE</span>
                <CiLinkedin size={24} className="group-hover:rotate-12 transition-transform" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="md:w-1/2 flex justify-center relative"
        >
          <div className="relative">
            {/* Spider-web corners */}
            <div className="w-60 md:w-80 lg:w-96 h-60 md:h-80 lg:h-96 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-lg relative overflow-hidden">
              <img
                src={heroImage}
                alt="Ritik Meena"
                className="w-full h-full object-cover rounded-lg 
                          border-4 border-white/10 z-10"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x400?text=RM';
                }}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-blue-500 opacity-20 blur-xl rounded-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


