import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-6 bg-skin-base text-skin-base">
      <motion.p 
        className="text-center text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © {new Date().getFullYear()} Smox. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
