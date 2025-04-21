import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-primary-300 selection:text-primary-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full gradient-bg"></div>
      </div>
      
      <NavBar isScrolled={isScrolled} />
      
      <main className="relative">
        <section id="home" className="min-h-screen pt-16">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="skills" className="py-20">
          <Skills />
        </section>
        
        <section id="projects" className="py-20">
          <Projects />
        </section>
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;