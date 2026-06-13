"use client";

/**
 * Decorative plant/leaf SVG for upper area of scene.
 * Natural green tones with subtle sway animation.
 */
export function DecorativeLeaf() {
  return (
    <div className="w-[80px] md:w-[90px] lg:w-[100px]">
      <svg viewBox="0 0 80 90" className="w-full h-auto leaf-sway">
        <defs>
          <linearGradient id="leaf1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5A7A52" />
            <stop offset="100%" stopColor="#3D5A35" />
          </linearGradient>
          <linearGradient id="leaf2" x1="0" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#6B8C62" />
            <stop offset="100%" stopColor="#4A6B42" />
          </linearGradient>
          <linearGradient id="leaf3" x1="0.5" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7A9C72" />
            <stop offset="100%" stopColor="#5A7A52" />
          </linearGradient>
        </defs>

        {/* Branch / stem */}
        <path
          d="M40,88 Q42,70 38,55 Q34,42 40,30"
          fill="none"
          stroke="#5A4A35"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M40,30 Q38,22 42,15"
          fill="none"
          stroke="#5A4A35"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Leaf 1 — large, right */}
        <path
          d="M38,52 Q55,40 62,28 Q58,48 38,52"
          fill="url(#leaf1)"
          opacity="0.9"
        />
        <path d="M38,52 Q52,42 58,32" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />

        {/* Leaf 2 — medium, left */}
        <path
          d="M40,42 Q22,30 18,18 Q24,36 40,42"
          fill="url(#leaf2)"
          opacity="0.85"
        />
        <path d="M40,42 Q28,32 22,22" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.4" />

        {/* Leaf 3 — small, top right */}
        <path
          d="M42,25 Q54,15 56,6 Q50,18 42,25"
          fill="url(#leaf3)"
          opacity="0.8"
        />

        {/* Leaf 4 — small, top left */}
        <path
          d="M38,28 Q26,18 20,12 Q28,22 38,28"
          fill="url(#leaf1)"
          opacity="0.75"
        />
      </svg>
    </div>
  );
}
