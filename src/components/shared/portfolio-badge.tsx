"use client";

import { motion } from "framer-motion";

export function PortfolioBadge() {
  return (
    <motion.a
      href="https://kushagrawal.in"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit my developer portfolio"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="portfolio-badge group"
    >
      {/* Icon container */}
      <span className="portfolio-badge__icon" aria-hidden="true">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </span>

      {/* Text content */}
      <span className="portfolio-badge__text">
        <span className="portfolio-badge__label">Developer Portfolio</span>
        <span className="portfolio-badge__cta">
          View Portfolio
          <svg
            className="portfolio-badge__arrow"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </span>
    </motion.a>
  );
}
