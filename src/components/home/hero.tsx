"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { Container } from "@/components/layout/container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-bg-primary">
      <Container className="py-14 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left , Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-5">
              Welcome to my digital workspace
            </p>
            <h1 className="display-xl text-text-primary text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
              Building things,
              <br />
              analyzing data,
              <br />
              <span className="text-accent">and sharing ideas.</span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed">
              I&apos;m Kush Agrawal - a computer science student, developer, data analyst, and writer exploring the intersection of technology and knowledge.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 h-[52px] px-8 bg-text-primary text-white text-base font-medium rounded-[var(--radius-md)] transition-colors hover:bg-accent-hover"
                >
                  Read Articles
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 h-[52px] px-8 border border-border text-text-primary text-base font-medium rounded-[var(--radius-md)] hover:bg-surface transition-colors"
                >
                  Explore Projects
                  <BookOpen className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right , Editorial Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden bg-bg-secondary">
              {/* Hero image */}
              <Image
                src="/hero-image.png"
                alt="Hero visual"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
