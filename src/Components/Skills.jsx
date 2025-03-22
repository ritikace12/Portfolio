import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact />, color: "text-teal-400" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-teal-300" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Python", icon: <FaPython />, color: "text-yellow-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "SQL", icon: <FaDatabase />, color: "text-blue-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
];

const Skills = () => {
  return (
    <section className="relative min-h-screen bg-black py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center">
      {/* Section Title */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-16 text-center"
      >
        <div className="inline-block bg-yellow-400 px-8 py-3 transform -rotate-2 shadow-xl mb-4">
          <span className="text-black font-bold tracking-wide text-xl">SPIDER SENSE</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold">
          <span className="text-[#E13D0E]">SKILL</span>
          <span className="text-[#045C83]">SET</span>
        </h1>
      </motion.div>

      {/* Skills Flexbox */}
      <motion.div
        className="flex flex-wrap justify-center gap-x-8 gap-y-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-[#111] border-1 border-white/10 flex flex-col items-center justify-center rounded-lg shadow-lg transition-all duration-300 hover:border-white hover:shadow-[0_0_15px_teal]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className={`text-4xl sm:text-5xl ${skill.color}`}>{skill.icon}</div>
            <span className="text-white text-xs sm:text-sm mt-2">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;



