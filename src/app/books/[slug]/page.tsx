import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBooks, getBookBySlug } from "@/lib/content";
import BookDetailView from "@/components/books/BookDetailView";
import { getPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllBooks().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};
  return { 
    title: book.title, 
    description: book.description,
    ...getPageMetadata(`books/${slug}`),
  };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": book.title,
        "item": `${siteConfig.url}/books/${slug}`
      }
    ]
  };

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": book.title,
    "description": book.description,
    "author": {
      "@type": "Person",
      "name": "Kush Agrawal"
    },
    "publisher": {
      "@type": "Person",
      "name": "Kush Agrawal"
    },
    "image": book.coverImage ? `${siteConfig.url}${book.coverImage}` : undefined,
    "offers": book.purchaseLinks?.map((link) => ({
      "@type": "Offer",
      "url": link.url,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <BookDetailView book={book} />
    </>
  );
}
