import { motion } from "framer-motion";
import { HERO_CONTENT } from "../Contents/content";

const Hero = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex items-center justify-center border-b pb-4 lg:mb-25"
    >
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center justify-center lg:items-start">
          <div className="main mb-8">
            <motion.h1
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Himanshu Golani
            </motion.h1>
          </div>
          <motion.span
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className=" bg-gradient-to-r from-pink-200 via-slate-400 to-purple-300 bg-clip-text text-4xl tracking-tight text-transparent"
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-full mt-10 text-xl/[30px] my-2 max-w-xl py-6 font-light -tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
