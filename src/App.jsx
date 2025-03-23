import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaCode } from 'react-icons/fa';
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./Components/About";
import Contact from './Components/Contact';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="comic-book">
      {/* Static Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-black shadow-lg">
        <div className="web-lines"></div>
        <div className="container  px-4">
          <div className="flex items-center justify-between py-2">
            <motion.div 
              className="logo-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FaCode className="text-[#e13d0e] text-2xl" />
              <span className="text-xl md:text-2xl font-bold">Ritik Meena</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden text-black md:flex gap-6">
              <motion.a 
                href="#page1" 
                className="comic-nav-link"
                whileHover={{ scale: 1.05 }}

              >
                ORIGIN STORY
              </motion.a>
              <motion.a 
                href="#page2" 
                className="comic-nav-link"
                whileHover={{ scale: 1.05 }}

              >
                ADVENTURES
              </motion.a>
              <motion.a 
                href="#page3" 
                className="comic-nav-link"
                whileHover={{ scale: 1.05 }}

              >
                TEAM UP!
              </motion.a>
              <motion.a 
                href="#page4" 
                className="comic-nav-link"
                whileHover={{ scale: 1.05}}

              >
                NEXT ISSUE...
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-button md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.div 
            className={`mobile-nav-panel md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0,
              height: isMenuOpen ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-2 py-3 relative z-10">
              <motion.a 
                href="#page1" 
                className="comic-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                ORIGIN STORY
              </motion.a>
              <motion.a 
                href="#page2" 
                className="comic-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                ADVENTURES
              </motion.a>
              <motion.a 
                href="#page3" 
                className="comic-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                TEAM UP!
              </motion.a>
              <motion.a 
                href="#page4" 
                className="comic-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                NEXT ISSUE...
              </motion.a>
            </div>
          </motion.div>
        </div>
      </nav>

      <main className="w-full max-w-[1400px] mx-auto">
        {/* Page 1: The Complete Origin Story */}
        <section id="page1" className="comic-page min-h-screen pt-24">
          <div className="comic-page-header">
            <h1 className="comic-title-text text-4xl md:text-6xl text-center py-8">THE ORIGIN STORY!</h1>
            <div className="comic-issue-number">ISSUE #1</div>
          </div>

          <div className="origin-story-layout">
            {/* Main Hero Panel */}
            <div className="comic-panel main-hero-panel">
              <div className="comic-caption">WHO AM I?</div>
              <div className="comic-action-text top-4 right-4">*THWIP!*</div>
      <Hero />
            </div>

            {/* Origin Story Panel */}
            <div className="comic-panel origin-panel">
              <div className="comic-caption">THE BEGINNING...</div>
              <div className="comic-speech-bubble left-bubble">
                <p className="font-bold">It all started when...</p>
              </div>
      <About />
            </div>

            {/* Powers Panel */}
            <div className="comic-panel powers-panel">
              <div className="comic-caption">SUPER POWERS!</div>
              <div className="comic-action-text top-8 right-8 rotate-12">*POW!*</div>
              <Skills />
              <div className="comic-action-text bottom-4 left-8 -rotate-12">*BOOM!*</div>
            </div>

            {/* Corner Web Decorations */}
            <div className="corner-web top-left"></div>
            <div className="corner-web top-right"></div>
            <div className="corner-web bottom-left"></div>
            <div className="corner-web bottom-right"></div>
          </div>
        </section>

        {/* Page 2: Projects */}
        <section id="page2" className="comic-page min-h-screen pt-24">
          <div className="comic-page-header">
            <h1 className="comic-title-text text-4xl md:text-6xl text-center py-8">PREVIOUS ADVENTURES!</h1>
          </div>
          <div className="comic-grid-layout">
            <div className="comic-panel">
              <div className="comic-caption">EPIC QUESTS!</div>
              <div className="comic-action-text top-8 right-8 rotate-12">*ZOOM!*</div>
      <Projects />
              <div className="comic-action-text bottom-4 left-8 -rotate-12">*BAM!*</div>
            </div>
          </div>
        </section>

        {/* Page 3: Contact */}
        <section id="page3" className="comic-page min-h-screen pt-24">
          <div className="comic-page-header">
            <h1 className="comic-title-text text-4xl md:text-6xl text-center py-8">TEAM UP WITH ME!</h1>
          </div>
          <div className="comic-grid-layout">
            <div className="comic-panel contact-panel">
              <div className="comic-caption">JOIN FORCES!</div>
              <div className="comic-action-text top-8 right-8 rotate-12">*KAPOW!*</div>
              <Contact />
              <div className="comic-action-text bottom-4 left-8 -rotate-12">*WHAM!*</div>
            </div>
          </div>
        </section>

        {/* Page 4: Current Projects */}
        <section id="page4" className="comic-page min-h-screen pt-14">
          <div className="comic-page-header">
            <h1 className="comic-title-text text-4xl md:text-6xl text-center py-8">COMING SOON...</h1>
          </div>
          <div className='gap-4 grid mb-4'>
            {/* Mark AI Assistant Project */}
            <div className="comic-panel current-project-panel">
              <div className="comic-caption">MARK-II : THE AI ASSISTANT</div>
              <div className="p-6">
                <motion.h3 
                  className="text-3xl font-bold mb-4"
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                >
                  Building the future of AI assistance...
                </motion.h3>
                <p className="text-lg mb-4">A revolutionary AI assistant that understands and helps like never before!</p>
                <div className="comic-action-text">*PROCESSING...*</div>
              </div>
            </div>

            {/* Vivid Website Project */}
            <div className="comic-panel current-project-panel">
              <div className="comic-caption">THE VIVID EXPERIENCE</div>
              <div className="p-6">
                <motion.h3 
                  className="text-3xl font-bold mb-4"
                  initial={{ x: 100 }}
                  whileInView={{ x: 0 }}
                >
                  Creating vibrant digital experiences...
                </motion.h3>
                <p className="text-lg mb-4">A website that pushes the boundaries of design and interaction!</p>
                <div className="comic-action-text">*DESIGNING...*</div>
              </div>
            </div>

            {/* Cliffhanger */}
            <div className="comic-page-header">
            <h1 className="comic-title-text text-4xl md:text-6xl text-center py-8">To Be Continued...</h1>
          </div>
          </div>
        </section>
       
      </main>
    </div>
  );
};

export default App;
