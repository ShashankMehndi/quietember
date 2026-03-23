import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, Users, Sparkles, BookOpen, type LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import { servicesBySlug, serviceSlugs, type ServiceSlug } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mental Health First Aid, Trauma-Informed Practice Training, Neurodiversity Awareness, and Parenting Workshops — non-clinical wellbeing support from Quiet Ember, based in Hyderabad, India.",
};

const icons: Record<ServiceSlug, LucideIcon> = {
  "mental-health-first-aid": HeartHandshake,
  "neurodiversity-awareness": Users,
  "parenting-workshops": Sparkles,
  "trauma-informed-practice-training": BookOpen,
};

export default function ServicesPage() {
  return (
    <>
      <SectionWrapper tone="white" className="!pt-12 md:!pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
            Services
          </p>
          <h1
            className="mt-3 text-4xl font-normal md:text-5xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Wellbeing support, built around <em>you</em>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
            Not sure where to start? Reach out — we&apos;ll talk about what you need and point you to the right fit.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="warm50">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {serviceSlugs.map((slug) => {
            const s = servicesBySlug[slug];
            const Icon = icons[slug];
            return <ServiceCard key={slug} href={`/services/${slug}`} title={s.title} description={s.short} icon={Icon} />;
          })}
        </div>
        <p className="mx-auto mt-12 max-w-xl text-center text-[14px]" style={{ color: "var(--text-muted)" }}>
          Not sure which service?{" "}
          <Link href="/contact" className="font-semibold underline" style={{ color: "var(--teal-dark)" }}>
            Get in touch
          </Link>{" "}
          and we will figure it out together.
        </p>
      </SectionWrapper>
    </>
  );
}
