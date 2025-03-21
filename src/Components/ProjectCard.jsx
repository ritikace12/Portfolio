const ProjectCard = ({ title, main, bannerImg, demoUrl, sourceUrl }) => {
  return (
    <div className=" relative bg-gradient-to-r from-black via-gray-900 to-black border-2 border-teal-400 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 hover:shadow-teal-500/50">
      {/* Project Image */}
      <img src={bannerImg} alt={title} className="w-full h-48  object-cover" />

      {/* Content */}
      <div className="p-5 text-white">
        <h3 className="text-xl font-bold text-teal-400">{title}</h3>
        <p className="text-gray-300 mt-2">{main}</p>

        {/* Buttons */}
        <div className="mt-4 flex gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              className="px-4 py-2 bg-teal-400 text-black font-semibold rounded-md hover:bg-teal-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              className="px-4 py-2 bg-pink-400 text-black font-semibold rounded-md hover:bg-pink-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
