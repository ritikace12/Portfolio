import React, { useState } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black shadow-lg px-8 md:px-12 py-4 z-50 font-bold backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaCode size={32} className="text-pink-400" />
          <span className="text-3xl font-extrabold tracking-wide text-white">
            DevPortfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {["Hero", "Skills", "Projects", "Footer"].map((label, index) => (
            <a
              key={index}
              href={`#${label.toLowerCase()}`}
              className="relative px-4 py-2 rounded-lg text-lg text-white transition duration-300 
              hover:text-teal-400 hover:scale-105 "
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg shadow-md py-6">
          {["Hero", "Skills", "Projects", "Footer"].map((label, index) => (
            <a
              key={index}
              href={`#${label.toLowerCase()}`}
              className="block text-center py-3 text-lg text-teal-400 transition duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;







