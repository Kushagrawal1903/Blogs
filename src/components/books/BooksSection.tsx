"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Lightbulb, Cpu, Rocket, Sparkles } from "lucide-react";
import type { Book } from "@/types";

/* ─── Book visual styles keyed by slug ─────────────────────────────── */

interface BookStyle {
  coverColor: string;
  spineColor: string;
  textColor: string;
}

const BOOK_STYLES: Record<string, BookStyle> = {
  "computer-architecture": { coverColor: "#828475", spineColor: "#6B6E5D", textColor: "#FFFFFF" },
  "fundamentals-of-internet-of-things": { coverColor: "#3D4F6F", spineColor: "#2E3D5A", textColor: "#FFFFFF" },
  "basic-c-programming": { coverColor: "#6B5344", spineColor: "#5A4438", textColor: "#FFFFFF" },
  "object-oriented-programming": { coverColor: "#2D2D3F", spineColor: "#232332", textColor: "#E8D5B7" },
};

const DEFAULT_STYLE: BookStyle = { coverColor: "#3B3B4F", spineColor: "#2E2E3F", textColor: "#FFFFFF" };

function getStyle(slug: string): BookStyle {
  return BOOK_STYLES[slug] ?? DEFAULT_STYLE;
}

const FEATURES = [
  { icon: BookOpen, title: "Practical Knowledge", desc: "Real-world lessons you can apply immediately." },
  { icon: Lightbulb, title: "Career Growth", desc: "Guides that accelerate professional success." },
  { icon: Cpu, title: "Technology Insights", desc: "Industry-focused technical knowledge." },
  { icon: Rocket, title: "Future Ready", desc: "Skills and mindset for long-term growth." },
];

/* ─── 3D Book Cover (reusable) ─────────────────────────────────────── */

