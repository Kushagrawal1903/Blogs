"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface FeaturedArticlesSectionProps {
  posts: BlogPost[];
}

export function FeaturedArticlesSection({ posts }: FeaturedArticlesSectionProps) {
  if (!posts || posts.length === 0) return null;

  const main = posts[0];
  const secondary = posts.slice(1, 3); // Get up to 2 secondary articles

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "development":
        return "💻";
      case "data-analytics":
        return "📊";
      case "cybersecurity":
        return "🛡️";
      default:
        return "✍️";
    }
  };

  return (
    <Section>
      <Container>
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
              Latest Writing
            </p>
            <h2 className="display text-text-primary">Featured Articles</h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Main Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/blog/${main.slug}`} className="group block">
              <div className="aspect-[16/9] rounded-[var(--radius-lg)] bg-bg-secondary mb-4 overflow-hidden relative">
                {main.coverImage ? (
                  <img
                    src={main.coverImage}
                    alt={main.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent-light/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <span className="text-5xl opacity-20">{getCategoryIcon(main.category)}</span>
                  </div>
                )}
              </div>
              <span className="text-xs font-medium text-accent uppercase tracking-wider">
                {main.category.replace("-", " ")}
              </span>
              <h3 className="mt-1.5 text-xl md:text-2xl font-display font-semibold text-text-primary group-hover:text-accent transition-colors leading-tight">
                {main.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2">
                {main.excerpt}
              </p>
              <div className="mt-3 flex items-center gap-4 text-xs text-text-muted">
                <span>{formatDate(main.publishedAt)}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {main.readingTime} min read
                </span>
              </div>
            </Link>
          </motion.div>
 
          {/* Secondary Articles */}
          <div className="flex flex-col gap-5">
            {secondary.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              >
                <Link href={`/blog/${article.slug}`} className="group flex gap-4">
                  <div className="shrink-0 w-28 h-20 md:w-36 md:h-24 rounded-[var(--radius-md)] bg-bg-secondary overflow-hidden relative">
                    {article.coverImage ? (
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent-light/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <span className="text-2xl opacity-20">{getCategoryIcon(article.category)}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {article.category.replace("-", " ")}
                    </span>
                    <h3 className="mt-0.5 text-base font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-xs text-text-secondary line-clamp-2 hidden sm:block">
                      {article.excerpt}
                    </p>
                    <div className="mt-1.5 flex items-center gap-3 text-xs text-text-muted">
                      <span>{formatDate(article.publishedAt)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readingTime} min
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* CTA on mobile */}
            <Link
              href="/blog"
              className="md:hidden flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-accent border border-border rounded-[var(--radius-md)] hover:bg-surface transition-colors"
            >
              View all articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
