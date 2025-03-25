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
      className="group relative bg-white rounded-lg border-2 border-white overflow-hidden"
    >
      {/* Project Image with Overlay */}
      <div className="relative p-6  h-48 overflow-hidden">
        <img 
          src={bannerImg} 
          alt={title} 
          onError={onImageError}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="relative p-5 space-y-4">
        {/* Title with Spider-web accent */}
        <div className="relative">
          <h3 className="text-xl font-bold text-[#E13D0E] group-hover:text-[#E13D0E] transition-colors">
            {title}
          </h3>
          <div className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </div>

        {/* Description */}
        <p className="text-black text-sm">{main}</p>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          {demoUrl && demoUrl !== "#" && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#E13D0E] text-white rounded-md hover:bg-[#E13D0E] transition-colors"
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
              className="flex items-center gap-2 px-4 py-2 bg-[#035D83] text-white rounded-md hover:bg-[#035D83] transition-colors"
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
