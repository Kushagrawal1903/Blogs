"use client";

import { motion } from "framer-motion";

interface FloatingTagProps {
  label: string;
  /** Delay for staggered entrance */
  delay?: number;
  className?: string;
}

/**
 * Glassmorphism skill tag that floats around the globe.
 */
export function FloatingTag({ label, delay = 0, className = "" }: FloatingTagProps) {
  return (
    <motion.div
      className={`
        px-3 py-1.5 rounded-full
        text-[11px] font-medium tracking-wide
        text-text-primary/80
        bg-white/70 backdrop-blur-[12px]
        border border-white/40
        shadow-[0_2px_12px_rgba(0,0,0,0.06)]
        select-none pointer-events-none
        ${className}
      `}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: delay + 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {label}
    </motion.div>
  );
}
