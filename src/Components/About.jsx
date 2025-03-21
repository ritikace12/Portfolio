import React from "react";

const About = () => {
  return (
    <section className="bg-black text-black px-10 md:px-16 lg:px-24 py-10 mb-5 flex flex-col items-center justify-between">
    <h1 className="text-4xl md:text-6xl font-extrabold text-center  text-pink-400">
        Highlights
      </h1>
      {/* Key Highlights Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 w-full">
      
        {[
          { title: "⚡ 10+ Projects", desc: "Developed scalable projects using modern web technologies." },
          { title: "💡 React & UI/UX Expert", desc: "Specialized in crafting sleek, high-performance UI components." },
          { title: "🚀 800+ DSA Problems", desc: "Strong problem-solving skills with experience in coding contests." }
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 border-2 border-teal-400 rounded-lg shadow-md bg-white text-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold text-teal-400">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
