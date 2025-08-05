import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Heart } from 'lucide-react';
import img3 from '../assets/img4.jpg';

const HomeAbout = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated professional with over 5 years of experience delivering 
              exceptional results across diverse projects. My journey began with a passion 
              for excellence and innovation, which has driven me to continuously grow and 
              adapt in an ever-evolving professional landscape.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              When I'm not working on exciting projects, you'll find me exploring new 
              opportunities for growth, collaborating with talented teams, and sharing 
              insights with fellow professionals in my field.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-300">Exeter uk</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-300">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-300">Problem Solver</span>
              </div>
            </div>
            
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <span>Learn More About Me</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-1">
              <img
                src={img3}
                alt="About me"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;