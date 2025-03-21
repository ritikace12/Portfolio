
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import About from "./Components/About"
const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
     
      <Projects />
      <About />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
