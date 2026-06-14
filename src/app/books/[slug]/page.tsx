import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBooks, getBookBySlug } from "@/lib/content";
import BookDetailView from "@/components/books/BookDetailView";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllBooks().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};
  return { title: book.title, description: book.description };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  return <BookDetailView book={book} />;
}
