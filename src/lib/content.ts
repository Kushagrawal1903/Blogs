import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { calculateReadingTime } from "./utils";
import type { BlogPost, Project, Book, ReadingStats } from "@/types";

const contentDir = path.join(process.cwd(), "content");

function getMDXFiles(dir: string): string[] {
  const fullPath = path.join(contentDir, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs
    .readdirSync(fullPath)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.join(fullPath, file));
}

function parseMDXFile<T>(filePath: string): T & { content: string } {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const wordCount = content.trim().split(/\s+/).length;
  return {
    ...data,
    content,
    wordCount,
    readingTime: calculateReadingTime(content),
  } as unknown as T & { content: string };
}

// ── Blog Posts ───────────────────────────────────────────

export function getAllPosts(): BlogPost[] {
  const files = getMDXFiles("blog");
  return files
    .map((file) => parseMDXFile<BlogPost>(file))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  tags: string[],
  limit: number = 3
): BlogPost[] {
  const allPosts = getAllPosts().filter((p) => p.slug !== currentSlug);

  const scored = allPosts.map((post) => {
    let score = 0;
    if (post.category === category) score += 3;
    const commonTags = post.tags.filter((t) => tags.includes(t));
    score += commonTags.length * 2;
    return { post, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.post);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  return [...new Set(posts.map((p) => p.category))];
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  return [...new Set(posts.flatMap((p) => p.tags))];
}

// ── Projects ────────────────────────────────────────────

export function getAllProjects(): Project[] {
  const files = getMDXFiles("projects");
  return files.map((file) => parseMDXFile<Project>(file));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

// ── Books ───────────────────────────────────────────────

export function getAllBooks(): Book[] {
  const files = getMDXFiles("books");
  return files.map((file) => parseMDXFile<Book>(file));
}

export function getBookBySlug(slug: string): Book | undefined {
  return getAllBooks().find((b) => b.slug === slug);
}

// ── Reading Stats ───────────────────────────────────────

export function getReadingStats(): ReadingStats {
  const posts = getAllPosts();
  const totalWords = posts.reduce((sum, post) => sum + (post.wordCount || 0), 0);
  const categories = new Set(posts.map((p) => p.category));

  return {
    totalArticles: posts.length,
    totalWords,
    estimatedReadingHours: Math.round(totalWords / 200 / 60 * 10) / 10,
    categoriesCovered: categories.size,
  };
}

// ── Search Index Generation ─────────────────────────────

export function generateSearchIndex() {
  const posts = getAllPosts();
  const projects = getAllProjects();
  const books = getAllBooks();

  return [
    ...posts.map((p) => ({
      id: `blog-${p.slug}`,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      tags: p.tags.join(", "),
      type: "blog" as const,
      url: `/blog/${p.slug}`,
    })),
    ...projects.map((p) => ({
      id: `project-${p.slug}`,
      title: p.title,
      excerpt: p.overview,
      category: "projects",
      tags: p.techStack.join(", "),
      type: "project" as const,
      url: `/projects/${p.slug}`,
    })),
    ...books.map((b) => ({
      id: `book-${b.slug}`,
      title: b.title,
      excerpt: b.description,
      category: "books",
      tags: "",
      type: "book" as const,
      url: `/books/${b.slug}`,
    })),
  ];
}
