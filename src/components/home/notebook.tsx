"use client";

/**
 * SVG open notebook with ruled lines, flowchart sketches, and a pen.
 * Warm cream paper color for editorial feel.
 */
export function Notebook() {
  return (
    <div className="relative w-[120px] md:w-[135px] lg:w-[150px]">
      <svg viewBox="0 0 150 100" className="w-full h-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.1)]">
        {/* Left page */}
        <rect x="5" y="5" width="68" height="85" rx="2" fill="#F5F0E6" />
        {/* Right page */}
        <rect x="77" y="5" width="68" height="85" rx="2" fill="#F8F4EC" />
        {/* Spine / center fold */}
        <line x1="75" y1="3" x2="75" y2="92" stroke="#E0D8C8" strokeWidth="1.5" />
        <line x1="73" y1="4" x2="73" y2="91" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5" />
        <line x1="77" y1="4" x2="77" y2="91" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5" />

        {/* Left page , ruled lines */}
        {Array.from({ length: 9 }, (_, i) => (
          <line
            key={`rule-${i}`}
            x1="12"
            y1={16 + i * 8}
            x2="66"
            y2={16 + i * 8}
            stroke="rgba(176,166,148,0.25)"
            strokeWidth="0.4"
          />
        ))}

        {/* Left page , handwritten-style text marks */}
        <line x1="14" y1="18" x2="42" y2="18" stroke="rgba(80,70,55,0.25)" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="14" y1="26" x2="56" y2="26" stroke="rgba(80,70,55,0.2)" strokeWidth="0.6" strokeLinecap="round" />
        <line x1="14" y1="34" x2="48" y2="34" stroke="rgba(80,70,55,0.2)" strokeWidth="0.6" strokeLinecap="round" />
        <line x1="14" y1="42" x2="38" y2="42" stroke="rgba(80,70,55,0.18)" strokeWidth="0.6" strokeLinecap="round" />
        <line x1="14" y1="50" x2="52" y2="50" stroke="rgba(80,70,55,0.2)" strokeWidth="0.6" strokeLinecap="round" />

        {/* Right page , architecture sketch */}
        {/* Flowchart boxes */}
        <rect x="88" y="16" width="20" height="10" rx="2" fill="none" stroke="rgba(80,70,55,0.25)" strokeWidth="0.6" />
        <rect x="96" y="36" width="20" height="10" rx="2" fill="none" stroke="rgba(80,70,55,0.25)" strokeWidth="0.6" />
        <rect x="84" y="56" width="18" height="10" rx="2" fill="none" stroke="rgba(80,70,55,0.25)" strokeWidth="0.6" />
        <rect x="108" y="56" width="18" height="10" rx="2" fill="none" stroke="rgba(80,70,55,0.25)" strokeWidth="0.6" />
        {/* Arrows connecting */}
        <line x1="98" y1="26" x2="106" y2="36" stroke="rgba(80,70,55,0.2)" strokeWidth="0.5" />
        <line x1="106" y1="46" x2="93" y2="56" stroke="rgba(80,70,55,0.2)" strokeWidth="0.5" />
        <line x1="106" y1="46" x2="117" y2="56" stroke="rgba(80,70,55,0.2)" strokeWidth="0.5" />
        {/* Small labels */}
        <text x="93" y="23" fill="rgba(80,70,55,0.3)" fontSize="3.5" fontFamily="Inter, sans-serif">API</text>
        <text x="100" y="43" fill="rgba(80,70,55,0.3)" fontSize="3.5" fontFamily="Inter, sans-serif">Service</text>
        <text x="87" y="63" fill="rgba(80,70,55,0.3)" fontSize="3" fontFamily="Inter, sans-serif">Cache</text>
        <text x="112" y="63" fill="rgba(80,70,55,0.3)" fontSize="3" fontFamily="Inter, sans-serif">DB</text>

        {/* Pen across notebook */}
        <g transform="rotate(-25 100 78)">
          <rect x="70" y="76" width="55" height="3" rx="1.5" fill="#1a1a1a" />
          <rect x="70" y="76" width="7" height="3" rx="1.5" fill="#666" />
          <polygon points="125,77.5 129,77.5 127,76 127,79" fill="#333" />
          <rect x="119" y="76.5" width="6" height="2" rx="0.5" fill="#C9A96E" />
        </g>

        {/* Page shadow */}
        <ellipse cx="75" cy="94" rx="60" ry="3" fill="rgba(0,0,0,0.05)" />
      </svg>
    </div>
  );
}
