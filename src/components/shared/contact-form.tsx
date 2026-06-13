"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export function ContactFormClient() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <CheckCircle className="w-12 h-12 text-success mb-4" />
        <h3 className="text-xl font-semibold text-text-primary">Message sent!</h3>
        <p className="mt-2 text-text-secondary">Thanks for reaching out. I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">Name</label>
          <input id="name" type="text" required className="w-full h-[44px] px-4 bg-bg-primary border border-border rounded-[var(--radius-md)] outline-none focus:ring-2 focus:ring-accent/30 transition-all text-sm" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
          <input id="email" type="email" required className="w-full h-[44px] px-4 bg-bg-primary border border-border rounded-[var(--radius-md)] outline-none focus:ring-2 focus:ring-accent/30 transition-all text-sm" placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-1.5">Subject</label>
        <input id="subject" type="text" required className="w-full h-[44px] px-4 bg-bg-primary border border-border rounded-[var(--radius-md)] outline-none focus:ring-2 focus:ring-accent/30 transition-all text-sm" placeholder="What's this about?" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">Message</label>
        <textarea id="message" required rows={5} className="w-full px-4 py-3 bg-bg-primary border border-border rounded-[var(--radius-md)] outline-none focus:ring-2 focus:ring-accent/30 transition-all text-sm resize-none" placeholder="Your message..." />
      </div>
      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="h-[44px] px-6 bg-text-primary text-white text-sm font-medium rounded-[var(--radius-md)] flex items-center gap-2 hover:bg-accent-hover transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : (<>Send Message <Send className="w-3.5 h-3.5" /></>)}
      </motion.button>
    </form>
  );
}
