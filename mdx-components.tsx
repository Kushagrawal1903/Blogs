import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary mt-10 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-text-primary mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-text-primary mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-text-secondary leading-relaxed mb-6">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-accent-hover underline underline-offset-3 hover:text-text-primary transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-text-secondary">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-text-secondary">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-3 border-accent-light pl-6 italic text-text-secondary my-8">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="font-mono text-[0.9em] bg-code-bg px-1.5 py-0.5 rounded-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-text-primary text-bg-primary p-6 rounded-[var(--radius-md)] overflow-x-auto my-8 text-sm leading-7">
        {children}
      </pre>
    ),
    hr: () => <hr className="border-none border-t border-border my-12" />,
    img: ({ src, alt }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt || ""}
        className="rounded-[var(--radius-lg)] my-8 w-full"
        loading="lazy"
      />
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="bg-surface border border-border px-4 py-3 text-left font-semibold text-sm">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-3 text-sm text-text-secondary">
        {children}
      </td>
    ),
    ...components,
  };
}
