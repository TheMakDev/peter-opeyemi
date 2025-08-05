import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      year: '2024',
      title: 'AWS Solutions Architect',
      organization: 'Amazon Web Services',
      description: 'Certified in designing distributed systems on AWS',
      type: 'certification',
      icon: '☁️'
    },
    {
      year: '2023',
      title: 'Best Innovation Award',
      organization: 'Tech Conference 2023',
      description: 'Won first place for AI-powered productivity tool',
      type: 'award',
      icon: '🏆'
    },
    {
      year: '2023',
      title: 'React Advanced Certification',
      organization: 'Meta',
      description: 'Advanced React patterns and performance optimization',
      type: 'certification',
      icon: '⚛️'
    },
    {
      year: '2022',
      title: 'Team Leadership Excellence',
      organization: 'Previous Company',
      description: 'Led team to 40% productivity increase',
      type: 'achievement',
      icon: '👑'
    },
    {
      year: '2021',
      title: 'Google Cloud Professional',
      organization: 'Google Cloud',
      description: 'Professional Cloud Architect certification',
      type: 'certification',
      icon: '🌐'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'certification': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'award': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'achievement': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognition and certifications that validate my expertise and commitment to excellence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
            
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="relative flex items-start mb-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                
                <div className="ml-16 w-full">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{achievement.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {achievement.title}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                              {achievement.organization}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <Badge className={getTypeColor(achievement.type)}>
                            {achievement.type}
                          </Badge>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {achievement.year}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;