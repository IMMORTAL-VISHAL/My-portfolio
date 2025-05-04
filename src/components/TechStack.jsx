import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud, Terminal } from 'lucide-react';

const technologies = {
  languages: ['JavaScript', 'Python'],
  frontend: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Redux', 'RestfulAPI'],
  backend: ['Node.js', 'Express.js'],
  databases: ['MongoDB', 'SQL', 'MySql'],
  devops: ['AWS', 'Docker', 'Github Action', 'CI/CD'],
  tools: ['Git', 'GitHub', 'LeetCode', 'CodeChef', 'GFG', 'InterviewBit', 'Stackblitz', 'Canva', 'Vercel', 'FIGMA', 'MONGODB Atlas']
};

const techCategories = [
  { icon: <Code2 />, title: "Languages & Frontend", items: [...technologies.languages, ...technologies.frontend] },
  { icon: <Server />, title: "Backend", items: technologies.backend },
  { icon: <Database />, title: "Databases", items: technologies.databases },
  { icon: <Cloud />, title: "DevOps", items: technologies.devops },
  { icon: <Terminal />, title: "Tools", items: technologies.tools }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-teal-900/10 rounded-lg p-6 hover:bg-teal-900/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {React.cloneElement(category.icon, { className: "w-5 h-5 text-teal-300" })}
                <h3 className="text-lg font-semibold text-gray-100">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-teal-900/20 text-teal-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