function Book3D({
  book, style, size = "large",
}: {
  book: Book; style: BookStyle; size?: "large" | "shelf";
}) {
  const year = book.publishedDate?.slice(0, 4) ?? "2026";
  const isLarge = size === "large";
  const w = isLarge ? 320 : 180;
  const h = isLarge ? 450 : 285;
  const spineW = isLarge ? 28 : 16;

  return (
    <div className="relative select-none" style={{ perspective: 1200, width: w, height: h }}>
      <div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d", transform: isLarge ? "rotateY(-12deg) rotateX(4deg)" : undefined }}
      >
        {/* Spine */}
        <div
          className="absolute left-0 top-0 h-full rounded-l-sm flex items-center justify-center overflow-hidden"
          style={{ width: spineW, background: style.spineColor, boxShadow: "inset -3px 0 8px rgba(0,0,0,0.3)" }}
        >
          <span
            className="font-semibold tracking-widest"
            style={{ fontSize: isLarge ? 9 : 7, writingMode: "vertical-rl", transform: "rotate(180deg)", opacity: 0.7, color: style.textColor, whiteSpace: "nowrap", overflow: "hidden", maxHeight: "85%" }}
          >
            {book.title}
          </span>
        </div>

        {/* Cover face */}
        <div
          className="absolute top-0 h-full rounded-r-sm overflow-hidden flex flex-col justify-between"
          style={{ left: spineW, right: 0, background: style.coverColor, boxShadow: "6px 6px 30px rgba(0,0,0,0.3), 2px 2px 8px rgba(0,0,0,0.15)" }}
        >
          {book.coverImage ? (
            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              className="object-cover"
              sizes={`(max-width: 768px) ${w}px, ${w}px`}
            />
          ) : (
            <>
              {/* Linen texture */}
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)" }} />
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: "50%", background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)" }} />

              {/* Year badge */}
              <div className="relative z-10 p-3">
                <span className="font-medium tracking-widest uppercase px-2 py-0.5 rounded-full" style={{ fontSize: isLarge ? 10 : 8, background: "rgba(255,255,255,0.18)", color: style.textColor, letterSpacing: "0.12em" }}>
                  {year}
                </span>
              </div>

              {/* Title block */}
              <div className="relative z-10 p-3 pb-4">
                <h3 className="font-bold leading-tight mb-1 font-display" style={{ color: style.textColor, fontSize: isLarge ? 20 : 14 }}>
                  {book.title}
                </h3>
                <p className="tracking-wider uppercase" style={{ color: style.textColor, opacity: 0.65, fontSize: isLarge ? 10 : 8 }}>
                  Kush Agrawal
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Feature Bar ──────────────────────────────────────────────────── */

function FeatureBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-2xl border border-gray-200 shadow-md shadow-gray-100/50 px-6 py-6 md:py-8"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-200">
        {FEATURES.map((f, i) => (
          <div key={i} className="flex items-start gap-4 lg:px-6 first:lg:pl-0 last:lg:pr-0">
            <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center flex-shrink-0">
              <f.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-0.5">{f.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Showcase Book Card ───────────────────────────────────────────── */

function ShowcaseCard({ book, style, index }: { book: Book; style: BookStyle; index: number }) {
  const [hovered, setHovered] = useState(false);
  const year = book.publishedDate?.slice(0, 4) ?? "2026";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col items-center text-center cursor-pointer"
    >
      {/* Book with hover lift */}
      <motion.div
        animate={{ y: hovered ? -16 : 0, rotateY: hovered ? -8 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ perspective: 800 }}
        className="mb-6"
      >
        <Book3D book={book} style={style} size="shelf" />
      </motion.div>

      {/* Info */}
      <div className="max-w-[200px]">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">{year}</p>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug mb-2 font-display">{book.title}</h3>

        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, height: hovered ? "auto" : 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{book.description}</p>
          <Link
            href={`/books/${book.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-[#828475] hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Read More <ArrowUpRight className="w-3 h-3" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ───────────────────────────────────────────────── */

export default function BooksSection({ books, isHomePage = false }: { books: Book[]; isHomePage?: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (books.length === 0) {
    return <section className="w-full py-20 px-6 text-center"><p className="text-gray-400">No books published yet.</p></section>;
  }

  // Featured book = first one (or find by slug)
  const featuredBook = books.find(b => b.slug === "computer-architecture") ?? books[0];
  const featuredStyle = getStyle(featuredBook.slug);

  return (
    <>
      {/* Keyframes */}
      <style>{`
        @keyframes bookFloat { 0%, 100% { transform: rotateY(-12deg) rotateX(4deg) translateY(0px); } 50% { transform: rotateY(-12deg) rotateX(4deg) translateY(-12px); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
        .books-hero-inner { animation: fadeUp 0.8s ease-out both; }
        @media (prefers-reduced-motion: reduce) { .books-hero-inner, .book-float-anim { animation: none !important; } }
      `}</style>

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative w-full overflow-hidden border-t border-gray-100" style={{ background: "#F7F7F5" }}>
        {/* Large decorative circle */}
        <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(210,200,185,0.35) 0%, transparent 70%)" }} />

        <div className={`max-w-6xl mx-auto px-6 md:px-12 ${isHomePage ? "pt-16 md:pt-24" : "pt-8"} pb-16 md:pb-20 books-hero-inner ${mounted ? "" : "opacity-0"}`}>
          {/* Breadcrumb */}
          {!isHomePage && (
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-10 md:mb-14">
              <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-600">Books</span>
            </nav>
          )}

          {/* Two-column hero */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8">
            {/* LEFT: Editorial headline */}
            <div className="flex-1 max-w-lg lg:max-w-xl lg:pt-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="font-display leading-[0.95] tracking-tight mb-8">
                  <span className="block text-[clamp(3rem,7vw,5.5rem)] font-bold text-gray-900">Ideas I&apos;ve</span>
                  <span className="block text-[clamp(3rem,7vw,5.5rem)] font-bold italic" style={{ color: "#9B9B85" }}>Written.</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-base md:text-lg text-gray-500 leading-relaxed max-w-md mb-10"
              >
                Deep dives, real-world lessons, and practical guides on software development, technology, career growth, and modern engineering.
              </motion.p>

              {/* CTA + social proof */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap items-center gap-6"
              >
                <a
                  href="#books-showcase"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/10"
                >
                  Explore all books
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {/* Social proof */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["#C4A882", "#8B7355", "#A0926B", "#6B7355"].map((c, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white" style={{ background: c, zIndex: 4 - i }}>
                        {["K", "R", "A", "S"][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-700">Join 1,200+ readers</p>
                    <p className="text-[10px] text-gray-400">learning &amp; growing together</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: 3D featured book */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex-shrink-0 flex items-end justify-center pt-6 lg:pt-0"
              style={{ minHeight: 480 }}
            >
              {/* Floating book */}
              <div className="relative z-10 book-float-anim" style={{ animation: "bookFloat 4s ease-in-out infinite" }}>
                <Book3D book={featuredBook} style={featuredStyle} size="large" />
              </div>

              {/* Marble pedestal */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
                <div
                  className="rounded-[50%] shadow-xl"
                  style={{
                    width: 340, height: 48,
                    background: "linear-gradient(135deg, #f5f0eb 0%, #e8ddd4 30%, #f2ece6 50%, #ddd5cc 70%, #f0ebe4 100%)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                  }}
                />
                {/* Pedestal shadow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[380px] h-3 rounded-[50%] bg-black/5 blur-sm" />
              </div>

              {/* "My latest book" annotation */}
              <div 
                className="absolute top-2 left-full hidden md:flex flex-col items-center gap-1 z-20"
                style={{ marginLeft: "27px" }}
              >
                <span className="text-sm italic text-gray-400 font-display whitespace-nowrap">My latest book</span>
                <svg width="40" height="50" viewBox="0 0 40 50" fill="none" className="text-gray-300">
                  <path d="M30 5 C25 15, 15 25, 12 45" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" strokeDasharray="3 3" />
                  <path d="M8 40 L12 47 L16 41" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-16 left-full ml-4 lg:ml-8 hidden md:flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-full px-4 py-2 shadow-lg z-20"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C4A882]" />
                <span className="text-xs font-medium text-gray-700 whitespace-nowrap">Practical. Actionable. Real.</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURE BAR ═══ */}
      <section className="w-full bg-[#F7F7F5]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-20 -mt-2">
          <FeatureBar />
        </div>
      </section>

      {/* ═══ BOOKS SHOWCASE ═══ */}
      <section id="books-showcase" className="w-full py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-3">Published Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 font-display">
              The Bookshelf
            </h2>
          </motion.div>

          {/* Bookshelf grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {books.map((book, i) => (
              <ShowcaseCard key={book.slug} book={book} style={getStyle(book.slug)} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
