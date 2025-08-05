import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python (Pandas, NumPy)', level: 90, icon: '🐍' },
    { name: 'Data Analysis & Visualization', level: 92, icon: '📊' },
    { name: 'Machine Learning (Scikit-learn)', level: 85, icon: '🤖' },
    { name: 'SQL/PostgreSQL', level: 88, icon: '🐘' },
    { name: 'Business Intelligence (Power BI)', level: 80, icon: '📈' },
    { name: 'Automation Tools (Zapier, Apps Script)', level: 78, icon: '⚙️' }
  ];

  const softSkills = [
    { name: 'Entrepreneurship', level: 95, icon: '🚀' },
    { name: 'Strategic Thinking', level: 92, icon: '🧠' },
    { name: 'Leadership', level: 90, icon: '👑' },
    { name: 'Communication', level: 94, icon: '💬' },
    { name: 'Data-Driven Decision Making', level: 89, icon: '📌' },
    { name: 'Project Management', level: 87, icon: '🗂️' }
  ];

  const SkillCard = ({ skills, title }: { skills: typeof technicalSkills, title: string }) => (
    <Card className="animate-scale-in hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          {title}
        </h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of the technical capabilities and business insights I apply to drive innovation, automation, and impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <SkillCard skills={technicalSkills} title="Technical Skills" />
          <SkillCard skills={softSkills} title="Business & Leadership Skills" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
