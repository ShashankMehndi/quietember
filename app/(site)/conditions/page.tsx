import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import { conditionsList, faqItems, SITE_PHONE, SITE_PHONE_TEL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Conditions We Support",
  description:
    "Anxiety, depression, trauma, grief, eating disorders, relationship issues, and more. Quiet Ember supports a wide range of mental health needs.",
};

export default function ConditionsPage() {
  return (
    <>
      <HeroSection
        eyebrow="What we support"
        title="Conditions we walk beside"
        titleItalic="with care"
        description="Life shows up in many ways. Below are some of the themes people bring — this list is not exhaustive. If you are unsure, reach out anyway."
        ctas={[
          { href: "/contact", label: "Book a consultation" },
          { href: SITE_PHONE_TEL, label: SITE_PHONE, variant: "outline" },
        ]}
      />

      <SectionWrapper tone="mint">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--teal-dark)" }}>
              How we work
            </p>
            <h2
              className="mt-3 text-3xl font-normal md:text-4xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              Support for lasting <em className="italic">steadiness</em>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              We combine evidence-informed approaches with warmth and patience. Sessions are collaborative — you are the expert on your life; we bring skills, listening, and gentle structure.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              Whether you are managing anxiety, low mood, trauma echoes, or relationship strain — we focus on what feels workable for you, week by week.
            </p>
            <Link href="/contact" className="mt-6 inline-flex rounded-full px-5 py-2.5 text-[13px] font-semibold text-white" style={{ backgroundColor: "var(--teal-dark)" }}>
              Book a consultation →
            </Link>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] shadow-lg">
            <Image src="https://picsum.photos/seed/qeconditions/800/1000" alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 45vw" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="sage">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            We provide support across many themes
          </p>
          <h2
            className="mt-3 text-3xl font-normal md:text-4xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Conditions &amp; concerns
          </h2>
          <div className="mx-auto mt-10 max-w-4xl columns-1 gap-3 text-left sm:columns-2 lg:columns-3">
            {conditionsList.map((c) => (
              <div
                key={c}
                className="mb-3 break-inside-avoid rounded-xl border px-4 py-3 text-[14px]"
                style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)", color: "var(--text-body)" }}
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-sm align-middle" style={{ backgroundColor: "var(--teal-dark)" }} />
                {c}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTABanner
        variant="image"
        backgroundImage="https://picsum.photos/seed/qecondcta/1920/700"
        title="Feeling better can be closer than you think"
        primaryHref="/contact"
        primaryLabel="Book a consultation"
      />

      <SectionWrapper tone="white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-normal" style={{ fontFamily: "'Baskervville', Georgia, serif" }}>
              Frequently asked questions
            </h2>
            <p className="mt-3 text-[14px]" style={{ color: "var(--text-muted)" }}>
              Straight answers — in human language.
            </p>
            <Link href="/faq" className="mt-6 inline-flex rounded-full px-5 py-2.5 text-[13px] font-semibold text-white" style={{ backgroundColor: "var(--teal-dark)" }}>
              Read all FAQs →
            </Link>
          </div>
          <FAQAccordion items={faqItems.slice(0, 6)} defaultOpen={0} />
        </div>
      </SectionWrapper>
    </>
  );
}
