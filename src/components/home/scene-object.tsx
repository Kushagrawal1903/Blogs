"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode, useMemo } from "react";

interface SceneObjectProps {
  children: ReactNode;
  /** Mouse parallax multiplier in px */
  parallaxIntensity?: number;
  /** Vertical float distance in px (4-12) */
  floatRange?: number;
  /** Float animation cycle in seconds (6-12) */
  floatDuration?: number;
  /** Stagger delay for float start */
  floatDelay?: number;
  /** Depth layer */
  zIndex?: number;
  /** CSS blur for depth-of-field (e.g., "0.5px") */
  depthBlur?: string;
  /** Mouse offset from parallax hook */
  mouseOffset?: { x: number; y: number };
  /** Additional class (positioning) */
  className?: string;
  /** Entrance animation delay */
  entranceDelay?: number;
  /** Entrance animation type */
  entranceType?: "slideUp" | "scaleIn" | "fadeIn";
  /** aria-hidden for decorative elements */
  decorative?: boolean;
}

const entranceVariants: Record<string, Variants> = {
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export function SceneObject({
  children,
  parallaxIntensity = 10,
  floatRange = 6,
  floatDuration = 8,
  floatDelay = 0,
  zIndex = 10,
  depthBlur,
  mouseOffset = { x: 0, y: 0 },
  className = "",
  entranceDelay = 0,
  entranceType = "slideUp",
  decorative = false,
}: SceneObjectProps) {
  const parallaxX = mouseOffset.x * parallaxIntensity;
  const parallaxY = mouseOffset.y * parallaxIntensity;

  const filterStyle = useMemo(
    () => (depthBlur ? { filter: `blur(${depthBlur})` } : {}),
    [depthBlur]
  );

  return (
    <motion.div
      className={`absolute will-change-transform ${className}`}
      style={{
        zIndex,
        x: parallaxX,
        y: parallaxY,
        ...filterStyle,
      }}
      variants={entranceVariants[entranceType]}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.9,
        delay: entranceDelay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      aria-hidden={decorative}
    >
      <motion.div
        animate={{ y: [-floatRange / 2, floatRange / 2] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: floatDelay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
