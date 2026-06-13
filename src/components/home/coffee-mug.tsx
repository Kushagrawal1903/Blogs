"use client";

/**
 * SVG coffee mug with "K." text and subtle steam animation.
 * Warm cream tones matching the design system.
 */
export function CoffeeMug() {
  return (
    <div className="relative w-[70px] md:w-[80px] lg:w-[90px]">
      {/* Steam wisps */}
      <svg
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-[40px] h-[28px] opacity-30"
        viewBox="0 0 40 28"
      >
        <path
          d="M12,28 Q12,18 8,14 Q4,10 8,4 Q10,0 12,2"
          fill="none"
          stroke="rgba(180,165,140,0.6)"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <animate
            attributeName="d"
            values="M12,28 Q12,18 8,14 Q4,10 8,4 Q10,0 12,2;M12,28 Q14,18 10,14 Q6,10 10,4 Q12,0 14,2;M12,28 Q12,18 8,14 Q4,10 8,4 Q10,0 12,2"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
        </path>
        <path
          d="M22,28 Q20,20 24,16 Q28,12 24,6 Q22,2 24,0"
          fill="none"
          stroke="rgba(180,165,140,0.5)"
          strokeWidth="1"
          strokeLinecap="round"
        >
          <animate
            attributeName="d"
            values="M22,28 Q20,20 24,16 Q28,12 24,6 Q22,2 24,0;M22,28 Q24,20 20,16 Q16,12 20,6 Q22,2 20,0;M22,28 Q20,20 24,16 Q28,12 24,6 Q22,2 24,0"
            dur="5s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5s" repeatCount="indefinite" />
        </path>
      </svg>

      {/* Mug SVG */}
      <svg viewBox="0 0 80 72" className="w-full h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
        {/* Mug body */}
        <rect x="10" y="8" width="48" height="52" rx="4" fill="#E8DDD0" />
        {/* Inner rim */}
        <rect x="12" y="8" width="44" height="6" rx="3" fill="#DDD0BF" />
        {/* Coffee liquid */}
        <rect x="14" y="14" width="40" height="3" rx="1.5" fill="#8B6F4E" opacity="0.5" />
        {/* Handle */}
        <path
          d="M58,22 Q72,22 72,36 Q72,50 58,50"
          fill="none"
          stroke="#E8DDD0"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M58,22 Q72,22 72,36 Q72,50 58,50"
          fill="none"
          stroke="#DDD0BF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* "K." text */}
        <text
          x="34"
          y="42"
          textAnchor="middle"
          fill="#8B7D6B"
          fontSize="16"
          fontFamily="Georgia, serif"
          fontWeight="700"
          letterSpacing="-0.5"
        >
          K.
        </text>
        {/* Bottom shadow */}
        <ellipse cx="34" cy="62" rx="22" ry="3" fill="rgba(0,0,0,0.06)" />
      </svg>
    </div>
  );
}
