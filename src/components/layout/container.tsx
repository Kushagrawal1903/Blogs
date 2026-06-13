import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  size?: "default" | "content" | "article";
  className?: string;
}

export function Container({
  children,
  size = "default",
  className,
}: ContainerProps) {
  const maxWidths = {
    default: "max-w-[var(--container-max)]",
    content: "max-w-[var(--container-content)]",
    article: "max-w-[var(--container-article)]",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-5 md:px-8 lg:px-16",
        maxWidths[size],
        className
      )}
    >
      {children}
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "primary" | "secondary" | "surface";
}

export function Section({
  children,
  className,
  id,
  background = "primary",
}: SectionProps) {
  const backgrounds = {
    primary: "bg-bg-primary",
    secondary: "bg-bg-secondary",
    surface: "bg-surface",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-8 md:py-[var(--spacing-section-sm)] lg:py-[var(--spacing-section)]",
        backgrounds[background],
        className
      )}
    >
      {children}
    </section>
  );
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="pt-6 pb-8 md:pt-8 md:pb-12">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-2 text-sm text-text-muted">
            <li>
              <a href="/" className="hover:text-text-primary transition-colors">
                Home
              </a>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.href} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-text-secondary">{crumb.label}</span>
                ) : (
                  <a
                    href={crumb.href}
                    className="hover:text-text-primary transition-colors"
                  >
                    {crumb.label}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <h1 className="display">{title}</h1>
      {description && (
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">{description}</p>
      )}
    </div>
  );
}
