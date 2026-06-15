import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { SearchPageClient } from "@/components/shared/search-page-client";

export const metadata: Metadata = {
  title: "Search",
  description: "Search across all articles, projects, and books on blog.kushagrawal.in.",
};

export default function SearchPage() {
  return (
    <Container>
      <PageHeader
        title="Search"
        description="Find articles, projects, books, and more."
        breadcrumbs={[{ label: "Search", href: "/search" }]}
      />
      <SearchPageClient />
    </Container>
  );
}
