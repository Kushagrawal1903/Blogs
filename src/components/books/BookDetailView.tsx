"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ShoppingCart,
  BookOpen,
  Code2,
  Target,
  Rocket,
  Monitor,
  GitBranch,
  Layers,
  ArrowRight,
  BookMarked,
} from "lucide-react";
import type { Book } from "@/types";

/* ─── Book visual styles keyed by slug ─────────────────────────────── */

interface BookStyle {
  coverColor: string;
  spineColor: string;
  textColor: string;
}

const BOOK_STYLES: Record<string, BookStyle> = {
  "computer-architecture": {
    coverColor: "#828475",
    spineColor: "#6B6E5D",
    textColor: "#FFFFFF",
  },
  "fundamentals-of-internet-of-things": {
    coverColor: "#3D4F6F",
    spineColor: "#2E3D5A",
    textColor: "#FFFFFF",
  },
  "basic-c-programming": {
    coverColor: "#6B5344",
    spineColor: "#5A4438",
    textColor: "#FFFFFF",
  },
  "object-oriented-programming": {
    coverColor: "#2D2D3F",
    spineColor: "#232332",
    textColor: "#E8D5B7",
  },
};

const DEFAULT_STYLE: BookStyle = {
  coverColor: "#3B3B4F",
  spineColor: "#2E2E3F",
  textColor: "#FFFFFF",
};

function getStyle(slug: string): BookStyle {
  return BOOK_STYLES[slug] ?? DEFAULT_STYLE;
}

/* ─── Features data ─────────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: BookOpen,
    title: "Beginner Friendly",
    desc: "Perfect for absolute beginners.",
  },
  {
    icon: Code2,
    title: "Hands-on Learning",
    desc: "Examples, exercises & real-world programs.",
  },
  {
    icon: Target,
    title: "Structured Approach",
    desc: "Learn step-by-step with clarity.",
  },
  {
    icon: Rocket,
    title: "Build Confidence",
    desc: "Go from zero to confident coder.",
  },
];

/* ─── "What's Inside" timeline data ─────────────────────────────────── */

const TIMELINE_ITEMS = [
  {
    number: "01",
    part: "Part 1",
    title: "Getting Started",
    icon: Monitor,
    items: [
      "Setting up your development environment",
      "Your first C program",
      "Variables, data types, and operators",
    ],
  },
  {
    number: "02",
    part: "Part 2",
    title: "Control Flow & Functions",
    icon: GitBranch,
    items: [
      "Conditional statements",
      "Loops and iteration",
      "Functions and modular programming",
    ],
  },
  {
    number: "03",
    part: "Part 3",
    title: "Memory & Data Structures",
    icon: Layers,
    items: [
      "Pointers and memory management",
      "Arrays and strings",
      "Structures and unions",
    ],
  },
];

/* ─── Botanical SVG Decoration ──────────────────────────────────────── */

function BotanicalDecoration() {
  return (
    <svg
      width="320"
      height="400"
      viewBox="0 0 320 400"
      fill="none"
      className="absolute -left-10 bottom-0 z-0 pointer-events-none opacity-[0.12]"
    >
      {/* Main stem */}
      <path
        d="M160 400 C160 350, 140 300, 120 250 C100 200, 90 150, 100 100"
        stroke="#9A9C8A"
        strokeWidth="2"
        fill="none"
      />
      {/* Branch 1 - left */}
      <path
        d="M130 280 C110 260, 70 250, 40 260"
        stroke="#9A9C8A"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Leaf 1 */}
      <path
        d="M40 260 C30 240, 20 220, 40 210 C60 200, 70 220, 70 240 C70 250, 55 260, 40 260Z"
        fill="#9A9C8A"
        opacity="0.3"
      />
      {/* Branch 2 - right */}
      <path
        d="M140 230 C160 210, 200 200, 230 210"
        stroke="#9A9C8A"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Leaf 2 */}
      <path
        d="M230 210 C240 190, 250 170, 230 165 C210 160, 200 180, 200 200 C200 205, 215 215, 230 210Z"
        fill="#9A9C8A"
        opacity="0.3"
      />
      {/* Branch 3 - left */}
      <path
        d="M120 190 C100 170, 60 165, 30 175"
        stroke="#9A9C8A"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Leaf 3 */}
      <path
        d="M30 175 C20 155, 10 135, 30 130 C50 125, 55 145, 55 165 C55 170, 42 178, 30 175Z"
        fill="#9A9C8A"
        opacity="0.3"
      />
      {/* Branch 4 - right top */}
      <path
        d="M110 150 C130 130, 170 120, 200 130"
        stroke="#9A9C8A"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Leaf 4 */}
      <path
        d="M200 130 C210 110, 220 90, 200 85 C180 80, 175 100, 175 120 C175 125, 188 133, 200 130Z"
        fill="#9A9C8A"
        opacity="0.3"
      />
      {/* Small leaf at top */}
      <path
        d="M100 100 C90 80, 80 60, 95 50 C110 40, 115 60, 112 80 C110 90, 105 95, 100 100Z"
        fill="#9A9C8A"
        opacity="0.25"
      />
      {/* Small branch right top */}
      <path
        d="M105 120 C120 105, 145 100, 160 108"
        stroke="#9A9C8A"
        strokeWidth="1"
        fill="none"
      />
      {/* Tiny leaf */}
      <path
        d="M160 108 C168 95, 172 82, 160 78 C148 74, 145 88, 148 100 C150 104, 155 108, 160 108Z"
        fill="#9A9C8A"
        opacity="0.2"
      />
    </svg>
  );
}

