import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { ReactNode } from "react";

export default function CTABanner({
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  phone,
  phoneHref,
  variant = "teal",
  children,
  backgroundImage,
}: {
  title: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  phone?: string;
  /** If set, used for tel: link (e.g. E.164). Otherwise digits from `phone` are used. */
  phoneHref?: string;
  variant?: "teal" | "coral" | "image";
  children?: ReactNode;
  backgroundImage?: string;
}) {
  const bg =
    variant === "coral"
      ? "linear-gradient(135deg, #D4836A 0%, #B8664F 100%)"
      : variant === "image" && backgroundImage
        ? undefined
        : "linear-gradient(135deg, #352A44 0%, #4A3D5C 100%)";

  return (
    <section
      className="relative overflow-hidden px-4 py-16 md:px-6 md:py-20"
      style={{
        background: bg ?? `url(${backgroundImage}) center/cover`,
      }}
    >
      {variant === "image" && backgroundImage && (
        <div className="absolute inset-0 bg-[var(--teal-dark)]/75 backdrop-blur-[2px]" />
      )}
      <div className="relative mx-auto max-w-4xl text-center text-white">
        <h2
          className="text-3xl font-normal leading-tight md:text-4xl"
          style={{ fontFamily: "'Baskervville', Georgia, serif" }}
        >
          {title}
        </h2>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/90">{subtitle}</p>}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {primaryHref && primaryLabel && (
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold shadow-lg transition-opacity hover:opacity-95"
              style={{ color: "var(--teal-dark)" }}
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
          {phone && (
            <a
              href={phoneHref ?? `tel:${phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-6 py-3 text-[14px] font-semibold backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              {phone}
            </a>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
