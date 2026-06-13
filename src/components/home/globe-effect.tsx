"use client";

import { motion } from "framer-motion";

/**
 * CSS-only animated globe with warm glow, rotating mesh, and particle effects.
 * Communicates AI, data intelligence, and global connectivity.
 */
export function GlobeEffect() {
  // Generate deterministic particle positions
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: 2 + (i % 3),
    x: 15 + ((i * 17) % 70),
    y: 10 + ((i * 23) % 80),
    delay: (i * 0.8) % 6,
    duration: 4 + (i % 5),
    opacity: 0.15 + (i % 4) * 0.08,
  }));

  return (
    <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px]">
      {/* Outer ambient glow */}
      <div
        className="absolute inset-[-30%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(218,195,155,0.25) 0%, rgba(218,195,155,0.08) 40%, transparent 70%)",
        }}
      />

      {/* Main globe body */}
      <div
        className="absolute inset-0 rounded-full globe-rotate"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(255,235,200,0.9) 0%, rgba(218,195,155,0.6) 30%, rgba(180,155,115,0.4) 60%, rgba(140,120,85,0.15) 100%)",
          boxShadow:
            "0 0 60px rgba(218,195,155,0.35), 0 0 120px rgba(218,195,155,0.15), inset 0 0 40px rgba(255,235,200,0.3)",
        }}
      >
        {/* Grid mesh overlay */}
        <div
          className="absolute inset-[8%] rounded-full globe-mesh-rotate overflow-hidden opacity-30"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(180,155,115,0.4) 18px, rgba(180,155,115,0.4) 19px),
              repeating-linear-gradient(90deg, transparent, transparent 18px, rgba(180,155,115,0.4) 18px, rgba(180,155,115,0.4) 19px)
            `,
          }}
        />
        {/* Curved latitude lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
          <ellipse cx="50" cy="50" rx="42" ry="20" fill="none" stroke="rgba(180,155,115,0.6)" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="42" ry="35" fill="none" stroke="rgba(180,155,115,0.5)" strokeWidth="0.4" />
          <ellipse cx="50" cy="50" rx="20" ry="42" fill="none" stroke="rgba(180,155,115,0.5)" strokeWidth="0.4" transform="rotate(15 50 50)" />
          <ellipse cx="50" cy="50" rx="30" ry="42" fill="none" stroke="rgba(180,155,115,0.4)" strokeWidth="0.3" transform="rotate(-10 50 50)" />
        </svg>
        {/* Specular highlight */}
        <div
          className="absolute top-[12%] left-[20%] w-[35%] h-[25%] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Network connection dots */}
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100">
        {[
          { x: 30, y: 25 },
          { x: 65, y: 20 },
          { x: 75, y: 45 },
          { x: 55, y: 70 },
          { x: 25, y: 60 },
          { x: 40, y: 40 },
          { x: 60, y: 50 },
        ].map((dot, i) => (
          <g key={i}>
            <circle cx={dot.x} cy={dot.y} r="1.2" fill="rgba(218,195,155,0.8)">
              <animate attributeName="opacity" values="0.4;1;0.4" dur={`${3 + i}s`} repeatCount="indefinite" />
            </circle>
            {i > 0 && (
              <line
                x1={dot.x}
                y1={dot.y}
                x2={[30, 65, 75, 55, 25, 40, 60][i - 1]}
                y2={[25, 20, 45, 70, 60, 40, 50][i - 1]}
                stroke="rgba(218,195,155,0.25)"
                strokeWidth="0.3"
              >
                <animate attributeName="opacity" values="0.1;0.4;0.1" dur={`${4 + i}s`} repeatCount="indefinite" />
              </line>
            )}
          </g>
        ))}
      </svg>

      {/* Floating ambient particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: `rgba(218,195,155,${p.opacity})`,
          }}
          animate={{
            y: [-8, 8],
            x: [-4, 4],
            opacity: [p.opacity, p.opacity * 1.8, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
