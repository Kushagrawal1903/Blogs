"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, FileText, FolderOpen, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  type: "blog" | "project" | "book";
  url: string;
  category: string;
}

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-search", handleOpen);
    return () => window.removeEventListener("open-search", handleOpen);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const search = useCallback(async (q: string) => {
    if (!q.trim()) {
      setResults([]);
      return;
    }
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      if (res.ok) {
        const data = await res.json();
        setResults(data.results || []);
        setSelectedIndex(0);
      }
    } catch {
      setResults([]);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => search(query), 200);
    return () => clearTimeout(timer);
  }, [query, search]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleKeyNav = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      setIsOpen(false);
      window.location.href = results[selectedIndex].url;
    }
  };

  const typeIcons = {
    blog: FileText,
    project: FolderOpen,
    book: BookOpen,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-bg-primary border border-border rounded-[var(--radius-lg)] shadow-lg overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-5 border-b border-border">
              <Search className="w-5 h-5 text-text-muted shrink-0" />
              <input
                type="text"
                placeholder="Search articles, projects, books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyNav}
                autoFocus
                className="w-full py-4 text-base bg-transparent border-none outline-none placeholder:text-text-muted"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="shrink-0 p-1 text-text-muted hover:text-text-primary"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[360px] overflow-y-auto">
              {query && results.length === 0 && (
                <div className="px-5 py-12 text-center text-text-muted text-sm">
                  No results found for &ldquo;{query}&rdquo;
                </div>
              )}
              {results.map((result, i) => {
                const Icon = typeIcons[result.type];
                return (
                  <Link
                    key={result.id}
                    href={result.url}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 px-5 py-3 transition-colors ${
                      i === selectedIndex
                        ? "bg-surface"
                        : "hover:bg-surface-hover"
                    }`}
                  >
                    <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-[var(--radius-sm)] bg-bg-secondary">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary truncate">
                        {result.title}
                      </p>
                      <p className="text-xs text-text-muted truncate">
                        {result.excerpt}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-text-muted shrink-0" />
                  </Link>
                );
              })}
            </div>

            {/* Footer hint */}
            {!query && (
              <div className="px-5 py-8 text-center">
                <p className="text-sm text-text-muted">
                  Start typing to search across all content
                </p>
                <div className="flex items-center justify-center gap-3 mt-3 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-surface border border-border rounded text-[10px] font-mono">↑↓</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-surface border border-border rounded text-[10px] font-mono">↵</kbd>
                    Open
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-surface border border-border rounded text-[10px] font-mono">Esc</kbd>
                    Close
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
