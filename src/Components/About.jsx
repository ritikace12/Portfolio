import React from "react";
import { motion } from "framer-motion";
import { FaSpider } from "react-icons/fa";

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "10+", color: "text-[#E13D0E]", bg: "bg-[#E13D0E]/10", border: "border-[#E13D0E]/20" },
    { label: "Problems Solved", value: "800+", color: "text-[#045C83]", bg: "bg-[#045C83]/10", border: "border-[#045C83]/20" },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-6 md:px-16 lg:px-24">
      {/* Section Title */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-16 text-center"
      >
        <div className="inline-block bg-yellow-400 px-8 py-3 transform rotate-2 shadow-xl mb-4">
          <span className="text-black font-bold tracking-wide text-xl">UNMASKING THE</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold">
          <span className="text-[#E13D0E]">DEVE</span>
          <span className="text-[#045C83]">LOPER</span>
        </h1>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 space-y-12">
        {/* About Me Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Header with Animated Icon */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <FaSpider className="text-4xl text-[#E13D0E] animate-spin-slow" />
            <h2 className="text-4xl font-bold text-white">Who Am I?</h2>
          </motion.div>

          {/* About Card */}
          <div className="bg-gradient-to-r from-[#E13D0E]/30 to-[#025B83]/30 p-6 rounded-lg border border-white/20 shadow-lg">
            <p className="text-white leading-relaxed text-lg">
              Hey there! I'm a full-stack developer with a passion for crafting scalable, interactive, and visually stunning web applications.  
              Whether it’s JavaScript, React, Node.js, or Python, I thrive in turning complex problems into sleek and efficient solutions.
            </p>
            <p className="text-white leading-relaxed mt-4 text-lg">
              Think of me as the Spider-Man of coding – quick on my feet, always learning, and constantly adapting to the latest tech.  
              I don’t just build websites, I create experiences that are fast, accessible, and dynamic.
            </p>
            <p className="text-white leading-relaxed mt-4 text-lg">
              I love being a part of the tech community.  
              If I'm not deep in code, you'll probably find me exploring new technologies, debugging the impossible, or refining my latest project.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`${stat.bg} p-6 rounded-lg ${stat.border} border-2 shadow-lg text-center`}
              >
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-md text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

