import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Activity, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Forever- E-Commerce',
    description: 'Here you can shop the clothes for everyone Men, Women and child also This app is just like full stack E-Commerece Website.',
    image: 'https://www.the-future-of-commerce.com/wp-content/uploads/2020/01/what-is-e-commerce-SOCIAL.jpg',
    tech: ['MERN Stack', 'WebRTC', 'Stripe','Razopay'],
    links: {
      github: 'https://github.com/IMMORTAL-VISHAL/Foreverc-E-commerec-',
      live: 'foreverc-frontend-fawn.vercel.app/'
    }
  },
  {
    title: 'Travel Blog & Booking System',
    description: 'A full-stack MERN application for travel blogging and booking with features like user authentication, blog management, and booking system.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=600&h=400',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    links: {
      github: 'https://github.com/IMMORTAL-VISHAL/MYODYSSEY',
      live: '#'
    }
  },
  {
    title: 'Prescripto (Doctor Booking)',
    description: 'Here you can book online doctor for the any medical problem and you can make your health perfect',
    image: 'https://i.postimg.cc/J0bpMgpw/header-img.png',
    tech: ['MERN Stack', 'WebRTC', 'Stripe','Razopay'],
    links: {
      github: 'https://github.com/IMMORTAL-VISHAL/Foreverc-E-commerec-',
      live: '#'
    }
  },
  {
    title: 'Online Yoga Instructor Booking App',
    description: 'Platform for booking yoga sessions with instructors, featuring real-time video calls and payment integration.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600&h=400',
    tech: ['MERN Stack', 'WebRTC', 'Stripe'],
    links: {
      github: '#',
      live: '#'
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative grid md:grid-cols-12 gap-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-teal-900/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a
                        href={project.links.github}
                        className="p-2 bg-[#0a192f]/80 rounded-full hover:bg-[#0a192f] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-6 h-6 text-teal-300" />
                      </a>
                      <a
                        href={project.links.live}
                        className="p-2 bg-[#0a192f]/80 rounded-full hover:bg-[#0a192f] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-6 h-6 text-teal-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-teal-900/20 text-teal-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}