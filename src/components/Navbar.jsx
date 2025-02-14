import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import darkLogo from '../assets/logo-black.gif'
import lightLogo from '../assets/logo-light.gif'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-[rgb(var(--color-bg))]/80 border-b border-[rgb(var(--color-border))] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src={darkMode ? darkLogo : lightLogo }
              alt="SMOX Logo"
              className="h-20 w-auto"
              style={{ 
                // filter: darkMode ? 'brightness(1)' : 'brightness(0)',
                transition: 'filter 0.3s ease-in-out'
              }}
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              className="md:hidden btn btn-secondary p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#hero" className="nav-link block" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="nav-link block" onClick={() => setIsOpen(false)}>About</a>
            <a href="#projects" className="nav-link block" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#skills" className="nav-link block" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#contact" className="nav-link block" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;