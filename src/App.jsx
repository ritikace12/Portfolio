
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import About from "./Components/About"
const App = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
     
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
