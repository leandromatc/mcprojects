import { motion } from "framer-motion";
function AnimatedPages({ children }) {
  const animations = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPages;
