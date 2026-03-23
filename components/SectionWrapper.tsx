import { ReactNode } from "react";

const tones = {
  cream: "bg-[var(--cream)]",
  warm50: "bg-[var(--warm-50)]",
  white: "bg-[var(--warm-white)]",
  sage: "bg-[linear-gradient(180deg,var(--warm-50)_0%,rgba(122,184,144,0.22)_100%)]",
  mint: "bg-[linear-gradient(180deg,var(--cream)_0%,rgba(184,234,226,0.5)_100%)]",
  purple: "bg-[linear-gradient(180deg,var(--cream)_0%,rgba(42,107,100,0.08)_100%)]",
} as const;

export type SectionTone = keyof typeof tones;

export default function SectionWrapper({
  tone = "cream",
  className = "",
  children,
  id,
}: {
  tone?: SectionTone;
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={`px-6 py-16 md:py-20 ${tones[tone]} ${className}`}>
      {children}
    </section>
  );
}
