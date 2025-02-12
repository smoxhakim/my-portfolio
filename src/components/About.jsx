import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container bg-[rgb(var(--color-subtle))]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">About Me</h2>
          <div className="prose prose-lg max-w-none text-[rgb(var(--color-muted))]">
            <p className="mb-6">
              I'm a dedicated developer with a strong background in creating modern and responsive web applications. I specialize in JavaScript frameworks and love to bring ideas to life in the browser.
            </p>
            <p>
              My expertise lies in React.js, and I enjoy working with technologies such as Tailwind CSS and Framer Motion to build interactive and visually appealing experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
