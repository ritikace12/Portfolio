import React from 'react';
import { motion } from 'framer-motion';
import { FaSpider, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiNextdotjs, SiRedux } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact className="text-4xl text-blue-500" />,
      skills: [
        { name: "React.js", level: 90, icon: <FaReact /> },
        { name: "JavaScript", level: 85, icon: <SiJavascript /> },
        { name: "TypeScript", level: 75, icon: <SiTypescript /> },
        { name: "TailwindCSS", level: 85, icon: <SiTailwindcss /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs className="text-4xl text-green-500" />,
      skills: [
        { name: "Node.js", level: 80, icon: <FaNodeJs /> },
        { name: "Python", level: 85, icon: <FaPython /> },
        { name: "MongoDB", level: 75, icon: <SiMongodb /> },
        { name: "SQL", level: 70, icon: <FaDatabase /> }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FaGitAlt className="text-4xl text-red-500" />,
      skills: [
        { name: "Git", level: 85, icon: <FaGitAlt /> },
        { name: "Next.js", level: 80, icon: <SiNextdotjs /> },
        { name: "Redux", level: 75, icon: <SiRedux /> },
        { name: "REST APIs", level: 85, icon: <FaDatabase /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-950 via-blue-950 to-red-950 py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Web Background Effects */}
      <div className="absolute inset-0 opacity-5">
        {/* Large rotating web */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] border-[1px] border-white rounded-full"
        />
        {/* Medium rotating web */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-[1px] border-white rounded-full"
        />
        {/* Small rotating web */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border-[1px] border-white rounded-full"
        />
        {/* Web lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-0.5 h-full bg-white/5"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`
              }}
            />
          ))}
        </div>
      </div>

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
          <span className="text-red-500">SKILL</span>
          <span className="text-blue-500">SET</span>
      </h1>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-br from-red-950/50 to-blue-950/50 rounded-lg p-6 border border-white/10 overflow-hidden group"
          >
            {/* Spider web corners */}
            <div className="absolute top-0 left-0 w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-red-500/30 rounded-tl-lg" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full h-full origin-top-left"
              >
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-0 left-0 w-full h-0.5 bg-red-500/10"
                    style={{ transform: `rotate(${i * 22.5}deg)` }}
                  />
                ))}
              </motion.div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <FaSpider className={`text-3xl ${
                  categoryIndex === 0 ? 'text-red-500' :
                  categoryIndex === 1 ? 'text-blue-500' : 'text-yellow-400'
                }`} />
              </motion.div>
              <h2 className="text-2xl font-bold text-white">{category.title}</h2>
            </div>

            <div className="space-y-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <motion.span
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="text-lg text-gray-300"
                      >
                        {skill.icon}
                      </motion.span>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                      className={`h-full rounded-full ${
                        categoryIndex === 0 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                        categoryIndex === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                        'bg-gradient-to-r from-yellow-400 to-yellow-500'
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional web decorations */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-500/30 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-500/30 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-500/30 rounded-br-lg" />
          </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Skills */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 text-center relative z-10"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Additional Powers</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Docker", "AWS", "Firebase", "GraphQL", "Jest", "CI/CD",
            "Webpack", "Sass", "Material-UI", "Figma", "SEO", "Agile"
          ].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-4 py-2 bg-gradient-to-r from-red-500/10 to-blue-500/10 
                        rounded-full text-gray-300 border border-white/10
                        hover:border-white/20 transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">{skill}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.2 }}
              />
            </motion.div>
        ))}
      </div>
      </motion.div>
    </section>
  );
};

export default Skills;

