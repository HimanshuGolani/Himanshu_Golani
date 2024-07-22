import { motion, useAnimationControls } from "framer-motion";

const TextEffect = ({ children }) => {
  const controls = useAnimationControls();

  const rubberBandAniamtion = () => {
    controls.start({
      transform: [
        "scale3d(0,0,0)",
        "scale3d(0,0,0)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
    });
  };

  return (
    <motion.span
      animate={controls}
      onMouseMove={() => rubberBandAniamtion()}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};

export default TextEffect;
