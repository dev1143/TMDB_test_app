import { ReactNode } from "react";
import { motion } from "framer-motion";

export const ProgressContainer = ({
  children,
  isFinished,
  animationDuration
}) => (
  <motion.div
    style={{
      opacity: isFinished ? 0 : 1,
      pointerEvents: "none",
      transform: `opacity ${animationDuration}ms linear`
    }}
  >
    {children}
  </motion.div>
);
