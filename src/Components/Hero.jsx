import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion";
import heroImage from "../Assets/images/spidy.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-16 md:p-24 bg-black overflow-hidden">
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
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 w-full text-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <div className="space-y-8">
            {/* Comic-style Header */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-yellow-400 px-6 py-2 transform -rotate-2 shadow-xl"
            >
              <span className="text-black font-bold tracking-wide text-lg">
                YOUR FRIENDLY NEIGHBORHOOD
              </span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-2">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-6xl font-extrabold"
              >
                <span className="text-[#E13D0E]">WEB</span>
                <span className="text-[#025B83]">DEVELOPER</span>
              </motion.h1>

              <motion.h2
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-3xl font-bold text-white"
              >
                Ritik Meena
              </motion.h2>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-gray-300 font-medium"
            >
              "With great <span className="text-[#E13D0E]">code</span> comes
              great <span className="text-[#025B83]">responsibility</span>"
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-8 justify-center text-lg font-bold"
            >
              <div className="bg-red-500/10 px-6 py-3 rounded-lg border border-[#E13D0E]/20">
                <span className="text-[#E13D0E]">800+ </span>
                <span className="text-gray-300">Problems Solved</span>
              </div>
              <div className="bg-[#025B83]/10 px-6 py-3 rounded-lg border border-blue-500/20">
                <span className="text-[#025B83]">10+ </span>
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
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E13D0E] to-[#025B83] 
                          text-white font-bold px-8 py-3 rounded-xl 
                          transition-all duration-300 group"
              >
                <span className="group-hover:tracking-wider transition-all duration-300">
                  SWING BY MY PROFILE
                </span>
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
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-60 md:w-80 lg:w-96 h-60 md:h-80 lg:h-96">
            <img
              src={heroImage}
              alt="Ritik Meena"
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400x400?text=RM";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



