"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import Link from "next/link";
import { ArrowLeft, ZoomIn, ZoomOut, Maximize } from "lucide-react";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  size: number;
  color: string;
  description: string;
  links: string[];
}

interface Edge {
  source: string;
  target: string;
}

const NODES: Omit<Node, "x" | "y">[] = [
  { id: "dev", label: "Development", size: 36, color: "#828475", description: "Full-stack web development, APIs, and system architecture.", links: ["/blog/category/development"] },
  { id: "data", label: "Data Analytics", size: 32, color: "#6E7066", description: "Data pipelines, visualization, and statistical analysis.", links: ["/blog/category/data-analytics"] },
  { id: "ai", label: "AI / ML", size: 28, color: "#9B8E7B", description: "Machine learning, neural networks, and intelligent systems.", links: [] },
  { id: "cyber", label: "Cybersecurity", size: 32, color: "#4A7C59", description: "Network security, penetration testing, and threat analysis.", links: ["/blog/category/cybersecurity"] },
  { id: "books", label: "Books", size: 24, color: "#C45D5D", description: "Published works and recommended reading.", links: ["/books"] },
  { id: "writing", label: "Writing", size: 26, color: "#B07A5B", description: "Technical writing, blogging, and knowledge sharing.", links: ["/writing"] },
  { id: "projects", label: "Projects", size: 30, color: "#7B8471", description: "Software projects spanning multiple domains.", links: ["/projects"] },
  { id: "web", label: "Web Dev", size: 22, color: "#828475", description: "React, Next.js, TypeScript, and modern web standards.", links: [] },
  { id: "python", label: "Python", size: 22, color: "#6E7066", description: "Python for data science, automation, and backend.", links: [] },
  { id: "networks", label: "Networks", size: 20, color: "#4A7C59", description: "TCP/IP, network protocols, and traffic analysis.", links: [] },
  { id: "databases", label: "Databases", size: 20, color: "#828475", description: "SQL, NoSQL, and data modeling.", links: [] },
  { id: "devops", label: "DevOps", size: 18, color: "#6E7066", description: "Docker, CI/CD, and cloud infrastructure.", links: [] },
];

const EDGES: Edge[] = [
  { source: "dev", target: "ai" }, { source: "dev", target: "web" }, { source: "dev", target: "projects" },
  { source: "dev", target: "databases" }, { source: "dev", target: "devops" },
  { source: "data", target: "ai" }, { source: "data", target: "python" }, { source: "data", target: "databases" },
  { source: "ai", target: "projects" }, { source: "ai", target: "python" },
  { source: "cyber", target: "networks" }, { source: "cyber", target: "python" }, { source: "cyber", target: "dev" },
  { source: "books", target: "writing" }, { source: "writing", target: "dev" }, { source: "writing", target: "data" },
  { source: "projects", target: "data" }, { source: "projects", target: "cyber" },
  { source: "web", target: "devops" }, { source: "devops", target: "cyber" },
];

