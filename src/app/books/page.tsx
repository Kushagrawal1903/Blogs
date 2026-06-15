import type { Metadata } from "next";
import { getAllBooks } from "@/lib/content";
import BooksSection from "@/components/books/BooksSection";
import { getPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Published books by Kush Agrawal on software development, computer engineering, and developer guides.",
  ...getPageMetadata("books"),
};

export default function BooksPage() {
  const books = getAllBooks();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Books",
        "item": `${siteConfig.url}/books`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BooksSection books={books} />
    </>
  );
}
