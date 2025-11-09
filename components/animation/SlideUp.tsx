"use client";

import { motion } from "framer-motion";

export default function SlideUp({ children }: {children: React.ReactNode;}) {
  return (
    <motion.div
      initial={{ top: 60 }}   // start 60px from top
      animate={{ top: 0 }}    // animate to top: 0
      transition={{ 
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1] // match your CSS cubic-bezier
      }}
    >
      {children}
    </motion.div>
  )
}