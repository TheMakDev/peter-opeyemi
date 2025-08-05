import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import HomeAbout from '@/components/HomeAbout';
import FeaturedSkills from '@/components/FeaturedSkills';
import FeaturedProjects from '@/components/FeaturedProjects';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <HomeAbout />
        <FeaturedSkills />
        <Stats />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  );
};

export default Home;