export function KnowledgeGraphFull() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [dims, setDims] = useState({ width: 1000, height: 700 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const layoutNodes = useCallback((w: number, h: number) => {
    const cx = w / 2;
    const cy = h / 2;
    const r = Math.min(w, h) * 0.35;
    return NODES.map((node, i) => {
      const angle = (i / NODES.length) * 2 * Math.PI - Math.PI / 2;
      const jitter = (Math.random() - 0.5) * r * 0.25;
      return { ...node, x: cx + Math.cos(angle) * (r + jitter), y: cy + Math.sin(angle) * (r + jitter) };
    });
  }, []);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const r = containerRef.current.getBoundingClientRect();
        const w = r.width;
        const h = Math.max(400, Math.min(550, window.innerHeight - 250));
        setDims({ width: w, height: h });
        setNodes(layoutNodes(w, h));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [layoutNodes]);

  const activeNode = hoveredNode || selectedNode;
  const isConnected = (nodeId: string) => {
    if (!activeNode) return false;
    return EDGES.some((e) => (e.source === activeNode && e.target === nodeId) || (e.target === activeNode && e.source === nodeId));
  };

  const selected = nodes.find((n) => n.id === selectedNode);

  return (
    <Container className="py-6 md:py-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-4">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="display text-text-primary mb-3">Knowledge Graph</h1>
      <p className="text-text-secondary text-sm max-w-xl mb-6">
        Explore how my interests, skills, and work connect. Click a node to learn more. This graph represents the interconnected nature of everything I do.
      </p>

      <div className="flex gap-5 flex-col lg:flex-row">
        {/* Graph */}
        <div
          ref={containerRef}
          className="flex-1 relative bg-surface rounded-[var(--radius-lg)] border border-border overflow-hidden"
          style={{ height: dims.height }}
        >
          {/* Zoom Controls */}
          <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
            <button onClick={() => setZoom((z) => Math.min(z + 0.2, 2))} className="p-1.5 bg-bg-primary border border-border rounded-[var(--radius-sm)] hover:bg-surface-hover transition-colors" aria-label="Zoom in">
              <ZoomIn className="w-4 h-4 text-text-secondary" />
            </button>
            <button onClick={() => setZoom((z) => Math.max(z - 0.2, 0.5))} className="p-1.5 bg-bg-primary border border-border rounded-[var(--radius-sm)] hover:bg-surface-hover transition-colors" aria-label="Zoom out">
              <ZoomOut className="w-4 h-4 text-text-secondary" />
            </button>
            <button onClick={() => setZoom(1)} className="p-1.5 bg-bg-primary border border-border rounded-[var(--radius-sm)] hover:bg-surface-hover transition-colors" aria-label="Reset zoom">
              <Maximize className="w-4 h-4 text-text-secondary" />
            </button>
          </div>

          <div style={{ transform: `scale(${zoom})`, transformOrigin: "center center", transition: "transform 0.3s" }}>
            <svg width={dims.width} height={dims.height} className="absolute inset-0">
              <defs>
                <pattern id="fullDots" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.6" fill="#E5E5E0" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#fullDots)" opacity="0.5" />
              {nodes.length > 0 && EDGES.map((edge) => {
                const s = nodes.find((n) => n.id === edge.source);
                const t = nodes.find((n) => n.id === edge.target);
                if (!s || !t) return null;
                const active = activeNode && (edge.source === activeNode || edge.target === activeNode);
                return <line key={`${edge.source}-${edge.target}`} x1={s.x} y1={s.y} x2={t.x} y2={t.y} stroke={active ? "#828475" : "#E5E5E0"} strokeWidth={active ? 2.5 : 1} strokeDasharray={active ? "none" : "4 4"} style={{ transition: "all 0.3s" }} />;
              })}
            </svg>

            {nodes.map((node) => {
              const active = activeNode === node.id;
              const connected = isConnected(node.id);
              const dimmed = activeNode && !active && !connected;
              return (
                <button
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setSelectedNode(node.id === selectedNode ? null : node.id)}
                  className="absolute flex flex-col items-center gap-1 focus:outline-none"
                  style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)", opacity: dimmed ? 0.25 : 1, transition: "opacity 0.3s, transform 0.3s", zIndex: active ? 10 : 1 }}
                  aria-label={`${node.label}: ${node.description}`}
                >
                  <div className="rounded-full flex items-center justify-center shadow-sm" style={{ width: node.size * 1.5, height: node.size * 1.5, backgroundColor: active ? node.color : `${node.color}20`, border: `2px solid ${active ? node.color : `${node.color}40`}`, transform: active ? "scale(1.2)" : "scale(1)", transition: "all 0.3s" }}>
                    <div className="rounded-full" style={{ width: node.size * 0.4, height: node.size * 0.4, backgroundColor: active ? "#fff" : node.color }} />
                  </div>
                  <span className="text-[11px] font-medium whitespace-nowrap" style={{ color: active ? node.color : "#5F6368", transition: "color 0.3s" }}>{node.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail Panel */}
        <motion.div
          initial={false}
          animate={{ width: selected ? 260 : 0, opacity: selected ? 1 : 0 }}
          className="shrink-0 overflow-hidden"
        >
          {selected && (
            <div className="w-[260px] bg-surface rounded-[var(--radius-lg)] border border-border p-5">
              <div className="w-9 h-9 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${selected.color}20` }}>
                <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: selected.color }} />
              </div>
              <h3 className="text-base font-semibold text-text-primary">{selected.label}</h3>
              <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">{selected.description}</p>
              <div className="mt-3.5 pt-3.5 border-t border-border">
                <h4 className="text-[10px] font-medium text-text-muted uppercase tracking-wider mb-2">Connected to</h4>
                <div className="flex flex-wrap gap-1">
                  {EDGES.filter((e) => e.source === selected.id || e.target === selected.id).map((e) => {
                    const otherId = e.source === selected.id ? e.target : e.source;
                    const other = nodes.find((n) => n.id === otherId);
                    return other ? (
                      <span key={otherId} className="text-[10px] px-1.5 py-0.5 bg-bg-primary rounded-full text-text-secondary">{other.label}</span>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </Container>
  );
}
