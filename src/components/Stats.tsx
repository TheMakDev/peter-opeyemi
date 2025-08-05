import React from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Target className="w-8 h-8" />,
      number: "50+",
      label: "Projects Completed"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "25+",
      label: "Happy Clients"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "10+",
      label: "Awards & Recognition"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "5+",
      label: "Years Experience"
    }
  ];

  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-800">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;