import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import img from '../assets/img.png';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

const About = () => {
  const timelineData = [
    {
      year: '1995',
      title: 'Early Life',
      description: 'Born in San Francisco, showed early interest in technology and problem-solving.',
      image: img
    },
    {
      year: '2017',
      title: 'University Graduate',
      description: 'Graduated with Computer Science degree from Stanford University.',
      image: img2
    },
    {
      year: '2018',
      title: 'First Job',
      description: 'Started as Junior Developer at Tech Startup, learned full-stack development.',
      image: img3
    },
    {
      year: '2021',
      title: 'Senior Developer',
      description: 'Promoted to Senior Full-Stack Developer, leading team of 5 developers.',
      image: img4
    },
    {
      year: '2024',
      title: 'Freelance Journey',
      description: 'Started freelancing, working with clients worldwide on innovative projects.',
      image: img
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Story
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey of continuous learning, growth, and passion for creating meaningful digital experiences.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>
          
          {timelineData.map((item, index) => (
            <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <Card className="animate-fade-in hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 rounded-full mx-auto shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;