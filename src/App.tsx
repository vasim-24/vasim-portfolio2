import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { initSmoothScroll } from './animations/gsapConfig';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Initialize Lenis Smooth Scroll with GSAP
  useEffect(() => {
    const { cleanup } = initSmoothScroll();
    return () => cleanup();
  }, []);

  // Active section scroll spy
  useEffect(() => {
    const sections = ['hero', 'about', 'work', 'achievements', 'skills', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#0D1117] selection:bg-[#FF5A0A] selection:text-white">
      {/* Interactive Custom Cursor Follower */}
      <CustomCursor />

      {/* Floating / Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Refined Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;
