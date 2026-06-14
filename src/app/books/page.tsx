import type { Metadata } from "next";
import { getAllBooks } from "@/lib/content";
import BooksSection from "@/components/books/BooksSection";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Published books by Kush Agrawal on software development, system design, and developer craft.",
};

export default function BooksPage() {
  const books = getAllBooks();

  return <BooksSection books={books} />;
}
