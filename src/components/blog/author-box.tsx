import Image from "next/image";
import Link from "next/link";

export function AuthorBox() {
  return (
    <div className="bg-surface border border-border rounded-[var(--radius-lg)] p-6 my-10 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
      <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden border border-border bg-bg-primary">
        <Image
          src="/images/kush-avatar.png"
          alt="Kush Agrawal"
          fill
          sizes="64px"
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="space-y-1">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
          <span className="font-semibold text-text-primary text-base">Written by Kush Agrawal</span>
          <span className="text-xs text-text-secondary px-2 py-0.5 bg-bg-primary rounded-full border border-border">
            Author & CSE Student
          </span>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">
          B.Tech Computer Science Engineering student at IPS IES Academy, Indore. Technical writer, Cybersecurity Intern, and author of textbook publications including <em>Fundamentals of Internet of Things</em> and <em>Basic C Programming</em>.
        </p>
        <div className="pt-1">
          <Link
            href="/about"
            className="text-xs font-semibold text-accent hover:text-text-primary hover:underline transition-colors"
          >
            Learn more about Kush &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
