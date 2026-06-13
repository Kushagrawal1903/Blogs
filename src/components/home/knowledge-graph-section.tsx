"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout/container";
import Link from "next/link";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  size: number;
  color: string;
  category: string;
}

interface Edge {
  source: string;
  target: string;
}

const NODES: Node[] = [
  { id: "dev", label: "Development", x: 0, y: 0, size: 26, color: "#828475", category: "development" },
  { id: "data", label: "Data Analytics", x: 0, y: 0, size: 22, color: "#6E7066", category: "data-analytics" },
  { id: "ai", label: "AI / ML", x: 0, y: 0, size: 19, color: "#9B8E7B", category: "development" },
  { id: "cyber", label: "Cybersecurity", x: 0, y: 0, size: 22, color: "#4A7C59", category: "cybersecurity" },
  { id: "books", label: "Books", x: 0, y: 0, size: 18, color: "#C45D5D", category: "writing" },
  { id: "writing", label: "Writing", x: 0, y: 0, size: 19, color: "#B07A5B", category: "writing" },
  { id: "projects", label: "Projects", x: 0, y: 0, size: 21, color: "#7B8471", category: "development" },
  { id: "web", label: "Web Dev", x: 0, y: 0, size: 16, color: "#828475", category: "development" },
  { id: "python", label: "Python", x: 0, y: 0, size: 16, color: "#6E7066", category: "data-analytics" },
  { id: "networks", label: "Networks", x: 0, y: 0, size: 14, color: "#4A7C59", category: "cybersecurity" },
];

const EDGES: Edge[] = [
  { source: "dev", target: "ai" },
  { source: "dev", target: "web" },
  { source: "dev", target: "projects" },
  { source: "data", target: "ai" },
  { source: "data", target: "python" },
  { source: "ai", target: "projects" },
  { source: "cyber", target: "networks" },
  { source: "cyber", target: "python" },
  { source: "books", target: "writing" },
  { source: "writing", target: "dev" },
  { source: "projects", target: "data" },
  { source: "dev", target: "cyber" },
  { source: "data", target: "writing" },
];

export function KnowledgeGraphSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 });

  const layoutNodes = useCallback((w: number, h: number) => {
    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) * 0.35;
    return NODES.map((node, i) => {
      const angle = (i / NODES.length) * 2 * Math.PI - Math.PI / 2;
      const jitter = (Math.random() - 0.5) * radius * 0.3;
      return {
        ...node,
        x: cx + Math.cos(angle) * (radius + jitter),
        y: cy + Math.sin(angle) * (radius + jitter),
      };
    });
  }, []);

  useEffect(() => {
    const updateSize = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const w = rect.width;
        const h = Math.max(340, Math.min(460, w * 0.5));
        setDimensions({ width: w, height: h });
        setNodes(layoutNodes(w, h));
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [layoutNodes]);

  const isConnected = (nodeId: string) => {
    if (!hoveredNode) return false;
    return EDGES.some(
      (e) =>
        (e.source === hoveredNode && e.target === nodeId) ||
        (e.target === hoveredNode && e.source === nodeId)
    );
  };

  return (
    <Section>
      <Container>
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
            Explore Connections
          </p>
          <h2 className="display text-text-primary">Knowledge Graph</h2>
          <p className="mt-3 text-sm text-text-secondary max-w-xl mx-auto">
            An interactive map of how my interests and expertise connect. Hover over a node to see its relationships.
          </p>
        </div>

        <motion.div
          ref={canvasRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-surface rounded-[var(--radius-lg)] overflow-hidden border border-border"
          style={{ height: dimensions.height }}
          role="img"
          aria-label="Interactive knowledge graph showing connections between Development, Data Analytics, Cybersecurity, AI, Writing, and more."
        >
          <svg
            width={dimensions.width}
            height={dimensions.height}
            className="absolute inset-0"
          >
            {/* Grid dots */}
            <defs>
              <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.8" fill="#E5E5E0" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" opacity="0.5" />

            {/* Edges */}
            {nodes.length > 0 &&
              EDGES.map((edge) => {
                const source = nodes.find((n) => n.id === edge.source);
                const target = nodes.find((n) => n.id === edge.target);
                if (!source || !target) return null;
                const active =
                  hoveredNode &&
                  (edge.source === hoveredNode || edge.target === hoveredNode);
                return (
                  <line
                    key={`${edge.source}-${edge.target}`}
                    x1={source.x}
                    y1={source.y}
                    x2={target.x}
                    y2={target.y}
                    stroke={active ? "#828475" : "#E5E5E0"}
                    strokeWidth={active ? 2 : 1}
                    strokeDasharray={active ? "none" : "4 4"}
                    style={{
                      transition: "stroke 0.3s, stroke-width 0.3s",
                    }}
                  />
                );
              })}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => {
            const active = hoveredNode === node.id;
            const connected = isConnected(node.id);
            const dimmed = hoveredNode && !active && !connected;

            return (
              <button
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode(node.id)}
                onBlur={() => setHoveredNode(null)}
                className="absolute flex flex-col items-center gap-1 group focus:outline-none"
                style={{
                  left: node.x,
                  top: node.y,
                  transform: "translate(-50%, -50%)",
                  opacity: dimmed ? 0.3 : 1,
                  transition: "opacity 0.3s, transform 0.3s",
                  zIndex: active ? 10 : 1,
                }}
                aria-label={`${node.label} topic node`}
              >
                <div
                  className="rounded-full flex items-center justify-center shadow-sm transition-transform"
                  style={{
                    width: node.size * 1.8,
                    height: node.size * 1.8,
                    backgroundColor: active ? node.color : `${node.color}20`,
                    border: `2px solid ${active ? node.color : `${node.color}40`}`,
                    transform: active ? "scale(1.2)" : "scale(1)",
                  }}
                >
                  <div
                    className="rounded-full"
                    style={{
                      width: node.size * 0.5,
                      height: node.size * 0.5,
                      backgroundColor: active ? "#fff" : node.color,
                    }}
                  />
                </div>
                <span
                  className="text-xs font-medium whitespace-nowrap mt-1 transition-colors"
                  style={{ color: active ? node.color : "#5F6368" }}
                >
                  {node.label}
                </span>
              </button>
            );
          })}
        </motion.div>

        <div className="text-center mt-6">
          <Link
            href="/knowledge-graph"
            className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Explore full knowledge graph →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
