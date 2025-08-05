import React from 'react';
import { Users, Target, Lightbulb, TrendingUp } from 'lucide-react';

const FeaturedSkills = () => {
  const skills = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership & Management",
      description: "Team building, project coordination, strategic planning"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Planning", 
      description: "Goal setting, process optimization, performance analysis"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Problem Solving",
      description: "Innovation, critical thinking, solution development"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Development",
      description: "Growth strategies, market analysis, client relations"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Core Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Specialized skills that drive innovative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSkills;