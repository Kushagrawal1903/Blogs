"use client";

/**
 * SVG minimalist desk lamp with warm light cone effect.
 * Dark metallic tones with radial glow emanating from the shade.
 */
export function DeskLamp() {
  return (
    <div className="relative w-[80px] md:w-[90px] lg:w-[100px]">
      {/* Light cone glow — extends beyond the lamp */}
      <div
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[200px] h-[180px] pointer-events-none"
        style={{
          background:
            "conic-gradient(from 170deg at 50% 0%, transparent 30%, rgba(255,230,180,0.12) 42%, rgba(255,230,180,0.18) 50%, rgba(255,230,180,0.12) 58%, transparent 70%)",
        }}
      />

      <svg viewBox="0 0 80 110" className="w-full h-auto relative z-10 drop-shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
        <defs>
          <radialGradient id="lampGlow" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stopColor="rgba(255,230,180,0.8)" />
            <stop offset="60%" stopColor="rgba(255,230,180,0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="lampMetal" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="50%" stopColor="#4a4a4a" />
            <stop offset="100%" stopColor="#2d2d2d" />
          </linearGradient>
        </defs>

        {/* Base */}
        <ellipse cx="40" cy="106" rx="18" ry="4" fill="#2d2d2d" />
        <rect x="36" y="100" width="8" height="6" rx="1" fill="url(#lampMetal)" />

        {/* Arm — vertical */}
        <rect x="38" y="42" width="4" height="60" rx="2" fill="url(#lampMetal)" />

        {/* Arm — angled */}
        <rect
          x="38"
          y="30"
          width="4"
          height="20"
          rx="2"
          fill="url(#lampMetal)"
          transform="rotate(-15 40 42)"
        />

        {/* Joint */}
        <circle cx="40" cy="42" r="4" fill="#3a3a3a" stroke="#4a4a4a" strokeWidth="1" />

        {/* Shade */}
        <path
          d="M20,32 Q20,18 40,18 Q60,18 60,32 L56,38 L24,38 Z"
          fill="#2d2d2d"
        />
        <path
          d="M24,38 L56,38"
          stroke="#3a3a3a"
          strokeWidth="1"
        />

        {/* Light bulb glow */}
        <circle cx="40" cy="36" r="12" fill="url(#lampGlow)" />
        <circle cx="40" cy="36" r="4" fill="rgba(255,230,180,0.9)" />

        {/* Highlight on shade */}
        <path
          d="M32,20 Q40,16 48,20"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
