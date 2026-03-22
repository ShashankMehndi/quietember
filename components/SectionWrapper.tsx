import { ReactNode } from "react";

const tones = {
  cream: "bg-[var(--cream)]",
  warm50: "bg-[var(--warm-50)]",
  white: "bg-[var(--warm-white)]",
  sage: "bg-[linear-gradient(180deg,var(--warm-50)_0%,rgba(180,206,175,0.25)_100%)]",
  mint: "bg-[linear-gradient(180deg,var(--cream)_0%,rgba(233,255,244,0.45)_100%)]",
  purple: "bg-[linear-gradient(180deg,var(--cream)_0%,rgba(53,42,68,0.06)_100%)]",
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
