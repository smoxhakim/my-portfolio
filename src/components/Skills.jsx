import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Trophy, Star } from 'lucide-react';

const skills = [
  { 
    name: 'JavaScript',
    level: 90,
    type: 'Language',
    endorsements: 15,
    featured: true,
    details: ['ES6+', 'TypeScript', 'Node.js']
  },
  { 
    name: 'React.js',
    level: 90,
    type: 'Framework',
    endorsements: 12,
    featured: true,
    details: ['Hooks', 'Context', 'Redux']
  },
  { 
    name: 'TypeScript',
    level: 85,
    type: 'Language',
    endorsements: 8,
    featured: true,
    details: ['Types', 'Interfaces', 'Generics']
  },
  { 
    name: 'Python',
    level: 75,
    type: 'Language',
    endorsements: 6,
    details: ['Django', 'Flask', 'FastAPI']
  },
  { 
    name: 'Tailwind CSS',
    level: 85,
    type: 'Framework',
    endorsements: 10,
    details: ['Custom Themes', 'Responsive Design']
  },
  { 
    name: 'Framer Motion',
    level: 80,
    type: 'Library',
    endorsements: 5,
    details: ['Animations', 'Gestures']
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          A comprehensive overview of my technical skills and proficiency levels
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card hover-card p-6 space-y-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
                  {skill.name}
                  {skill.featured && (
                    <Trophy className="w-4 h-4 text-[rgb(var(--color-accent-3))]" />
                  )}
                </h3>
                <span className="badge">{skill.type}</span>
              </div>
              <span className="text-lg font-bold gradient-text">
                {skill.level}%
              </span>
            </div>

            <div className="h-2 bg-[rgb(var(--color-subtle))] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[rgb(var(--color-primary-500))] to-[rgb(var(--color-primary-600))]"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-[rgb(var(--color-muted))]">
                <CheckCircle className="w-4 h-4" />
                <span>{skill.endorsements} endorsements</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.details.map((detail, idx) => (
                  <span key={idx} className="badge">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Skills;