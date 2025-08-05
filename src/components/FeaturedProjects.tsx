import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "AI-Powered Market Prediction Tool",
      description: "Developing a machine learning model to forecast stock and crypto trends using real-time data.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
      technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Business Intelligence Automation Suite",
      description: "Building a dashboard that automates business reporting and provides data-driven decision support.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      technologies: ["Power BI", "SQL", "ETL", "Data Warehousing"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Startup Operations Toolkit",
      description: "Creating automation tools to help startups streamline daily tasks and scale faster with minimal overhead.",
      image: "https://images.unsplash.com/photo-1581091226825-8e23f47b17d2",
      technologies: ["Zapier", "Node.js", "Google Apps Script", "Airtable"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Projects & Initiatives
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A glimpse into innovative solutions I’m building at the intersection of tech, data, and business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Details</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    <span>Case Study</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
