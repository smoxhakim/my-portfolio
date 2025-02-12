import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import crafitoeiIMG from '../assets/crafitori.png'
import primeeatsIMG from '../assets/primeeats.png'

const projects = [
  {
    title: 'CRAFITORI',
    subtitle: 'Handcrafted Goods Marketplace',
    description: 'Built a marketplace using React.js and Tailwind CSS. Implemented an interactive category slider and seamless navigation experience.',
    image: crafitoeiIMG,
    tags: ['React', 'Tailwind CSS', 'API Integration'],
    github: 'https://github.com/yourusername/crafitori',
    liveDemo: 'https://www.youtube.com/watch?v=ug0PWlIbNkQ',
    featured: true
  },
  {
    title: 'PrimeEats',
    subtitle: 'Food Delivery Platform',
    description: 'Created an interactive food delivery platform with React Slick UI for restaurant slider. Implemented API integration and optimized mobile responsiveness.',
    image: primeeatsIMG,
    tags: ['React', 'Conntext', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    github: 'https://github.com/AbdeljalilOuafi/Prime-Eats',
    liveDemo: 'https://www.youtube.com/watch?v=cefkRp--RJ4',
    featured: true
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Explore some of my recent work and personal projects
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="card hover-card group"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-center transform transition-transform group-hover:scale-105"
                style={{ maxHeight: '300px', width: '100%' }}
              />
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <div className="badge">
                    <Star className="w-4 h-4 mr-1" />
                    Featured
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-[rgb(var(--color-muted))]">{project.subtitle}</p>
              </div>

              <p className="text-base">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="badge"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;