import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TECH_SKILLS } from '../content/portfolio-data';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="container mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title inline-block">Technologies</h2>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mt-6">
          These are the technologies and tools I've been working with recently.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
      >
        {TECH_SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="card bg-background-dark/50 p-6 flex flex-col items-center"
          >
            <div className="mb-4 text-5xl" style={{ color: skill.color }}>
              {skill.icon && <skill.icon />}
            </div>
            <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
            <div className="w-full bg-neutral-800 rounded-full h-2.5 mt-2">
              <motion.div
                className="h-2.5 rounded-full"
                style={{ backgroundColor: skill.color }}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.2 + (index * 0.05) }}
              ></motion.div>
            </div>
            <p className="text-sm text-neutral-400 mt-2">{skill.proficiency}%</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 p-6 card"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">Development Process</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Requirement Analysis
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                System Design
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Implementation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Testing & QA
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Deployment
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Maintenance
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">Key Strengths</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                Backend Development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                API Design
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                Database Optimization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                System Architecture
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                Problem Solving
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                Team Collaboration
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;