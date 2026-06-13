"use client";

/**
 * Small floating analytics card showing data insights.
 * Glassmorphism style with mini sparkline chart.
 */
export function DataInsightsCard() {
  return (
    <div className="bg-white/80 backdrop-blur-[16px] rounded-[14px] border border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-3 w-[180px]">
      {/* Header */}
      <p className="text-[10px] font-medium text-text-secondary/70 uppercase tracking-wider mb-1.5">
        Data &amp; Analytics
      </p>
      {/* Mini sparkline */}
      <svg viewBox="0 0 140 32" className="w-full h-6 mb-1.5">
        <defs>
          <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(130,132,117,0.25)" />
            <stop offset="100%" stopColor="rgba(130,132,117,0)" />
          </linearGradient>
        </defs>
        <path
          d="M0,28 L15,22 L30,24 L45,16 L60,18 L75,10 L90,12 L105,6 L120,8 L135,3 L140,4 L140,32 L0,32 Z"
          fill="url(#sparkGrad)"
        />
        <path
          d="M0,28 L15,22 L30,24 L45,16 L60,18 L75,10 L90,12 L105,6 L120,8 L135,3"
          fill="none"
          stroke="#828475"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="135" cy="3" r="2.5" fill="#828475" />
      </svg>
      {/* Insights badge */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-text-primary">Insights</span>
        <span className="text-[10px] font-semibold text-success flex items-center gap-0.5">
          +24% <span className="text-[8px]">↗</span>
        </span>
      </div>
    </div>
  );
}
