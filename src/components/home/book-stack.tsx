"use client";

/**
 * SVG stack of 4 books with realistic spine text.
 * Rich, dark tones — navy, forest green, burgundy, charcoal.
 */
export function BookStack() {
  const books = [
    { title: "Data Structures & Algorithms", color: "#2C3E50", spine: "#1a252f", width: 120, height: 16 },
    { title: "System Design", color: "#4A3728", spine: "#2d2118", width: 115, height: 14 },
    { title: "Cybersecurity Fundamentals", color: "#2D4A3E", spine: "#1a2d25", width: 122, height: 15 },
    { title: "Python for Data Analysis", color: "#3D2B4A", spine: "#251a2d", width: 118, height: 16 },
  ];

  return (
    <div className="relative w-[130px] md:w-[145px] lg:w-[160px]">
      <svg viewBox="0 0 140 90" className="w-full h-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
        {/* Books stacked — bottom to top */}
        {books.map((book, i) => {
          const y = 68 - i * 17;
          return (
            <g key={book.title} transform={`rotate(${-1 + i * 0.5} 70 ${y})`}>
              {/* Book body */}
              <rect
                x={(140 - book.width) / 2}
                y={y}
                width={book.width}
                height={book.height}
                rx="1.5"
                fill={book.color}
              />
              {/* Spine edge */}
              <rect
                x={(140 - book.width) / 2}
                y={y}
                width="3"
                height={book.height}
                rx="0.5"
                fill={book.spine}
              />
              {/* Pages edge */}
              <rect
                x={(140 + book.width) / 2 - 3}
                y={y + 2}
                width="3"
                height={book.height - 4}
                rx="0.5"
                fill="rgba(255,255,255,0.15)"
              />
              {/* Title text */}
              <text
                x="70"
                y={y + book.height / 2 + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="rgba(255,255,255,0.65)"
                fontSize="5"
                fontFamily="Inter, system-ui, sans-serif"
                fontWeight="500"
                letterSpacing="0.3"
              >
                {book.title}
              </text>
            </g>
          );
        })}
        {/* Pen resting on top */}
        <g transform="rotate(-15 70 12)">
          <rect x="40" y="10" width="65" height="3.5" rx="1.75" fill="#2C2C2C" />
          <rect x="40" y="10" width="8" height="3.5" rx="1.75" fill="#8B8B8B" />
          <polygon points="105,11.75 110,11.75 108,10 108,13.5" fill="#444" />
        </g>
        {/* Stack shadow */}
        <ellipse cx="70" cy="87" rx="50" ry="3" fill="rgba(0,0,0,0.06)" />
      </svg>
    </div>
  );
}
