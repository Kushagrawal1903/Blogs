"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { formatDate, cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

export function ArticleContent({ post }: { post: BlogPost }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById("article-content");
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = article.scrollHeight - window.innerHeight;
      const current = -rect.top;
      setProgress(Math.min(Math.max(current / total, 0), 1) * 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cleanContent = post.content.replace(/\r/g, "");

  // Extract headings from content for TOC
  const headings = cleanContent
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace(/^##\s+/, "").trim();
      const id = text.toLowerCase().replace(/[^\w]+/g, "-").replace(/-+$/, "");
      return { text, id };
    });

  return (
    <>
      {/* Reading Progress */}
      <div
        className="reading-progress"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      {/* Article Hero Banner (Widescreen Card) */}
      <Container size="default" className="pt-4 md:pt-6 pb-4 md:pb-6 px-4 md:px-6">
        <div className="relative w-full max-w-[1100px] mx-auto aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/9] rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-[var(--shadow-md)] bg-bg-secondary flex items-end">
          {post.coverImage && (
            <>
              <img
                src={post.coverImage}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
            </>
          )}

          {/* Text Overlaid at the bottom */}
          <div className="relative z-10 p-4 sm:p-6 md:p-10 w-full">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-[11px] md:text-sm text-white/85 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    Back to Blog
                  </Link>
                  <div className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="text-[9px] md:text-xs font-bold text-white uppercase tracking-wider bg-accent px-2 md:px-2.5 py-0.5 rounded-full">
                    {post.category.replace("-", " ")}
                  </span>
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-display font-bold leading-tight text-white drop-shadow-md">
                  {post.title}
                </h1>

                <div className="mt-3 md:mt-5 flex flex-wrap items-center gap-3 md:gap-4 text-[11px] md:text-sm text-white/80">
                  <span className="font-medium flex items-center gap-1.5 md:gap-2 text-white">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center border text-[10px] md:text-xs bg-white/15 border-white/20">
                      {post.author.charAt(0)}
                    </div>
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1 md:gap-1.5">
                    <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5 text-white/60" />
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1 md:gap-1.5">
                    <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 text-white/60" />
                    {post.readingTime} min read
                  </span>
                </div>
              </motion.div>
          </div>
        </div>
      </Container>

      {/* Article Body with TOC */}
      <Container className="py-6 md:py-8 px-4 md:px-6">
        <div className="flex gap-8 lg:gap-10 max-w-[1100px] mx-auto">
          {/* TOC Sidebar — desktop only */}
          {headings.length > 0 && (
            <aside className="hidden lg:block shrink-0 w-44">
              <div className="sticky top-20">
                <h4 className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-3">
                  On this page
                </h4>
                <nav className="space-y-1.5">
                  {headings.map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      className="block text-xs text-text-secondary hover:text-text-primary transition-colors leading-snug py-0.5"
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Article Content Area */}
          <div className="flex-1 min-w-0">

            <article
              id="article-content"
              className={cn(
                "prose-editorial mx-auto text-justify",
                headings.length > 0 && "lg:ml-0 lg:mr-auto"
              )}
              dangerouslySetInnerHTML={{
                __html: cleanContent
                  .replace(/^---[\s\S]*?---\n*/m, "") // Remove frontmatter
                  .replace(
                    /^## (.+)$/gm,
                    (_, text) => {
                      const cleanText = text.trim();
                      const id = cleanText.toLowerCase().replace(/[^\w]+/g, "-").replace(/-+$/, "");
                      return `<h2 id="${id}">${cleanText}</h2>`;
                    }
                  )
                  .replace(/^### (.+)$/gm, "<h3>$1</h3>")
                  .replace(/^#### (.+)$/gm, "<h4>$1</h4>")
                  .replace(/```(\w+)?\n([\s\S]*?)```/g, "<pre><code>$2</code></pre>")
                  .replace(/`([^`]+)`/g, "<code>$1</code>")
                  .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\*(.+?)\*/g, "<em>$1</em>")
                  .replace(/^\- (.+)$/gm, "<li>$1</li>")
                  .replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>")
                  .replace(/<\/ul>\s*<ul>/g, "")
                  .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")
                  .replace(/^(?!<[huplbso])((?!^$).+)$/gm, "<p>$1</p>")
                  .replace(/<p><\/p>/g, "")
                  .replace(/\n{2,}/g, "\n"),
              }}
            />
          </div>
        </div>
      </Container>

      {/* Tags */}
      {post.tags.length > 0 && (
        <Container className="pb-6 md:pb-8 px-4 md:px-6">
          <div className="flex flex-wrap gap-1.5 max-w-[1100px] mx-auto">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[11px] font-medium bg-surface text-text-secondary rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </Container>
      )}
    </>
  );
}
