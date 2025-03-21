import ProjectCard from "./ProjectCard";
import chatbotImg from "../assets/Car.png";
import textImage from "../assets/Car.png";
import ecommerceClone from "../assets/Car.png";
import placeholderImg from "../assets/Car.png"; // Placeholder images

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20 px-10 md:px-40">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-12 text-pink-400">
        Projects
      </h1>

      {/* Full-Stack Projects */}
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Full-Stack Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          title="Chatbot with Gemini API"
          main="Built a chatbot using Google's Gemini API with a seamless chat UI."
          bannerImg={chatbotImg}
          demoUrl="https://mark-one.netlify.app/"
          sourceUrl="https://github.com/ritikace12/chatbot"
        />
        <ProjectCard
          title="Event Manager App"
          main="A full-stack Event manager with database integration."
          bannerImg={placeholderImg}
          demoUrl="https://communion-h.netlify.app/"
          sourceUrl="#"
        />
        
        <ProjectCard
          title="Text-to-Image Wrapper Website"
          main="A sleek UI for generating images from text input."
          bannerImg={textImage}
          demoUrl="#"
          sourceUrl="https://github.com/ritikace12/text-image-wrapper"
        />
      </div>

      {/* Frontend Projects */}
      <h2 className="text-3xl font-bold text-teal-400 mt-12 mb-6">Frontend Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <ProjectCard
          title="E-Commerce Clone"
          main="Frontend clone of a modern e-commerce site."
          bannerImg={ecommerceClone}
          demoUrl="https://ani-merch.netlify.app/"
          sourceUrl="https://github.com/ritikace12/ecommerce-clone"
        />

        <ProjectCard
          title="Portfolio Website"
          main="Personal portfolio with animations and modern UI."
          bannerImg={placeholderImg}
          demoUrl="https://ritikmeena.netlify.app/"
          sourceUrl="https://github.com/ritikace12/portfolio"
        />
        <ProjectCard
          title="Expense Tracker"
          main="A real-time expense tracker with data visualization."
          bannerImg={placeholderImg}
          demoUrl="#"
          sourceUrl="#"
        />
      </div>

      {/* Webpages */}
      <h2 className="text-3xl font-bold text-teal-400 mt-12 mb-6">Webpages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          title="Product Landing Page"
          main="A stylish landing page for a product or service."
          bannerImg={placeholderImg}
          demoUrl="#"
          sourceUrl="#"
        />
        <ProjectCard
          title="Resume Builder UI"
          main="A clean, interactive UI for building resumes."
          bannerImg={placeholderImg}
          demoUrl="#"
          sourceUrl="#"
        />

        <ProjectCard
          title="Event Booking Page"
          main="A user-friendly event booking webpage."
          bannerImg={placeholderImg}
          demoUrl="#"
          sourceUrl="#"
        />
      </div>
    </section>
  );
};

export default Projects;

