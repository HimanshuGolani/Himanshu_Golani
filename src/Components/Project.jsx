import { PROJECTS } from "../Contents/content";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="border-b border-white-900 pb-4"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap  lg:justify-center">
            <div className="w-full lg:w-1/4">
              <a
                href={item.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-6 rounded"
                  src={item.image}
                  width={350}
                  height={350}
                  alt={item.title}
                />
              </a>
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -700, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{item.title}</h6>
              <p className="mb-4 text-neutral-400">{item.description}</p>
              <div className="mb-4">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                    key={techIndex}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={item.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
