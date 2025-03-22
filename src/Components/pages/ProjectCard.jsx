import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, main, bannerImg, demoUrl, sourceUrl, onImageError }) => {
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="group relative bg-gradient-to-br from-red-950 to-blue-950 rounded-lg overflow-hidden"
    >
      {/* Project Image with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={bannerImg} 
          alt={title} 
          onError={onImageError}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        {/* Title with Spider-web accent */}
        <div className="relative">
          <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
            {title}
          </h3>
          <div className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm">{main}</p>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          {demoUrl && demoUrl !== "#" && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Demo</span>
              <FaExternalLinkAlt className="text-sm" />
            </motion.a>
          )}
          {sourceUrl && sourceUrl !== "#" && (
            <motion.a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Code</span>
              <FaGithub className="text-sm" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Decorative corner webs */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500/30 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/30 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/30 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500/30 rounded-br-lg" />
    </motion.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  bannerImg: PropTypes.string.isRequired,
  demoUrl: PropTypes.string,
  sourceUrl: PropTypes.string,
  onImageError: PropTypes.func
};

ProjectCard.defaultProps = {
  onImageError: (e) => {
    e.target.onerror = null;
    e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image';
  }
};

export default ProjectCard;
