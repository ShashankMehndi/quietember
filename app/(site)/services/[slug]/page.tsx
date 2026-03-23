import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import FAQAccordion from "@/components/FAQAccordion";
import BlogPostCard from "@/components/BlogPostCard";
import { serviceSlugs, servicesBySlug, blogPosts, faqItems, type ServiceSlug } from "@/lib/site-content";
import { CheckCircle2 } from "lucide-react";

const serviceImages: Record<ServiceSlug, { hero: string; secondary: string }> = {
  "mental-health-first-aid": {
    hero: "https://picsum.photos/seed/qe-mhfa-hero/900/900",
    secondary: "https://picsum.photos/seed/qe-mhfa-sec/900/700",
  },
  "neurodiversity-awareness": {
    hero: "https://picsum.photos/seed/qe-neuro-hero/900/900",
    secondary: "https://picsum.photos/seed/qe-neuro-sec/900/700",
  },
  "parenting-workshops": {
    hero: "https://picsum.photos/seed/qe-parent-hero/900/900",
    secondary: "https://picsum.photos/seed/qe-parent-sec/900/700",
  },
  "trauma-informed-practice-training": {
    hero: "https://picsum.photos/seed/qe-tipt-hero/900/900",
    secondary: "https://picsum.photos/seed/qe-tipt-sec/900/700",
  },
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!serviceSlugs.includes(slug as ServiceSlug)) notFound();
  const s = servicesBySlug[slug as ServiceSlug];
  const imgs = serviceImages[slug as ServiceSlug];

  const benefits = [
    { title: "Pace that fits you", body: "No rushing — we move at the speed your nervous system can trust." },
    { title: "Plain language", body: "We explain what we offer clearly so you always know what to expect." },
    { title: "Whole-person view", body: "We pay attention to relationships, context, and the story behind how you feel." },
    { title: "Flexible formats", body: "In-person or online, depending on what helps you feel safest and most consistent." },
  ];

  return (
    <>
      <SectionWrapper tone="white" className="!pt-12 md:!pt-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--coral)" }}>
              Quiet Ember
            </p>
            <h1
              className="mt-3 text-4xl font-normal md:text-5xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              {s.title}
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              {s.heroSub}
            </p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full px-6 py-3 text-[14px] font-semibold text-white" style={{ backgroundColor: "var(--teal-dark)" }}>
              Get in touch →
            </Link>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <Image src={imgs.hero} alt="" fill className="rounded-[2rem] object-cover shadow-lg" sizes="(max-width:1024px) 90vw, 45vw" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="warm50">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-normal md:text-3xl" style={{ fontFamily: "'Baskervville', Georgia, serif" }}>
              What this can help with
            </h2>
            <ul className="mt-6 space-y-3">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px]" style={{ color: "var(--text-body)" }}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "var(--teal)" }} />
                  {b}
                </li>
              ))}
            </ul>
            <Link href="/services" className="mt-8 inline-block text-[14px] font-semibold" style={{ color: "var(--teal-dark)" }}>
              ← All services
            </Link>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem]">
            <Image src={imgs.secondary} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 45vw" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="mint">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-normal" style={{ fontFamily: "'Baskervville', Georgia, serif" }}>
            What you might gain
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-[1.25rem] border p-5" style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}>
                <h3 className="text-lg font-normal" style={{ fontFamily: "'Baskervville', Georgia, serif" }}>
                  {b.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-normal" style={{ fontFamily: "'Baskervville', Georgia, serif" }}>
              Common questions
            </h2>
            <p className="mt-2 text-[14px]" style={{ color: "var(--text-muted)" }}>
              A few answers — see our full FAQ anytime.
            </p>
          </div>
          <FAQAccordion items={faqItems.slice(0, 5)} defaultOpen={null} />
        </div>
      </SectionWrapper>

      <SectionWrapper tone="cream">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-normal md:text-3xl" style={{ fontFamily: "'Baskervville', Georgia, serif" }}>
            From the blog
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {blogPosts.map((p) => (
              <BlogPostCard key={p.slug} href={`/blog/${p.slug}`} {...p} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
