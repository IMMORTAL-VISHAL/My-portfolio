import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Rocket } from 'lucide-react';

const achievements = [
  {
    icon: <Award />,
    title: 'NVIDIA AI Certification',
    description: 'Certified in NVIDIA AI for BASIC & Gen AI Practice'
  },
  {
    icon: <Rocket />,
    title: 'Hackathon Participation',
    description: 'Hack The Mountains 5, Hack It Sapiens'
  },
  {
    icon: <BookOpen />,
    title: 'Education',
    description: 'B.Tech in Computer Science & Engineering'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-teal-900/10 rounded-lg p-6 hover:bg-teal-900/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {React.cloneElement(achievement.icon, { className: "w-8 h-8 text-teal-300 mb-4" })}
              <h3 className="text-xl font-semibold text-gray-100 mb-2">{achievement.title}</h3>
              <p className="text-gray-400">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}