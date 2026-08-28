import { motion } from "motion/react";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1], // Gentle cubic bezier
      }}
      className="w-full flex-1"
    >
      {children}
    </motion.div>
  );
}
