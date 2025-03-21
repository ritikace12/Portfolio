import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";

// Skills Data
const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-400" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 sm:px-12 md:px-20 lg:px-32 bg-white text-black border-y-4 border-pink-400 shadow-lg"
    >
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-10 text-teal-400">
        Skills & Technologies
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 border-2 border-pink-400 rounded-lg shadow-md flex flex-col 
                      items-center justify-center gap-3 bg-white text-black 
                      transform transition duration-300 hover:scale-105 
                      hover:shadow-[0_0_15px_rgba(255,20,147,0.8)]"
          >
            <span className="text-4xl">{skill.icon}</span>
            <p className="text-md font-semibold text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

