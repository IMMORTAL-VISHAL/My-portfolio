import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send} from 'lucide-react';

const contactLinks = [
  {
    icon: <Github />,
    label: 'GitHub',
    href: 'https://github.com/mortalvishal',
    username: 'IMMORTAL-VISHAL'
  },
  {
    icon: <Linkedin />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mortalvishal/',
    username: 'Vishal Pathak'
  },
  {
    icon: <Mail />,
    label: 'Email',
    href: 'mailto:vishalpathak842@gmail.com',
    username: 'vishalpathak842@gmail.com'
  },
  // {
  //   icon : <Leetcode />,
  //   label: 'Leetcode',
  //   href : 'https://leetcode.com/u/IAMMORTAL/',
  //   username: 'IAMMORTAL'

  // },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-gray-400 mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <motion.a
            href="mailto:vishalpathak842@gmail.com"
            className="inline-flex items-center gap-2 bg-teal-300 text-[#0a192f] px-6 py-3 rounded-full hover:bg-teal-400 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Say Hello
            <Send size={20} />
          </motion.a>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-teal-300 transition-colors duration-300"
            >
              {React.cloneElement(link.icon, { className: "w-5 h-5" })}
              <span>{link.username}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
