'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Code, Brackets, Settings, Terminal, GitBranch, Send, SendHorizontal, FileCode } from 'lucide-react';
import emailjs from '@emailjs/browser';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          timestamp: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {
      title: "Pomocus - Pomodoro Timer",
      description: "A modern Pomodoro timer application built with React to help users boost productivity through structured work sessions.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
      link: "/projects"
    },
    {
      title: "Interactive Dashboard",
      description: "An interactive dashboard for data visualization and user management with dynamic charts and real-time updates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      link: "/projects"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS showcasing projects and skills.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&crop=center",
      link: "/projects"
    }
  ];

  const skills = [
    { name: "HTML", icon: <Code className="w-8 h-8" /> },
    { name: "CSS", icon: <Brackets className="w-8 h-8" /> },
    { name: "JavaScript", icon: <Settings className="w-8 h-8" /> },
    { name: "TypeScript", icon: <FileCode className="w-8 h-8" /> },  
    { name: "React", icon: <Terminal className="w-8 h-8" /> },
    { name: "Git CLI", icon: <GitBranch className="w-8 h-8" /> }, 
    { name: "Axios", icon: <Send className="w-8 h-8" /> },
    { name: "RESTful API", icon: <SendHorizontal className="w-8 h-8" /> } 
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm Ayo Lawal, a Front-End Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I craft intuitive and engaging web experiences using modern technologies. Explore my 
            portfolio to see my work and skills.
          </p>
          <Link 
            href="/projects"
            className="inline-block bg-cyan-400 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-cyan-300 transition-colors"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="h-48 bg-gray-700 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <Link 
                    href={project.link}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors">
                <div className="flex justify-center mb-4 text-gray-300">
                  {skill.icon}
                </div>
                <h3 className="text-sm font-medium">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-cyan-400 transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-cyan-400 transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-cyan-400 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-cyan-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;