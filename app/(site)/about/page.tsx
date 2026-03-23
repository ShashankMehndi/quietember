import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Quiet Ember — our mission, vision, values, and non-clinical mental health support, mental health first aid, and wellbeing programmes in Hyderabad and online.",
};

const missionVisionValues = [
  {
    q: "Vision",
    a: `To build a culture across India where mental wellness is normalised, openly spoken about, and actively supported within educational institutions, workplaces, and homes.

To ensure that educators, corporate professionals, and parents are trauma-informed, neurodiversity-aware, and equipped with a strong understanding of mental health and its impact on individuals.

To create environments where individuals feel seen, supported, and empowered to navigate their emotional well-being with clarity and confidence.`,
  },
  {
    q: "Mission",
    a: `To provide accessible, non-clinical mental health support and awareness to educators, corporate teams, parents, students, and professionals across India.

To design and deliver workshops on trauma-informed practices, neurodiversity awareness, and mental health first aid for institutions, organisations, and individuals.

To create safe, inclusive, and non-judgmental spaces that prioritise acceptance, confidentiality, and lived experiences.

To promote emotional well-being, stress management, and self-awareness through practical, compassionate, and structured interventions.`,
  },
  {
    q: "1. Empathy & Lived Understanding",
    a: "We centre human experiences, meeting individuals with compassion, sensitivity, and respect.",
  },
  {
    q: "2. Accessibility & Approachability",
    a: "Mental health support should feel safe, relatable, and easy to engage with across diverse spaces.",
  },
  {
    q: "3. Acceptance & Non-Judgment",
    a: "We create environments rooted in acceptance, where individuals can show up authentically.",
  },
  {
    q: "4. Trauma-Informed Practice",
    a: "We recognise the impact of experiences and ensure our work is grounded in safety, awareness, and care.",
  },
  {
    q: "5. Neurodiversity Affirmation",
    a: "We value and respect different ways of thinking, learning, and experiencing the world.",
  },
  {
    q: "6. Confidentiality & Trust",
    a: "We prioritise privacy and build spaces where people feel secure sharing their experiences.",
  },
  {
    q: "7. Growth & Empowerment",
    a: "We enable individuals, families, and organisations to build awareness, resilience, and meaningful change.",
  },
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
            You are safe and accepted here
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
            We believe everyone deserves to feel heard without judgement. Quiet Ember exists for the moments in between — when you need a steady, kind presence and clear next steps.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="warm50">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] w-full max-w-md justify-self-center overflow-hidden rounded-[1.5rem] shadow-lg lg:max-w-none">
            <Image
              src="https://images.unsplash.com/photo-1499208577869-343685ab61fd?w=900&q=85&auto=format&fit=crop"
              alt="Calm, welcoming space"
              fill
              className="object-cover object-center"
              sizes="(max-width:1024px) 90vw, 45vw"
            />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--coral)" }}>
              Why we exist
            </p>
            <h2
              className="mt-2 text-3xl font-normal md:text-4xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              Why Quiet Ember exists
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              Quiet Ember began from a simple observation: many people wait until they are in crisis before they feel “allowed” to seek support. We wanted a different door — one that opens for the quiet struggles too.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              Our work blends evidence-informed approaches with plain language and patience. We are not here to “fix” you; we are here to sit beside you while you find what fits.
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
            Mission, vision &amp; values
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[14px]" style={{ color: "var(--text-muted)" }}>
            Tap a heading to read more — vision and mission first, then our seven core values.
          </p>
          <div className="mt-10 space-y-4">
            <FAQAccordion items={missionVisionValues} defaultOpen={0} />
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
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full px-6 py-3 text-[14px] font-semibold text-white"
            style={{ backgroundColor: "var(--teal-dark)" }}
          >
            Get in touch
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
