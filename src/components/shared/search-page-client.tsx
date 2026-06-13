"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, FileText, FolderOpen, BookOpen } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  type: "blog" | "project" | "book";
  url: string;
  category: string;
}

const typeIcons = { blog: FileText, project: FolderOpen, book: BookOpen };
const typeLabels = { blog: "Article", project: "Project", book: "Book" };

export function SearchPageClient() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (res.ok) {
          const data = await res.json();
          setResults(data.results || []);
        }
      } catch { setResults([]); }
      setLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="pb-20">
      {/* Search Input */}
      <div className="relative mb-10">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles, projects, books..."
          autoFocus
          className="w-full h-14 pl-14 pr-5 text-lg bg-surface border border-border rounded-[var(--radius-lg)] outline-none focus:ring-2 focus:ring-accent/30 transition-all"
        />
      </div>

      {/* Results */}
      {loading && <p className="text-text-muted text-center py-8">Searching...</p>}

      {!loading && query && results.length === 0 && (
        <p className="text-text-muted text-center py-12">No results found for &ldquo;{query}&rdquo;</p>
      )}

      <div className="space-y-3">
        {results.map((result) => {
          const Icon = typeIcons[result.type];
          return (
            <Link
              key={result.id}
              href={result.url}
              className="group flex items-center gap-4 p-5 bg-surface rounded-[var(--radius-lg)] hover:shadow-[var(--shadow-sm)] transition-all"
            >
              <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-[var(--radius-md)] bg-bg-secondary">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors truncate">{result.title}</h3>
                  <span className="text-xs text-text-muted px-2 py-0.5 bg-bg-primary rounded-full shrink-0">{typeLabels[result.type]}</span>
                </div>
                <p className="text-sm text-text-secondary truncate mt-0.5">{result.excerpt}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
