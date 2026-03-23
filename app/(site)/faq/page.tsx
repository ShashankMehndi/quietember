import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import FAQAccordion from "@/components/FAQAccordion";
import { faqSections } from "@/lib/site-content";
import { PillButtonLink } from "@/components/PillButton";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "What Quiet Ember offers, how pricing works, online and in-person sessions in Hyderabad, and how we differ from clinical mental health services.",
};

export default function FAQPage() {
  return (
    <>
      <SectionWrapper tone="cream" className="!pt-12 md:!pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="text-5xl font-normal md:text-6xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            FAQ
          </h1>
          <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "var(--text-muted)" }}>
            Frequently asked questions
          </p>
          <div className="mx-auto mt-8 flex flex-wrap justify-center gap-2">
            {faqSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 rounded-full border bg-[var(--warm-white)] px-4 py-2 text-[13px] font-medium shadow-sm transition-colors hover:border-[var(--teal)]"
                style={{ borderColor: "var(--border)", color: "var(--text-body)" }}
              >
                <span className={`h-2 w-2 rounded-full ${s.dotClass}`} aria-hidden />
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="warm50" className="!pt-8">
        <div className="mx-auto max-w-6xl space-y-20 md:space-y-24">
          {faqSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
                <div>
                  <h2
                    className="text-3xl font-normal md:text-4xl"
                    style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
                  >
                    {section.title}
                  </h2>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>
                    {section.subtitle}
                  </p>
                </div>
                <div className="rounded-[1.25rem] border bg-[var(--warm-white)] px-4 md:px-8" style={{ borderColor: "var(--border)" }}>
                  <FAQAccordion items={section.items} defaultOpen={null} numbered />
                </div>
              </div>
            </section>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[15px]" style={{ color: "var(--text-body)" }}>
            Still have a question?
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <PillButtonLink href="/contact">Ask us directly</PillButtonLink>
            <PillButtonLink href="/pricing">View pricing</PillButtonLink>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
