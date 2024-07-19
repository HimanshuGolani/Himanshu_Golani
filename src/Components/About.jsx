import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../Contents/content";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center border-b pb-10 min-h-screen">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-wrap justify-center"
      >
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center text-center">
            <p className="text-2xl my-2 lg:text-1xl ">{ABOUT_TEXT}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
