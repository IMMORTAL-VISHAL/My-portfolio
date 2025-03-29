import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              Hi there! I'm Vishal Pathak, a passionate Full Stack Developer with a keen interest in building scalable web applications and exploring new technologies. My journey in tech has been driven by curiosity and a desire to create meaningful solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently focused on MERN Stack development and DevOps practices, I enjoy tackling complex problems and learning new skills. When I'm not coding, you'll find me solving DSA problems or exploring the latest in Cloud & AI/ML technologies.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src='https://i.postimg.cc/43bqQY6k/photo-2025-01-17-12-05-46.jpg'
                alt="Vishal Pathak"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 border-2 border-teal-300 rounded-lg -translate-x-3 -translate-y-3 z-[-1]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}