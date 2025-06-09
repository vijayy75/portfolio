import About from './components/About';
import BlobsBackground from './components/BlobsBackground';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="relative bg-white/10 text-white">
      <BlobsBackground />
      <Navbar />

      
      <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
        <section id="home" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-start">
          <About />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="contact" className="snap-start">
          <Contact />
        </section>
        <section id="footer" className="snap-start">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
