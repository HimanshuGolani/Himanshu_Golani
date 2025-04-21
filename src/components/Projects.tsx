import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PROJECTS } from '../content/portfolio-data';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
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
        <h2 className="section-title inline-block">My Projects</h2>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mt-6">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-24"
      >
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-8 items-center`}
          >
            <div className="w-full lg:w-1/2 group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-accent-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-neutral-900 hover:bg-neutral-800 text-white"
                  >
                    <Github size={18} />
                    Code
                  </a>
                )}
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-gradient">{project.title}</h3>
              
              <p className="text-neutral-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-primary-900/40 text-primary-300 border border-primary-700/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={18} />
                  View Project
                </a>
                
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;