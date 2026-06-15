"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactFormClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) {
      newErrors.name = "Name is required.";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required.";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // 95% success rate simulation
          if (Math.random() > 0.05) {
            resolve(true);
          } else {
            reject(new Error("Failed to send message."));
          }
        }, 1500);
      });
      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div 
        className="flex flex-col items-center justify-center py-20 text-center bg-surface border border-border rounded-[var(--radius-lg)] p-8"
        role="alert"
        aria-live="polite"
      >
        <CheckCircle className="w-12 h-12 text-success mb-4" />
        <h3 className="text-xl font-semibold text-text-primary">Message sent successfully!</h3>
        <p className="mt-2 text-text-secondary max-w-sm">Thanks for reaching out, Kush will get back to you within 24–48 hours.</p>
        <button 
          onClick={() => setStatus("idle")} 
          type="button"
          className="mt-6 text-sm text-accent hover:text-text-primary underline cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {status === "error" && (
        <div 
          className="p-4 bg-error/10 border border-error/20 rounded-[var(--radius-md)] flex items-start gap-3 text-error text-sm"
          role="alert"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Submission failed</p>
            <p className="text-xs mt-0.5">An unexpected error occurred. Please try again or contact me directly via email.</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
            }}
            className={`w-full h-[44px] px-4 bg-bg-primary border rounded-[var(--radius-md)] outline-none focus:ring-2 focus:ring-accent/30 transition-all text-sm ${
              errors.name ? "border-error focus:ring-error/20" : "border-border"
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-error mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
            }}
            className={`w-full h-[44px] px-4 bg-bg-primary border rounded-[var(--radius-md)] outline-none focus:ring-2 focus:ring-accent/30 transition-all text-sm ${
              errors.email ? "border-error focus:ring-error/20" : "border-border"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-error mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
            </p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-1.5">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          required
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            if (errors.subject) setErrors((prev) => ({ ...prev, subject: "" }));
          }}
          className={`w-full h-[44px] px-4 bg-bg-primary border rounded-[var(--radius-md)] outline-none focus:ring-2 focus:ring-accent/30 transition-all text-sm ${
            errors.subject ? "border-error focus:ring-error/20" : "border-border"
          }`}
          placeholder="What's this about?"
        />
        {errors.subject && (
          <p id="subject-error" className="text-xs text-error mt-1.5 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
          }}
          className={`w-full px-4 py-3 bg-bg-primary border rounded-[var(--radius-md)] outline-none focus:ring-2 focus:ring-accent/30 transition-all text-sm resize-none ${
            errors.message ? "border-error focus:ring-error/20" : "border-border"
          }`}
          placeholder="Your message..."
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-error mt-1.5 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
          </p>
        )}
      </div>
      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ y: status === "loading" ? 0 : -2 }}
        whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
        className="h-[44px] px-6 bg-text-primary text-white text-sm font-medium rounded-[var(--radius-md)] flex items-center gap-2 hover:bg-accent-hover transition-colors disabled:opacity-50 cursor-pointer"
      >
        {status === "loading" ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send className="w-3.5 h-3.5" />
          </>
        )}
      </motion.button>
    </form>
  );
}
