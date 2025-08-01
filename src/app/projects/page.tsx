'use client';

import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from "react-icons/fa";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Pomocus - Pomodoro Focus Timer",
      description: "A modern Pomodoro timer application built with React to help users boost productivity through structured work sessions and breaks.",
      fullDescription: "Pomocus is a clean, intuitive Pomodoro timer web application designed to help users enhance their productivity using the proven Pomodoro Technique. Features customizable timer sessions, automatic progression between work and break periods, and a minimalist interface that eliminates distractions during focus time.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Create React App", "JavaScript", "CSS3", "Vercel"],
      features: ["25-minute focus sessions", "Customizable break intervals", "Session progress tracking", "Clean, distraction-free UI", "Responsive design"],
      liveUrl: "https://pomocus.vercel.app/",
      githubUrl: "https://github.com/Princebounce/pomocus",
      color: "from-orange-200 via-red-300 to-pink-400"
    },
    {
      id: 2,
      title: "Interactive Data Visualization Dashboard",
      description: "An interactive dashboard with dynamic charts, filters, and real-time updates for exploring complex datasets effectively.",
      fullDescription: "This project is an interactive data visualization dashboard designed to provide users with a comprehensive overview of complex datasets. It features dynamic charts, filters, and real-time updates, allowing users to explore data trends and patterns effectively.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Chart.js", "Redux", "Styled-components"],
      features: ["Interactive charts (bar, line, pie)", "Real-time data updates", "Customizable filters", "Responsive design"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-teal-200 via-cyan-300 to-teal-400"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with authentication, payments, and admin dashboard for seamless online shopping.",
      fullDescription: "A comprehensive e-commerce platform built with modern technologies featuring user authentication, payment processing, inventory management, and a powerful admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      features: ["User authentication", "Payment integration", "Admin dashboard", "Inventory management"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-purple-200 via-pink-300 to-purple-400"
    }
  ];

  const currentProject = projects[selectedProject];

  return (
    <div>
      {/* Projects Showcase */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Featured Projects</h1>
          <p className="text-lg text-gray-300 text-center mb-12">
            Explore my latest work and technical achievements
          </p>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Project Showcase */}
            <div className="order-2 lg:order-1">
              {/* Project Image */}
              <div className={`h-80 bg-gradient-to-br ${currentProject.color} rounded-2xl relative overflow-hidden mb-6 group cursor-pointer`}>
                {selectedProject === 0 ? (
                  // Special design for Pomocus - timer/productivity theme
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border-8 border-orange-300 rounded-full relative">
                      <div className="absolute inset-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                        <div className="text-white font-bold text-2xl">25:00</div>
                      </div>
                      <div className="absolute top-0 left-1/2 w-2 h-6 bg-orange-600 transform -translate-x-1/2 -translate-y-1"></div>
                    </div>
                  </div>
                ) : selectedProject === 1 ? (
                  // Special geometric design for dashboard
                  <div className="absolute inset-0">
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-600 rounded-full transform translate-y-1/2 -translate-x-1/4 opacity-80 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500 rounded-full transform -translate-y-1/4 translate-x-1/4 opacity-90 group-hover:scale-110 transition-transform duration-500"></div>
                  </div>
                ) : (
                  <img 
                    src={currentProject.image} 
                    alt={currentProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                
                {/* Overlay with quick actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={currentProject.liveUrl}
                    className="bg-cyan-400 text-gray-900 p-3 rounded-full hover:bg-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={currentProject.githubUrl}
                    className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Navigation */}
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={() => setSelectedProject(selectedProject === 0 ? projects.length - 1 : selectedProject - 1)}
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedProject(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === selectedProject ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => setSelectedProject(selectedProject === projects.length - 1 ? 0 : selectedProject + 1)}
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Project Details */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentProject.title}</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {currentProject.fullDescription}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Key Features</h3>
                <ul className="space-y-2">
                  {currentProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-700 px-3 py-2 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  className="bg-cyan-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Project
                </a>
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <FaGithub className="w-5 h-5" />
                  View Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="px-6 pb-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(index)}
                className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  {index === 0 ? (
                    // Pomocus timer design
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 border-4 border-orange-300 rounded-full relative">
                        <div className="absolute inset-1 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                          <div className="text-white font-bold text-xs">25:00</div>
                        </div>
                      </div>
                    </div>
                  ) : index === 1 ? (
                    // Dashboard geometric design
                    <div className="absolute inset-0">
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-600 rounded-full transform translate-y-1/2 -translate-x-1/4 opacity-80"></div>
                      <div className="absolute top-0 right-0 w-28 h-28 bg-teal-500 rounded-full transform -translate-y-1/4 translate-x-1/4 opacity-90"></div>
                    </div>
                  ) : (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;