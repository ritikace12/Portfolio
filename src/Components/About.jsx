import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-black via-gray-900 to-black text-white px-6 md:px-16 lg:px-24 py-12"
    >
      {/* About Text */}
      <div className="max-w-4xl mx-auto text-center py-2 space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold text-pink-400">
          About Me
        </h2>
        <p className="text-lg leading-relaxed ">
          I'm a passionate{" "}
          <span className="text-teal-400 font-semibold">Full-Stack Developer{" "}</span>  
          dedicated to building modern, high-performance web applications.  
          With expertise in{" "}
          <span className="text-teal-400 font-semibold">React, Node.js, and Tailwind CSS</span>,  
          I focus on crafting seamless and scalable digital experiences.  
          My strong problem-solving skills are backed by solving{" "}
          <span className="text-teal-400 font-semibold">800+ DSA problems</span>.
        </p>
      </div>

      {/* Key Highlights Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {[
          { title: "⚡ 10+ Projects", desc: "Built scalable applications using modern technologies." },
          { title: "💡 React & UI/UX Expert", desc: "Specialized in sleek, high-performance UI components." },
          { title: "🚀 800+ DSA Problems", desc: "Strong problem-solving skills with coding contest experience." }
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 border-2 border-teal-400 rounded-xl shadow-md 
                      bg-white transition-all duration-300 
                      transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.7)]"
          >
            <h3 className="text-xl font-bold text-teal-400">{item.title}</h3>
            <p className="mt-2 text-teal-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;



