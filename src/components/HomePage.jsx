import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Blog from './Blog';
import Experience from './Experience';
import Contact from './Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Experience />
      <Contact />
    </>
  );
};

export default HomePage;