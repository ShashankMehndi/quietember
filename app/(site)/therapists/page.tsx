import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import TherapistCard from "@/components/TherapistCard";
import CTABanner from "@/components/CTABanner";
import { therapists, SITE_PHONE, SITE_PHONE_TEL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the people behind Quiet Ember — psychological first aid, neurodiversity awareness, and parenting support in Hyderabad and online.",
};

export default function TherapistsPage() {
  const founder = therapists[0];
  const team = therapists.slice(1);
  return (
    <>
      <SectionWrapper tone="white" className="!pt-12 md:!pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
            Meet the team
          </p>
          <h1
            className="mt-3 text-4xl font-normal md:text-5xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Our team
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
            Warm, skilled practitioners offering non-clinical mental health support — without judgement or hurry.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="warm50">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--coral)" }}>
              Meet our founder
            </p>
            <h2
              className="mt-2 text-3xl font-normal md:text-4xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              {founder.name}
            </h2>
            <p className="mt-1 text-[12px] font-semibold uppercase tracking-wider" style={{ color: "var(--teal)" }}>
              {founder.role}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              {founder.bio} With years of practice in emotional wellness, they shaped Quiet Ember around one promise: you should never have to perform “together” to deserve support.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              Whether you are navigating anxiety, grief, relationships, or the nameless weight of the everyday — you will find a steady, kind presence here.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white" style={{ backgroundColor: "var(--teal-dark)" }}>
              Learn more →
            </Link>
          </div>
          <div className="relative aspect-[3/4] w-full max-w-md justify-self-center overflow-hidden rounded-[1.5rem] shadow-xl lg:max-w-none">
            <Image
              src={`https://picsum.photos/seed/${founder.imageSeed}/700/900`}
              alt={founder.name}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 90vw, 45vw"
            />
          </div>
        </div>
      </SectionWrapper>

      {team.length > 0 && (
        <SectionWrapper tone="white">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--teal-dark)" }}>
              Practitioners
            </p>
            <h2
              className="mt-3 text-3xl font-normal md:text-4xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              More of our <em className="italic">team</em>
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((t) => (
                <TherapistCard key={t.slug} name={t.name} role={t.role} bio={t.bio} imageSeed={t.imageSeed} href={`/therapists/${t.slug}`} />
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      <CTABanner
        variant="image"
        backgroundImage="https://picsum.photos/seed/qecta/1920/600"
        title="Questions? We are here to help"
        primaryHref="/contact"
        primaryLabel="Get in touch"
        phone={SITE_PHONE}
        phoneHref={SITE_PHONE_TEL}
      />
    </>
  );
}