/* ─── 3D Book Component ─────────────────────────────────────────────── */

function HeroBook({ book, style }: { book: Book; style: BookStyle }) {
  const year = book.publishedDate?.slice(0, 4) ?? "2026";

  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative select-none"
      style={{ perspective: 1200, width: 260, height: 370 }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-8deg) rotateX(3deg)",
        }}
      >
        {/* Spine */}
        <div
          className="absolute left-0 top-0 h-full rounded-l-sm"
          style={{
            width: 26,
            background: style.spineColor,
            boxShadow: "inset -3px 0 8px rgba(0,0,0,0.3)",
            transform: "translateZ(0px)",
          }}
        />

        {/* Cover face */}
        <div
          className="absolute top-0 h-full rounded-r-md overflow-hidden flex flex-col justify-between"
          style={{
            left: 26,
            right: 0,
            background: style.coverColor,
            boxShadow:
              "8px 8px 40px rgba(0,0,0,0.25), 2px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          {book.coverImage ? (
            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 260px, 260px"
            />
          ) : (
            <>
              {/* Linen texture */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
                }}
              />
              {/* Bottom gradient */}
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                  height: "50%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)",
                }}
              />

              {/* Year badge */}
              <div className="relative z-10 p-4">
                <span
                  className="font-medium tracking-widest uppercase px-2.5 py-1 rounded-full"
                  style={{
                    fontSize: 11,
                    background: "rgba(255,255,255,0.18)",
                    color: style.textColor,
                    letterSpacing: "0.12em",
                  }}
                >
                  {year}
                </span>
              </div>

              {/* Title block */}
              <div className="relative z-10 p-4 pb-5">
                <h3
                  className="font-bold leading-tight mb-1.5 font-display"
                  style={{ color: style.textColor, fontSize: 22 }}
                >
                  {book.title}
                </h3>
                <p
                  className="tracking-wider uppercase"
                  style={{
                    color: style.textColor,
                    opacity: 0.65,
                    fontSize: 11,
                  }}
                >
                  Kush Agrawal
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main BookDetailView Component ─────────────────────────────────── */

