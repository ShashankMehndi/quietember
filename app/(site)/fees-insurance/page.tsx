import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import { pfaPricing, groupPricing, SITE_EMAIL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Quiet Ember sessions — Psychological First Aid, Neurodiversity Awareness, and Parenting Workshops. Online and in-person options available.",
};

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <SectionWrapper tone="white" className="!pt-12 md:!pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
            Pricing
          </p>
          <h1
            className="mt-3 text-4xl font-normal md:text-5xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Clear, honest pricing
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
            All prices are in Indian Rupees (₹). If you have questions before booking, just reach out — we&apos;re happy to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-full px-6 py-3 text-[14px] font-semibold text-white"
              style={{ backgroundColor: "var(--teal-dark)" }}
            >
              Book a session →
            </Link>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="inline-flex rounded-full border-2 px-6 py-3 text-[14px] font-semibold"
              style={{ borderColor: "var(--teal-dark)", color: "var(--text-dark)" }}
            >
              Email us
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Psychological First Aid Pricing */}
      <SectionWrapper tone="cream">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              1:1 Support · up to 60 mins
            </p>
            <h2
              className="mt-2 text-3xl font-normal md:text-4xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              Psychological First Aid
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Online */}
            <div
              className="rounded-[1.5rem] border p-8"
              style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
            >
              <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
                Online
              </p>
              <p className="mt-1 text-[13px]" style={{ color: "var(--text-muted)" }}>
                Via Google Meet or Microsoft Teams
              </p>
              <div className="mt-6 space-y-4">
                {pfaPricing.online.map((tier) => (
                  <div key={tier.label} className="flex items-center justify-between border-b pb-4" style={{ borderColor: "var(--border)" }}>
                    <span className="text-[14px]" style={{ color: "var(--text-body)" }}>
                      {tier.label}
                    </span>
                    <span className="text-[18px] font-semibold" style={{ color: "var(--text-dark)" }}>
                      {tier.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Offline */}
            <div
              className="rounded-[1.5rem] border p-8"
              style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
            >
              <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--coral)" }}>
                In Person
              </p>
              <p className="mt-1 text-[13px]" style={{ color: "var(--text-muted)" }}>
                Hyderabad, Telangana
              </p>
              <div className="mt-6 space-y-4">
                {pfaPricing.offline.map((tier) => (
                  <div key={tier.label} className="flex items-center justify-between border-b pb-4" style={{ borderColor: "var(--border)" }}>
                    <span className="text-[14px]" style={{ color: "var(--text-body)" }}>
                      {tier.label}
                    </span>
                    <span className="text-[18px] font-semibold" style={{ color: "var(--text-dark)" }}>
                      {tier.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-[12px]" style={{ color: "var(--text-muted)" }}>
            A 24-hour cancellation notice is required for a refund. Cancellations within 24 hours are non-refundable.
          </p>
        </div>
      </SectionWrapper>

      {/* Group Programme Pricing */}
      <SectionWrapper tone="mint">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Group programmes · 2 hours
            </p>
            <h2
              className="mt-2 text-3xl font-normal md:text-4xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              Awareness &amp; Workshops
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {groupPricing.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border p-7"
                style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
              >
                <h3
                  className="text-[17px] font-normal"
                  style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-1 text-[12px]" style={{ color: "var(--text-muted)" }}>
                  {item.duration}
                </p>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px]" style={{ color: "var(--text-body)" }}>
                      Online
                    </span>
                    <span className="text-[15px] font-semibold" style={{ color: "var(--text-dark)" }}>
                      {item.online}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px]" style={{ color: "var(--text-body)" }}>
                      In Person
                    </span>
                    <span className="text-[15px] font-semibold" style={{ color: "var(--text-dark)" }}>
                      {item.offline}
                    </span>
                  </div>
                </div>
                {item.offlineNote && (
                  <p className="mt-4 text-[11px] italic" style={{ color: "var(--text-muted)" }}>
                    In-person includes: {item.offlineNote}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[13px]" style={{ color: "var(--text-body)" }}>
            Want to discuss a customised programme for your organisation?{" "}
            <Link href="/contact" className="underline" style={{ color: "var(--teal-dark)" }}>
              Get in touch
            </Link>
            .
          </p>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper tone="white">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-normal"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Not sure which session is right for you?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
            Reach out and we&apos;ll help you figure out the best fit — no pressure, no jargon.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full px-8 py-3.5 text-[14px] font-semibold text-white"
            style={{ backgroundColor: "var(--teal-dark)" }}
          >
            Contact us →
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
