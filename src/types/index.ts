export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  coverImage: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  wordCount: number;
  featured: boolean;
}

export interface Project {
  title: string;
  slug: string;
  overview: string;
  content: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  coverImage: string;
  featured: boolean;
  status: "active" | "completed" | "archived";
}

export interface Book {
  title: string;
  slug: string;
  description: string;
  content: string;
  coverImage: string;
  purchaseLinks: { platform: string; url: string }[];
  publishedDate: string;
}

export interface Resource {
  title: string;
  description: string;
  url: string;
  category: string;
  icon?: string;
}

export interface ChangelogEntry {
  date: string;
  title: string;
  description: string;
  type: "feature" | "improvement" | "fix";
}

export interface ReadingStats {
  totalArticles: number;
  totalWords: number;
  estimatedReadingHours: number;
  categoriesCovered: number;
}

export interface KnowledgeNode {
  id: string;
  label: string;
  category: string;
  x?: number;
  y?: number;
  size: number;
  color: string;
}

export interface KnowledgeLink {
  source: string;
  target: string;
  strength: number;
}
