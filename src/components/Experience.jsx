import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Calendar, MapPin, CheckCircle, Star } from 'lucide-react';

const experience = [
  {
    title: 'Frontend Developer',
    company: 'Company A',
    location: 'San Francisco, CA',
    duration: 'Jan 2020 - Present',
    type: 'Full-time',
    achievements: [
      'Led the development of responsive web applications using React and TypeScript',
      'Improved site performance by 40% through optimization techniques',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    title: 'Web Developer',
    company: 'Company B',
    location: 'New York, NY',
    duration: 'Jun 2018 - Dec 2019',
    type: 'Full-time',
    achievements: [
      'Developed and maintained websites for various clients',
      'Implemented responsive designs and ensured cross-browser compatibility',
      'Collaborated with designers to create pixel-perfect implementations'
    ]
  }
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University XYZ',
    location: 'Boston, MA',
    duration: '2014 - 2018',
    achievements: [
      'Graduated with Honors (3.8 GPA)',
      'Led the Web Development Club',
      'Completed thesis on modern web technologies'
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
        className="text-center"
      >
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">
          My professional journey and academic background
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Building2 className="w-6 h-6 text-[rgb(var(--color-primary-600))]" />
            Professional Experience
          </h3>
          
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card hover-card p-6 space-y-4"
            >
              <div>
                <h4 className="text-xl font-bold">{exp.title}</h4>
                <p className="text-[rgb(var(--color-primary-600))] font-medium">
                  {exp.company}
                </p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-[rgb(var(--color-muted))]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <p key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-[rgb(var(--color-accent-2))]" />
                    <span>{achievement}</span>
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-[rgb(var(--color-primary-600))]" />
            Education
          </h3>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card hover-card p-6 space-y-4"
            >
              <div>
                <h4 className="text-xl font-bold">{edu.degree}</h4>
                <p className="text-[rgb(var(--color-primary-600))] font-medium">
                  {edu.institution}
                </p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-[rgb(var(--color-muted))]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {edu.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {edu.achievements.map((achievement, idx) => (
                  <p key={idx} className="flex items-start gap-2">
                    <Star className="w-4 h-4 mt-1 flex-shrink-0 text-[rgb(var(--color-accent-3))]" />
                    <span>{achievement}</span>
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
