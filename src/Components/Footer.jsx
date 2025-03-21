import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram, FaCode } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-10 md:px-32 shadow-lg">
      {/* Contact Links */}
      <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold">
        <a href="mailto:ritikm361@gmail.com" className="flex items-center gap-2 hover:text-pink-400 transition">
          <MdOutlineEmail size={24} /> Email
        </a>
        <a href="https://linkedin.com/in/ritik-meena-9a5582204" className="flex items-center gap-2 hover:text-pink-400 transition">
          <CiLinkedin size={24} /> LinkedIn
        </a>
        <a href="https://github.com/ritikace12" className="flex items-center gap-2 hover:text-pink-400 transition">
          <FaGithub size={24} /> GitHub
        </a>
        <a href="https://www.instagram.com/" className="flex items-center gap-2 hover:text-pink-400 transition">
          <FaInstagram size={24} /> Instagram
        </a>
        <a href="https://www.geeksforgeeks.org/" className="flex items-center gap-2 hover:text-pink-400 transition">
          <SiGeeksforgeeks size={24} /> GeeksforGeeks
        </a>
        <a href="https://leetcode.com/" className="flex items-center gap-2 hover:text-pink-400 transition">
          <FaCode size={24} /> LeetCode
        </a>
      </div>

      {/* Extra Resources */}
      <div className="mt-12 text-center text-gray-400 text-lg font-medium">
        <p className="mt-4 text-sm">
          © {new Date().getFullYear()} All rights reserved. Built with 💖 & caffeine.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


