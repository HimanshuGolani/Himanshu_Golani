import { motion, useAnimationControls } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
}

const AnimatedText = ({ children }: AnimatedTextProps) => {
  const controls = useAnimationControls();

  const rubberBandAnimation = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
      transition: { duration: 0.6 }
    });
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => rubberBandAnimation()}
      onFocus={() => rubberBandAnimation()}
      className="inline-block cursor-default hover:text-primary-400 transition-colors duration-300"
    >
      {children === " " ? "\u00A0" : children}
    </motion.span>
  );
};

export default AnimatedText;