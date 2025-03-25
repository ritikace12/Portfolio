import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import chatbotImg from "../Assets/images/Friday.png";
import karen from "../Assets/images/Karen.png";
import gwen from "../Assets/images/Gwen.png";
import nezukoImg from "../Assets/images/Nezuko.png";
import mistImg from "../Assets/images/Mist.png";
import placeholderImg from "../Assets/images/car.png";
import hubImg from "../Assets/images/Hub.png";
import ritikImg from "../Assets/images/DEV.png";
import uiImg from "../Assets/images/PORTGAS-UI.png";
import { FaSpider } from "react-icons/fa";

const Projects = () => {
  // Fallback image handler function
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black py-20 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Web Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
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
        <div className="inline-block bg-white px-8 py-3 transform -rotate-2 shadow-xl mb-4">
          <span className="text-black font-bold tracking-wide text-xl">MY WEB-SLINGING</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold">
          <span className="text-[#E13D0E]">PRO</span>
          <span className="text-[#035D83]">JECTS</span>
        </h1>
      </motion.div>

      {/* Full-Stack Projects */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16"
      >
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <FaSpider className="text-3xl text-[#E13D0E]" />
            <h2 className="text-3xl font-bold text-white border-b-2 border-[#E13D0E] pb-2">
              Full-Stack Projects -
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
            <ProjectCard
              title="Karen"
              main="A text to image website with sleek UI for generating images from text input."
              bannerImg={karen}
              onImageError={handleImageError}
              demoUrl="https://spidy-bugs.netlify.app/"
              sourceUrl="#"
            />
            <ProjectCard
              title="Veronica"
              main="A code review website for reviewing code built using Google's Gemini API."
              bannerImg={hubImg}
              onImageError={handleImageError}
              demoUrl="https://spidy-bugs.netlify.app/"
              sourceUrl="#"
            />
            <ProjectCard
              title="Friday"
              main="Built an AI assistant with tuning model using Google's Gemini API with a seamless chat UI."
              bannerImg={chatbotImg}
              onImageError={handleImageError}
              demoUrl="https://friday-12.netlify.app/"
              sourceUrl="#"
            />
           
          </div>
        </div>

        {/* Frontend Projects */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <FaSpider className="text-3xl text-[#035D83]" />
            <h2 className="text-3xl font-bold text-white border-b-2 border-[#035D83] pb-2">
              Frontend Projects -
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
              title="Portgas UI"
              main="A UI library for reusing JSX Components."
              bannerImg={uiImg}
              onImageError={handleImageError}
              demoUrl="https://portgas-ui.netlify.app/"
              sourceUrl="#"
            />
            <ProjectCard
              title="Web Developer"
              main="Spider-Man themed portfolio website with all my work."
              bannerImg={ritikImg}
              onImageError={handleImageError}
              demoUrl="#page1"
              sourceUrl="#"
            />
          
             <ProjectCard
              title="Portfolio Website"
              main="Personal portfolio with animations and modern UI."
              bannerImg={gwen}
              onImageError={handleImageError}
              demoUrl="https://ritikmeena-12.netlify.app/"
              sourceUrl="#"
            />
          </div>
        </div>

        {/* Webpages */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <FaSpider className="text-3xl text-yellow-400" />
            <h2 className="text-3xl font-bold text-white border-b-2 border-yellow-300 pb-2">
              Landing Pages  -
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Nezuko"
              main="A stylish landing page built on Anime theme."
              bannerImg={nezukoImg}
              onImageError={handleImageError}
              demoUrl="https://nezuko-kamado.netlify.app/"
              sourceUrl="#"
            />
            <ProjectCard
              title="Zag Cars"
              main="An automobile website with sleek UI."
              bannerImg={placeholderImg}
              onImageError={handleImageError}
              demoUrl="https://zagcars.netlify.app/"
              sourceUrl="#"
            />
            <ProjectCard
              title="Hashira Training"
              main="A landing page for a training website."
              bannerImg={mistImg}
              onImageError={handleImageError}
              demoUrl="https://mist-hashira.netlify.app/"
              sourceUrl="#"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

