import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ABOUT_TEXT, EXPERIENCE, EDUCATION, AWARDS } from '../content/portfolio-data';
import { Code2, Briefcase, GraduationCap, Trophy } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
      >
        <motion.div variants={itemVariants} className="order-2 lg:order-1">
          <div className="relative space-y-8">
            {/* Experience Section */}
            <div className="card p-6 relative backdrop-blur-sm border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Experience</h3>
              {EXPERIENCE.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="text-primary-400" size={20} />
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                  </div>
                  <p className="text-primary-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-neutral-400 mb-3">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-neutral-300">
                        <span className="w-2 h-2 mt-2 bg-primary-500 rounded-full"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div className="card p-6 relative backdrop-blur-sm border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Education</h3>
              {EDUCATION.map((edu, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="text-accent-400" size={20} />
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  </div>
                  <p className="text-primary-400">{edu.institution}</p>
                  <p className="text-sm text-neutral-400">{edu.location}</p>
                  <div className="flex justify-between text-sm text-neutral-400 mt-1">
                    <span>{edu.period}</span>
                    <span>{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Awards Section */}
            <div className="card p-6 relative backdrop-blur-sm border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Awards & Honors</h3>
              {AWARDS.map((award, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="text-secondary-400" size={20} />
                    <h4 className="text-lg font-semibold">{award.title}</h4>
                  </div>
                  <p className="text-primary-400 text-sm">{award.organization}</p>
                  <p className="text-neutral-400">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="order-1 lg:order-2">
          <h2 className="section-title mb-10">About Me</h2>
          <p className="text-lg leading-relaxed mb-6 text-neutral-300">{ABOUT_TEXT}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="card hover:bg-primary-900/20">
              <h3 className="text-xl font-semibold mb-2 text-gradient">Education</h3>
              <p className="text-neutral-400">B.Tech in Computer Science Engineering at SOA University</p>
            </div>
            
            <div className="card hover:bg-secondary-900/20">
              <h3 className="text-xl font-semibold mb-2 text-gradient">Experience</h3>
              <p className="text-neutral-400">Junior Java Developer Intern at EPAM Systems</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;