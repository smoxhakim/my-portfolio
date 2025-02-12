import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

const education = [
  {
    degree: 'Software Engineering',
    institution: 'ALX Software Engineering Program',
    partnership: 'Partnered with Mastercard Foundation & Holberton School',
    location: 'Remote',
    duration: '12/2023 - 02/2025',
    highlights: [
      '12-Month Intensive Full-Stack Development',
      'Built production-ready projects: Airbnb clone, custom UNIX shell, MySQL database solutions',
      'Led Crafitori (github.com/hakimsmox/crafitori): E-commerce platform with CI/CD implementation',
      'Specialized in modern frontend: React.js, responsive design, REST API integration',
      'Developed Prime Eats: Restaurant discovery app with real-time features'
    ],
    achievements: [
      '800+ peer-programming hours using Git workflows',
      'Top 15% cohort ranking for technical execution',
      'Agile team project leadership',
      'Production deployments with senior engineer mentorship'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Education & Training</h2>
        <p className="section-subtitle">
          Comprehensive software engineering education and hands-on experience
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="card hover-card p-8 space-y-6"
          >
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-[rgb(var(--color-primary-600))]" />
                  <h3 className="text-2xl font-bold">{edu.degree}</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-[rgb(var(--color-primary-600))]">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-[rgb(var(--color-muted))]">
                    {edu.partnership}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[rgb(var(--color-subtle))]">
                  <Calendar className="w-4 h-4" />
                  {edu.duration}
                </span>
                {/* <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[rgb(var(--color-subtle))]"> */}
                  {/* <MapPin className="w-4 h-4" /> */}
                  {/* {edu.location} */}
                {/* </span> */}
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-3">
                {edu.highlights.map((highlight, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <Star className="w-4 h-4 mt-1 flex-shrink-0 text-[rgb(var(--color-accent-3))]" />
                    <span>{highlight}</span>
                  </motion.p>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Key Achievements:</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {edu.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-3 rounded-lg bg-[rgb(var(--color-subtle))] flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-[rgb(var(--color-primary-500))]" />
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;