import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import img from '../assets/img.png';

const Hero = () => {
  const scrollToAbout = () => {
    window.location.href = '/about';
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src={img}
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-6 shadow-2xl animate-scale-in"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
            James Peter Opeyemi
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
            Entrepreneur | IT Expert | Data Scientist | Economist
          </p>
          <div className="space-x-4 animate-fade-in">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              Know More About Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;