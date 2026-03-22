import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";
import { SITE_EMAIL, SITE_PHONE, SITE_PHONE_TEL, SITE_ADDRESS } from "@/lib/site-content";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Quiet Ember — psychological first aid, workshops, and wellbeing support. Email, phone, or message us; we respond as soon as we can.",
};

const steps = [
  "We read your message with care — usually the same day.",
  "We reply within 24 hours with a time for a short, free call.",
  "You choose whether Quiet Ember feels like the right next step — no pressure.",
];

export default function ContactPage() {
  return (
    <>
      <SectionWrapper tone="white" className="!pt-12 md:!pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="text-4xl font-normal md:text-5xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Your first step does not have to be a big one
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
            We are glad you are here. Say hello in whatever way feels easiest — reaching out is brave, not weak.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="warm50">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
          <div className="relative min-h-[400px] overflow-hidden rounded-[1.5rem] shadow-lg">
            <Image src="https://picsum.photos/seed/qecontact/900/1000" alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 45vw" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/90 px-4 py-2 text-[12px] font-semibold backdrop-blur" style={{ color: "var(--teal-dark)" }}>
                Live chat — coming soon
              </span>
              <a href={`mailto:${SITE_EMAIL}`} className="rounded-full bg-white/90 px-4 py-2 text-[12px] font-semibold backdrop-blur" style={{ color: "var(--teal-dark)" }}>
                Email us
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-normal md:text-3xl" style={{ fontFamily: "'Baskervville', Georgia, serif" }}>
              Ready to take the first step?
            </h2>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-normal" style={{ fontFamily: "'Baskervville', Georgia, serif" }}>
            What happens next
          </h2>
          <ol className="mx-auto mt-8 grid max-w-3xl gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={i}
                className="rounded-[1.25rem] border p-5 text-center"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-50)" }}
              >
                <span className="text-[11px] font-bold text-[var(--teal)]">Step {i + 1}</span>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--text-body)" }}>
                  {s}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="cream">
        <div className="mx-auto grid max-w-3xl gap-6 rounded-[1.5rem] border p-8" style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-normal" style={{ fontFamily: "'Baskervville', Georgia, serif" }}>
            Other ways to reach us
          </h2>
          <ul className="space-y-4 text-[15px]" style={{ color: "var(--text-body)" }}>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0" style={{ color: "var(--teal)" }} />
              <a href={SITE_PHONE_TEL} className="hover:underline">
                {SITE_PHONE}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0" style={{ color: "var(--teal)" }} />
              <a href={`mailto:${SITE_EMAIL}`} className="hover:underline">
                {SITE_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0" style={{ color: "var(--teal)" }} />
              {SITE_ADDRESS}
            </li>
          </ul>
          <p className="text-[14px]" style={{ color: "var(--text-muted)" }}>
            Common questions?{" "}
            <Link href="/faq" className="font-semibold underline" style={{ color: "var(--teal-dark)" }}>
              Read the FAQ
            </Link>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
