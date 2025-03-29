import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-900/30 via-transparent to-transparent pointer-events-none"></div>
      <Header />
      <main className="relative container mx-auto px-4 py-8 space-y-32">
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="relative border-t border-white/10 py-6 text-center text-sm text-white/60">
        <p>© 2024 Vishal Pathak.</p>
      </footer>
    </div>
  );
}

export default App;