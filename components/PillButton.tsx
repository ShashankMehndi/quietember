import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type Base = {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
};

export function PillButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  showArrow = true,
}: Base & { href: string; variant?: "primary" | "outline" }) {
  const base =
    "inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[14px] font-semibold transition-all hover:brightness-110";
  if (variant === "outline") {
    return (
      <Link
        href={href}
        className={`${base} border-2 ${className}`}
        style={{ borderColor: "var(--purple)", color: "var(--text-dark)" }}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className={`${base} text-[var(--cream)] shadow-md ${className}`}
      style={{ backgroundColor: "var(--purple)" }}
    >
      {children}
      {showArrow && (
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
          <ArrowRight className="h-4 w-4" aria-hidden />
        </span>
      )}
    </Link>
  );
}
