"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export function NewsletterForm({ variant = "default" }: { variant?: "default" | "compact" | "hero" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 h-10 px-3.5 text-xs bg-bg-primary border border-border rounded-[var(--radius-md)] outline-none focus:ring-2 focus:ring-accent/30 transition-all"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-10 px-4 bg-text-primary text-white text-xs font-medium rounded-[var(--radius-md)] hover:-translate-y-0.5 transition-all disabled:opacity-50"
        >
          {status === "loading" ? "..." : status === "success" ? "✓" : "Subscribe"}
        </button>
      </form>
    );
  }

  return (
    <div className={variant === "hero" ? "" : "bg-surface rounded-[var(--radius-lg)] p-6 md:p-10"}>
      {variant !== "hero" && (
        <>
          <h3 className="text-xl font-semibold font-display">Stay updated</h3>
          <p className="mt-1.5 text-sm text-text-secondary">
            Join 1,000+ readers. Get articles on development, data, and cybersecurity delivered to your inbox.
          </p>
        </>
      )}
      <form onSubmit={handleSubmit} className={variant === "hero" ? "" : "mt-4"}>
        <div className="flex flex-col sm:flex-row gap-2.5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            aria-label="Email address"
            className="flex-1 h-[44px] px-4 text-sm bg-bg-primary border border-border rounded-[var(--radius-md)] outline-none focus:ring-2 focus:ring-accent/30 transition-all"
          />
          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="h-[44px] px-6 bg-text-primary text-white text-sm font-medium rounded-[var(--radius-md)] flex items-center justify-center gap-2 hover:bg-accent-hover transition-colors disabled:opacity-50"
          >
            {status === "loading" ? (
              <span className="animate-pulse">Subscribing...</span>
            ) : status === "success" ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Subscribed!
              </>
            ) : (
              <>
                Subscribe
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </motion.button>
        </div>
        <p className="mt-2.5 text-[11px] text-text-muted">
          No spam. Unsubscribe anytime. Your data stays private.
        </p>
      </form>
    </div>
  );
}
