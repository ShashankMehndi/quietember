import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type CTA = { href: string; label: string; variant?: "primary" | "outline" };

export default function HeroSection({
  eyebrow,
  title,
  titleItalic,
  description,
  ctas,
  imageSrc,
  imageAlt,
  imageClassName,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  titleItalic?: string;
  description?: string;
  ctas?: CTA[];
  imageSrc?: string;
  imageAlt?: string;
  imageClassName?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative overflow-hidden px-4 py-16 md:px-6 md:py-24 ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--warm-white)_0%,var(--cream)_100%)] opacity-90" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          {eyebrow && (
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--teal)" }}>
              {eyebrow}
            </p>
          )}
          <h1
            className="text-4xl font-normal leading-tight md:text-5xl lg:text-[3.25rem]"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            {title}
            {titleItalic && (
              <>
                {" "}
                <em className="not-italic" style={{ fontStyle: "italic" }}>
                  {titleItalic}
                </em>
              </>
            )}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              {description}
            </p>
          )}
          {ctas && ctas.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {ctas.map((c) =>
                c.variant === "outline" ? (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="inline-flex items-center gap-2 rounded-full border-2 px-5 py-3 text-[14px] font-semibold transition-colors hover:bg-[var(--warm-50)]"
                    style={{ borderColor: "var(--teal-dark)", color: "var(--text-dark)" }}
                  >
                    {c.label}
                  </Link>
                ) : (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold text-white shadow-md transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "var(--teal-dark)" }}
                  >
                    {c.label}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                )
              )}
            </div>
          )}
          {children}
        </div>
        {imageSrc && (
          <div className={`relative aspect-[4/5] w-full max-w-md justify-self-center lg:max-w-none ${imageClassName ?? ""}`}>
            <Image
              src={imageSrc}
              alt={imageAlt ?? ""}
              fill
              className="rounded-[2rem] object-cover shadow-xl"
              sizes="(max-width: 1024px) 90vw, 45vw"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
