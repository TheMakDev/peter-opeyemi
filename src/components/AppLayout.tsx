import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Achievements from './Achievements';
import Contact from './Contact';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Skills />
        <Portfolio />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;