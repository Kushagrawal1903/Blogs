"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface ParallaxOffset {
  x: number;
  y: number;
}

/**
 * Custom hook that tracks mouse position relative to a container
 * and returns normalized offset values for parallax effects.
 *
 * Each scene object multiplies these offsets by its own intensity
 * to create independent depth-based movement.
 */
export function useMouseParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<ParallaxOffset>({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (prefersReducedMotion.current) return;

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalize to [-1, 1] range
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);

      setOffset({
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return { containerRef, offset };
}
