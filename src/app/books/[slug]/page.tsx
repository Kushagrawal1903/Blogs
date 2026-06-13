import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { getAllBooks, getBookBySlug } from "@/lib/content";
import { ArrowLeft, ShoppingCart } from "lucide-react";

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

  return (
    <Container size="content" className="py-8 md:py-12 pb-20">
      <Link href="/books" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Books
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12">
        {/* Book Cover */}
        <div className="flex justify-center md:justify-start">
          <div className="w-[220px] h-[320px] rounded-r-lg rounded-l-sm shadow-[var(--shadow-lg)] overflow-hidden" style={{ background: "linear-gradient(135deg, #828475 0%, #828475dd 100%)" }}>
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-black/10" />
            <div className="relative flex flex-col justify-between h-full p-6 pl-8 text-white">
              <p className="text-xs opacity-60 uppercase tracking-wider">2026</p>
              <div>
                <h2 className="text-lg font-display font-semibold leading-tight">{book.title}</h2>
                <p className="text-sm opacity-60 mt-2">Kush Agrawal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Book Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary">{book.title}</h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">{book.description}</p>

          {book.purchaseLinks.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {book.purchaseLinks.map((link) => (
                <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-12 px-6 bg-text-primary text-white rounded-[var(--radius-md)] text-sm font-medium hover:bg-accent-hover transition-colors">
                  <ShoppingCart className="w-4 h-4" /> Buy on {link.platform}
                </a>
              ))}
            </div>
          )}

          <div className="mt-12 prose-editorial"
            dangerouslySetInnerHTML={{
              __html: book.content
                .replace(/^---[\s\S]*?---\n*/m, "")
                .replace(/^## (.+)$/gm, "<h2>$1</h2>")
                .replace(/^### (.+)$/gm, "<h3>$1</h3>")
                .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                .replace(/^\- (.+)$/gm, "<li>$1</li>")
                .replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>")
                .replace(/<\/ul>\s*<ul>/g, "")
                .replace(/^(?!<[huplbso])((?!^$).+)$/gm, "<p>$1</p>")
                .replace(/<p><\/p>/g, ""),
            }}
          />
        </div>
      </div>
    </Container>
  );
}
