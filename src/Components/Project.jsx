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
      <h2 className="my-20 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Projects
      </h2>
      <div>
        {PROJECTS.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <a
                href={item.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="mb-6 rounded"
                  src={item.image}
                  width={350}
                  height={350}
                  alt={item.title}
                />
              </a>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-lg sm:text-xl md:text-2xl">
                {item.title}
              </h6>
              <p className="mb-4 text-neutral-400 text-sm sm:text-base md:text-lg">
                {item.description}
              </p>
              <div className="mb-4">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm sm:text-base font-medium text-purple-600"
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
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