export default function BookDetailView({ book }: { book: Book }) {
  const style = getStyle(book.slug);
  const year = book.publishedDate?.slice(0, 4) ?? "2026";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F7F5" }}>
      {/* ═══ BACK LINK ═══ */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-6">
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-[13px] hover:text-[#111111] transition-colors"
          style={{ color: "#9CA0A5" }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Books
        </Link>
      </div>

      {/* ═══ HERO SECTION ═══ */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20">
          {/* LEFT SIDE: Book Presentation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex-shrink-0"
            style={{ width: "45%", minWidth: 320 }}
          >
            {/* Large soft circular background */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[380px] h-[380px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(200,195,180,0.25) 0%, transparent 70%)",
              }}
            />

            {/* Botanical decoration */}
            <BotanicalDecoration />

            {/* Book + Pedestal container */}
            <div className="relative z-10 flex flex-col items-center">
              {/* 3D Book */}
              <HeroBook book={book} style={style} />

              {/* Marble Pedestal */}
              <div className="relative -mt-4 z-0">
                <div
                  className="rounded-[16px] overflow-hidden"
                  style={{
                    width: 300,
                    height: 50,
                    background:
                      "linear-gradient(135deg, #f5f0eb 0%, #e8ddd4 20%, #f2ece6 40%, #ddd5cc 60%, #f0ebe4 80%, #e5ddd5 100%)",
                    boxShadow:
                      "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.5)",
                  }}
                >
                  {/* Marble veins */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(45deg, transparent 40%, rgba(180,170,155,0.3) 45%, transparent 50%),
                        linear-gradient(-30deg, transparent 50%, rgba(180,170,155,0.2) 55%, transparent 60%),
                        linear-gradient(60deg, transparent 30%, rgba(200,190,175,0.15) 35%, transparent 40%)
                      `,
                    }}
                  />
                </div>
                {/* Pedestal shadow */}
                <div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-[50%] blur-md"
                  style={{
                    width: 260,
                    height: 10,
                    background: "rgba(0,0,0,0.06)",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex-1 max-w-[560px]"
          >
            {/* Published badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{
                border: "1px solid #E8E8E4",
                backgroundColor: "rgba(255,255,255,0.6)",
              }}
            >
              <BookMarked className="w-3.5 h-3.5" style={{ color: "#9A9C8A" }} />
              <span
                className="text-[12px] font-medium tracking-wide"
                style={{ color: "#6B7280" }}
              >
                Published in {year}
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-display font-bold leading-[1.05] tracking-tight mb-5"
              style={{
                fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)",
                color: "#111111",
              }}
            >
              {book.title.split(" ").length > 2
                ? (() => {
                    const words = book.title.split(" ");
                    const mid = Math.ceil(words.length / 2);
                    return (
                      <>
                        {words.slice(0, mid).join(" ")}
                        <br />
                        {words.slice(mid).join(" ")}
                      </>
                    );
                  })()
                : book.title}
            </h1>

            {/* Subtitle */}
            <p
              className="leading-[1.7] mb-8 max-w-[500px]"
              style={{ color: "#6B7280", fontSize: "15px" }}
            >
              {book.description}
            </p>

            {/* CTA Buttons */}
            {book.purchaseLinks.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-12">
                {book.purchaseLinks.map((link) => (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 h-[46px] px-6 text-[14px] font-medium rounded-full transition-colors"
                    style={{
                      backgroundColor: "#111111",
                      color: "#FFFFFF",
                    }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy on {link.platform}
                  </motion.a>
                ))}
              </div>
            )}

            {/* About the Book */}
            <div>
              <h2
                className="font-semibold mb-4"
                style={{ fontSize: "18px", color: "#111111" }}
              >
                About the Book
              </h2>
              <p
                className="leading-[1.75] max-w-[600px]"
                style={{ color: "#6B7280", fontSize: "14px" }}
              >
                {book.title} takes you from zero to confident in one of the most
                foundational programming languages ever created. Written for
                absolute beginners, every concept is explained with diagrams,
                examples, and exercises.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ FEATURES SECTION ═══ */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[20px] px-8 py-10 md:px-12 md:py-12"
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 4px 40px rgba(0,0,0,0.04)",
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center lg:px-6 relative"
              >
                {/* Vertical divider (between items, not before first) */}
                {i > 0 && (
                  <div
                    className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-16"
                    style={{
                      width: "1px",
                      backgroundColor: "#E8E8E4",
                    }}
                  />
                )}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#F0EDE8" }}
                >
                  <feature.icon
                    className="w-5 h-5"
                    style={{ color: "#828475" }}
                    strokeWidth={1.5}
                  />
                </div>
                <h4
                  className="text-[14px] font-semibold mb-1"
                  style={{ color: "#111111" }}
                >
                  {feature.title}
                </h4>
                <p className="text-[12px] leading-relaxed" style={{ color: "#9CA0A5" }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══ WHAT'S INSIDE SECTION ═══ */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pb-20 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[20px] px-8 py-12 md:px-14 md:py-16"
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 4px 40px rgba(0,0,0,0.04)",
          }}
        >
          {/* Section Title */}
          <div className="mb-14">
            <h2
              className="font-display font-bold mb-3"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "#111111" }}
            >
              What&apos;s Inside
            </h2>
            {/* Decorative underline */}
            <div
              className="rounded-full"
              style={{
                width: 40,
                height: 3,
                backgroundColor: "#9A9C8A",
              }}
            />
          </div>

          {/* Timeline + Cards Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* LEFT: Timeline */}
            <div className="relative lg:w-[280px] flex-shrink-0">
              {/* Vertical line */}
              <div
                className="absolute left-[22px] top-[40px] bottom-[40px] hidden lg:block"
                style={{
                  width: "2px",
                  backgroundColor: "#E8E8E4",
                }}
              />

              <div className="flex flex-col gap-16 lg:gap-20">
                {TIMELINE_ITEMS.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative flex items-start gap-5"
                  >
                    {/* Number */}
                    <div className="flex flex-col items-center gap-3 flex-shrink-0">
                      <span
                        className="text-[12px] font-semibold"
                        style={{ color: "#9CA0A5" }}
                      >
                        {item.number}
                      </span>
                      {/* Icon circle */}
                      <div
                        className="w-[46px] h-[46px] rounded-full flex items-center justify-center relative z-10"
                        style={{
                          backgroundColor: "#F0EDE8",
                          border: "3px solid #F7F7F5",
                        }}
                      >
                        <item.icon
                          className="w-5 h-5"
                          style={{ color: "#828475" }}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="pt-6">
                      <p
                        className="text-[11px] uppercase tracking-[0.15em] mb-1"
                        style={{ color: "#9CA0A5" }}
                      >
                        {item.part}
                      </p>
                      <h3
                        className="text-[16px] font-bold leading-tight"
                        style={{ color: "#111111" }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT: Content Cards */}
            <div className="flex-1 flex flex-col gap-6">
              {TIMELINE_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="rounded-[16px] p-7 md:p-8 transition-shadow"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E8E8E4",
                  }}
                >
                  <div className="flex flex-col gap-4">
                    {item.items.map((content, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-4"
                      >
                        <ArrowRight
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: "#9CA0A5" }}
                          strokeWidth={1.5}
                        />
                        <span
                          className="text-[14px]"
                          style={{ color: "#6B7280" }}
                        >
                          {content}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
