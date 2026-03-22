import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Quiet Ember — our mission, values, and why we offer non-clinical mental health support, psychological first aid, and wellbeing programmes in Hyderabad and online.",
};

const values = [
  { title: "Our mission", body: "To offer emotional wellness that feels accessible, human, and unhurried — for anyone navigating grief, anxiety, relationship strain, or the quiet weight of everyday life." },
  { title: "Our vision", body: "A world where asking for support is ordinary, gentle, and free from shame — where healing is practiced like tending an ember: quietly, consistently, with care." },
  { title: "Our values", body: "Warmth over cold expertise. Honesty without alarm. Encouragement without pressure. You are never a case file — always a person." },
];

export default function AboutPage() {
  return (
    <>
      <SectionWrapper tone="white" className="!pt-12 md:!pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
            About Quiet Ember
          </p>
          <h1
            className="mt-3 text-4xl font-normal md:text-5xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Healing is not a destination — it is a practice, tended with care
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
            We believe everyone deserves to feel heard without judgement. Quiet Ember exists for the moments between crisis and fine — when you need a steady, kind presence.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="warm50">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] w-full max-w-md justify-self-center overflow-hidden rounded-[1.5rem] shadow-lg lg:max-w-none">
            <Image src="/images/GettyImages-1463774501-796x1024.webp" alt="Founder portrait" fill className="object-cover object-top" sizes="(max-width:1024px) 90vw, 45vw" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--coral)" }}>
              Founder
            </p>
            <h2
              className="mt-2 text-3xl font-normal md:text-4xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              Why Quiet Ember exists
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              This practice began from a simple observation: many people wait until they are in crisis before they feel “allowed” to seek support. We wanted a different door — one that opens for the quiet struggles too.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              Our approach blends evidence-informed methods with plain language and patience. We are not here to fix you; we are here to sit beside you while you find what fits.
            </p>
            <Link
              href="/therapists"
              className="mt-6 inline-flex rounded-full px-5 py-2.5 text-[13px] font-semibold text-white"
              style={{ backgroundColor: "var(--teal-dark)" }}
            >
              Meet the team →
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="mint">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-normal md:text-4xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Why &ldquo;Quiet Ember&rdquo;?
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
            An ember does not shout — it glows. It holds warmth through the night. We chose this name because emotional wellness often grows in small, steady ways: a conversation, a breath, a little more honesty with yourself. That is the spirit of this work.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <div className="mx-auto max-w-3xl">
          <h2
            className="text-center text-3xl font-normal md:text-4xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Mission, vision, values
          </h2>
          <div className="mt-10 space-y-4">
            <FAQAccordion
              items={values.map((v) => ({ q: v.title, a: v.body }))}
              defaultOpen={0}
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="cream">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-2xl font-normal md:text-3xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Ready to explore together?
          </h2>
          <Link href="/contact" className="mt-6 inline-flex rounded-full px-6 py-3 text-[14px] font-semibold text-white" style={{ backgroundColor: "var(--teal-dark)" }}>
            Get in touch
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
