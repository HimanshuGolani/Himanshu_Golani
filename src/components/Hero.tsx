import { motion } from 'framer-motion';
import { FileDown, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { HERO_CONTENT, RESUME_LINK } from '../content/portfolio-data';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const MY_NAME = "Himanshu Golani".split("");

  return (
    <div className="container mx-auto h-screen flex flex-col justify-center relative">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-8 pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full md:w-3/5">
          <motion.div
            className="mb-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl text-primary-400 mb-4">
              Hello, I'm
            </h3>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
              {MY_NAME.map((letter, index) => (
                <AnimatedText key={index}>{letter}</AnimatedText>
              ))}
            </h1>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-gradient text-3xl md:text-4xl font-bold mb-6">
                Full Stack Developer
              </h2>
            </motion.div>
            <motion.p
              className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <a
                href={RESUME_LINK}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown size={18} />
                Download Resume
              </a>
              <Link
                to="projects"
                smooth={true}
                offset={-80}
                duration={800}
                className="btn btn-outline cursor-pointer"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="w-full md:w-2/5 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-2xl shadow-primary-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-background-dark/80 backdrop-blur-sm"></div>
            <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-8xl font-bold text-gradient">
              HG
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Link
          to="about"
          smooth={true}
          offset={-80}
          duration={800}
          className="animate-bounce cursor-pointer"
        >
          <ArrowDown size={30} className="text-primary-400" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;