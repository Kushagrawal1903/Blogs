"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/layout/container";

const books = [
  {
    slug: "the-developers-playbook",
    title: "The Developer's Playbook",
    description: "A comprehensive guide to building a career in software development.",
    color: "#828475",
    year: "2026",
  },
];

export function BooksSection() {
  return (
    <Section>
      <Container>
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
              Published Works
            </p>
            <h2 className="display text-text-primary">Books</h2>
          </div>
          <Link
            href="/books"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bookshelf */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {books.map((book, i) => (
            <motion.div
              key={book.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group"
            >
              <Link href={`/books/${book.slug}`} className="block">
                {/* Book Cover */}
                <div
                  className="relative w-[150px] h-[220px] md:w-[170px] md:h-[250px] rounded-r-md rounded-l-sm shadow-[var(--shadow-md)] group-hover:shadow-[var(--shadow-lg)] transition-all group-hover:-translate-y-2 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${book.color} 0%, ${book.color}dd 100%)`,
                  }}
                >
                  {/* Spine effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/10" />

                  {/* Cover content */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-4 pl-6 text-white">
                    <div>
                      <p className="text-[10px] opacity-60 uppercase tracking-wider">{book.year}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-display font-semibold leading-tight">
                        {book.title}
                      </h3>
                      <p className="text-[10px] opacity-60 mt-1.5">Kush Agrawal</p>
                    </div>
                  </div>

                  {/* Sheen effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Book shadow / shelf */}
                <div className="mt-2 mx-auto w-[130px] h-2 bg-border/50 rounded-full blur-sm" />
              </Link>

              <p className="mt-3 text-center text-sm font-medium text-text-primary max-w-[170px] mx-auto">
                {book.title}
              </p>
              <p className="text-center text-xs text-text-muted mt-1 max-w-[170px] mx-auto">
                {book.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
