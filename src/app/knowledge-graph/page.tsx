import type { Metadata } from "next";
import { KnowledgeGraphFull } from "@/components/home/knowledge-graph-full";

export const metadata: Metadata = {
  title: "Knowledge Graph",
  description: "An interactive visualization of how topics connect across Kush Agrawal's work.",
};

export default function KnowledgeGraphPage() {
  return <KnowledgeGraphFull />;
}
