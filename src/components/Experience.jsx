import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, BookOpen } from 'lucide-react';

const experiences = [
  {
    icon: <GraduationCap />,
    title: 'Education',
    organization: 'B.Tech in Computer Science & Engineering',
    duration: '2020 - 2024',
    description: 'Focused on core computer science subjects, data structures, and algorithms.'
  },
  {
    icon: <Code />,
    title: 'Self-Learning & Projects',
    organization: 'Personal Development',
    duration: '2022 - Present',
    description: 'Built multiple full-stack applications using MERN stack and explored DevOps technologies.'
  },
  {
    icon: <BookOpen />,
    title: 'Competitive Programming',
    organization: 'Various Platforms',
    duration: '2025 - Present',
    description: 'Active problem solver on LeetCode, CodeChef, and GeeksForGeeks.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-teal-300/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-[#0a192f] border-2 border-teal-300 rounded-full -translate-x-[7px]" />
              <div className="bg-teal-900/10 rounded-lg p-6 hover:bg-teal-900/20 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-2">
                  {React.cloneElement(exp.icon, { className: "w-5 h-5 text-teal-300" })}
                  <h3 className="text-xl font-semibold text-gray-100">{exp.title}</h3>
                </div>
                <p className="text-teal-300 mb-1">{exp.organization}</p>
                <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}