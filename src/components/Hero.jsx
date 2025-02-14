import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import profilePic from '../assets/profile1.png';
import resumePDF from '../assets/resume.pdf';


const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center section-container">
      <motion.img 
        src={profilePic} 
        alt="Abdelhakim Joulal" 
        className="w-32 h-32 rounded-full mb-8 ring-4 ring-[rgb(var(--color-primary-200))] ring-offset-4 ring-offset-[rgb(var(--color-bg))]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Hello, I'm Abdelhakim Joulal
        </h1>
        <p className="text-xl text-[rgb(var(--color-muted))] max-w-2xl mx-auto">
          A passionate Frontend Developer specializing in React.js, Tailwind CSS, and Framer Motion.
        </p>
        <div className="flex items-center justify-center gap-4 pt-8">
          <motion.a 
            href={resumePDF}
            download="Abdelhakim_Joulal_Resume.pdf" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
            <ArrowDown className="w-5 h-5 ml-2" />
          </motion.a>
          <motion.a 
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <Mail className="w-5 h-5 ml-2" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
