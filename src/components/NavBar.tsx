import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { CONTACT } from '../content/portfolio-data';

interface NavBarProps {
  isScrolled: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background-dark/80 backdrop-blur-md shadow-lg shadow-primary-900/10 py-3'
          : 'bg-transparent py-5'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="home" className="cursor-pointer">
            <h2 className="text-2xl font-bold text-gradient">HG</h2>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="nav-link"
                  activeClass="active"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover:bg-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover:bg-primary-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <Linkedin size={20} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={toggleMenu}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-40 bg-background-dark bg-opacity-95 md:hidden overflow-hidden ${
          isOpen ? 'flex' : 'hidden'
        } flex-col items-center justify-center`}
        initial={{ opacity: 0, height: 0 }}
        animate={isOpen ? { opacity: 1, height: '100vh' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col space-y-6 items-center">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.to}
              initial={{ opacity: 0, y: 10 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.2, delay: isOpen ? 0.1 * index : 0 }}
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-xl font-medium text-white hover:text-primary-400"
                activeClass="text-primary-500"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="flex mt-12 space-x-6">
          <motion.a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/10"
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary-700"
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Linkedin size={24} />
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default NavBar;