import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpider, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-2xl" />,
      url: 'https://github.com/ritikace12'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-2xl" />,
      url: 'https://linkedin.com/in/ritik-meena-9a5582204'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="text-2xl" />,
      url: 'https://twitter.com/ritikace12'
    },
    {
      name: 'Email',
      icon: <MdEmail className="text-2xl" />,
      url: 'mailto:ritikmeena@gmail.com'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-950 via-blue-950 to-red-950 py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Web Background Effect */}
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
        <div className="inline-block bg-yellow-400 px-8 py-3 transform rotate-2 shadow-xl mb-4">
          <span className="text-black font-bold tracking-wide text-xl">SEND YOUR</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold">
          <span className="text-red-500">WEB</span>
          <span className="text-blue-500">SIGNAL</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Contact Form */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <FaSpider className="text-3xl text-red-500" />
            <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gradient-to-r from-red-950/50 to-blue-950/50 rounded-lg border border-white/10 text-white focus:outline-none focus:border-red-500 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gradient-to-r from-red-950/50 to-blue-950/50 rounded-lg border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-gradient-to-r from-red-950/50 to-blue-950/50 rounded-lg border border-white/10 text-white focus:outline-none focus:border-yellow-400 transition-all resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-red-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-red-500/20 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <FaSpider className="text-3xl text-blue-500" />
            <h2 className="text-3xl font-bold text-white">Connect With Me</h2>
          </div>

          <div className="bg-gradient-to-br from-red-950/50 to-blue-950/50 p-8 rounded-lg border border-white/10">
            <p className="text-gray-300 leading-relaxed mb-8">
              Feel free to reach out! Whether you want to discuss a project, ask a question, 
              or just say hi, I'll get back to you as soon as possible.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-lg border border-white/5 text-gray-300 hover:text-white transition-colors"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-gradient-to-br from-red-950/50 to-blue-950/50 p-8 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Location</h3>
            <p className="text-gray-300">
              Based in Jaipur, India
              <br />
              Available for remote work worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 