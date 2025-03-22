import React from 'react';
import { motion } from 'framer-motion';
import { FaSpider } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Python', level: 85 },
    { name: 'MongoDB', level: 75 },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-950 via-blue-950 to-red-950 py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Web Background Effect */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full border-[4px] border-white rounded-full"
        />
      </div>

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
          <span className="text-red-500">DEVE</span>
          <span className="text-blue-500">LOPER</span>
        </h1>
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* About Me Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <FaSpider className="text-3xl text-red-500" />
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>
          
          <div className="bg-gradient-to-br from-red-950/50 to-blue-950/50 p-6 rounded-lg border border-white/10">
            <p className="text-gray-300 leading-relaxed">
              Hey there! I'm a passionate full-stack developer with a knack for crafting web applications that make a difference. 
              Just like your friendly neighborhood Spider-Man, I believe in using my powers (coding skills) responsibly to create 
              amazing user experiences and solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              When I'm not swinging through the vast web of code, you can find me exploring new technologies, 
              contributing to open-source projects, or helping other developers level up their skills.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
              <div className="text-2xl font-bold text-red-500">2+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
              <div className="text-2xl font-bold text-blue-500">20+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="bg-yellow-400/10 p-4 rounded-lg border border-yellow-400/20">
              <div className="text-2xl font-bold text-yellow-400">800+</div>
              <div className="text-sm text-gray-300">Problems Solved</div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <FaSpider className="text-3xl text-blue-500" />
            <h2 className="text-3xl font-bold text-white">My Powers</h2>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between text-sm">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-red-500 to-blue-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="bg-gradient-to-br from-red-950/50 to-blue-950/50 p-6 rounded-lg border border-white/10 mt-8">
            <h3 className="text-xl font-bold text-white mb-4">Additional Powers</h3>
            <div className="flex flex-wrap gap-3">
              {['Git', 'Docker', 'AWS', 'Redux', 'Express', 'TailwindCSS', 'Next.js', 'GraphQL'].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-full text-sm text-gray-300 border border-white/10"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;



