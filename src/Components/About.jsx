import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../Contents/content";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-100 border-b pb-10 min-h-screen px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-20 mb-10 text-center text-5xl font-bold text-gray-800"
      >
        About <span className="text-primary-color">Me</span>
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center"
      >
        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
