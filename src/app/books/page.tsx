import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/layout/container";
import { getAllBooks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Books",
  description: "Published books by Kush Agrawal on software development and technology.",
};

export default function BooksPage() {
  const books = getAllBooks();

  return (
    <Container>
      <PageHeader
        title="Books"
        description="Published works on software development, career growth, and technology."
        breadcrumbs={[{ label: "Books", href: "/books" }]}
      />

      <div className="flex flex-wrap justify-center gap-12 md:gap-16 pb-20">
        {books.map((book) => (
          <Link key={book.slug} href={`/books/${book.slug}`} className="group block text-center">
            <div
              className="relative w-[200px] h-[290px] rounded-r-lg rounded-l-sm shadow-[var(--shadow-md)] group-hover:shadow-[var(--shadow-lg)] transition-all group-hover:-translate-y-2 overflow-hidden"
              style={{ background: "linear-gradient(135deg, #828475 0%, #828475dd 100%)" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-black/10" />
              <div className="relative z-10 flex flex-col justify-between h-full p-5 pl-7 text-white">
                <p className="text-xs opacity-60 uppercase tracking-wider">2026</p>
                <div>
                  <h3 className="text-base font-display font-semibold leading-tight">{book.title}</h3>
                  <p className="text-xs opacity-60 mt-2">Kush Agrawal</p>
                </div>
              </div>
            </div>
            <h3 className="mt-5 text-base font-semibold text-text-primary">{book.title}</h3>
            <p className="mt-1 text-sm text-text-secondary max-w-[220px] mx-auto">{book.description}</p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
