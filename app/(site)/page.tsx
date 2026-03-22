import Link from "next/link";
import Image from "next/image";
import { User, Home, HeartHandshake, Sparkles, ClipboardList } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import BlogPostCard from "@/components/BlogPostCard";
import { PillButtonLink } from "@/components/PillButton";
import ContactForm from "@/components/ContactForm";
import HomeMissionAccordion from "@/components/HomeMissionAccordion";
import ScrollHero from "@/components/ScrollHero";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import {
  faqItems,
  blogPosts,
  focusAreasHome,
  homeServiceCards,
  homeTestimonials,
  whatToExpectSteps,
  SITE_PHONE,
  SITE_PHONE_TEL,
  SITE_EMAIL,
} from "@/lib/site-content";
import { Shield, Award, Heart, Headphones, Lock } from "lucide-react";

function serviceIconForHref(href: string) {
  if (href.includes("psychological-first-aid")) return HeartHandshake;
  if (href.includes("neurodiversity-awareness")) return Sparkles;
  if (href.includes("parenting-workshops")) return Home;
  return ClipboardList;
}

const benefits = [
  { title: "Get", em: "unstuck", body: "Break free from negative patterns and find clarity in your direction." },
  { title: "Connect", em: "deeply", body: "Deepen connections and navigate conflict with compassion." },
  { title: "Gain", em: "confidence", body: "Build self-assurance and trust in your own judgment." },
  { title: "Find", em: "peace", body: "Cultivate inner calm and resilience amidst life\u2019s challenges." },
];

const trustPills = [
  { icon: Shield, label: "Confidential" },
  { icon: Award, label: "Skilled care" },
  { icon: Heart, label: "Supportive" },
  { icon: Headphones, label: "We listen first" },
  { icon: Lock, label: "Private & secure" },
];

export default function HomePage() {
  return (
    <>
      <ScrollHero />

      {/* Long-term benefits */}
      <SectionWrapper tone="cream" id="hero-benefits">
        <div className="mx-auto max-w-[1280px]">
          <h2
            className="text-3xl font-normal md:text-4xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Long term <em>benefits</em>
          </h2>
          <h3
            className="mt-2 max-w-xl text-lg font-normal md:text-xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-body)" }}
          >
            Small steps in wellbeing add up — support can help you feel steadier and clearer.
          </h3>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-[1.25rem] border p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
              >
                <div className="mb-3 h-1.5 w-8 rounded-full" style={{ backgroundColor: "var(--accent-green)" }} />
                <h4
                  className="text-lg font-normal"
                  style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
                >
                  {b.title} <em>{b.em}</em>
                </h4>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--text-body)" }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper tone="warm50">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <h2
              className="text-3xl font-normal md:text-4xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              How we can <em>support</em> you
            </h2>
            <h3
              className="mx-auto mt-2 max-w-lg text-lg font-normal md:text-xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-body)" }}
            >
              Comprehensive care tailored to your unique needs.
            </h3>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeServiceCards.map((card) => (
              <ServiceCard
                key={card.href}
                href={card.href}
                title={card.title}
                description={card.description}
                icon={serviceIconForHref(card.href)}
                templateIllustration={card.templateIllustration}
                imageSrc={card.imageSrc}
                bullets={card.bullets}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Who we work with */}
      <SectionWrapper tone="mint">
        <div className="mx-auto max-w-[1280px] text-center">
          <h4
            className="text-xl font-normal md:text-2xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            We work with <em>individuals, teams, and families</em>
          </h4>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {["Universities", "Corporates", "Parents", "Individuals", "NGOs", "Community Groups"].map((p) => (
              <div
                key={p}
                className="rounded-xl border px-6 py-3 text-[12px] font-semibold uppercase tracking-wider"
                style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)", color: "var(--text-muted)" }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Areas of focus */}
      <SectionWrapper tone="purple">
        <div className="mx-auto max-w-[1280px]">
          <h2
            className="text-3xl font-normal md:text-4xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Areas of <em>focus</em>
          </h2>
          <h3
            className="mt-2 max-w-lg text-lg font-normal md:text-xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-body)" }}
          >
            Specialized support for specific challenges.
          </h3>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreasHome.map((label) => (
              <Link
                key={label}
                href="/services"
                className="group flex items-center gap-3 rounded-xl border px-5 py-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
              >
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: "var(--accent-green)" }} />
                <span className="text-[15px] font-medium transition-colors group-hover:text-[var(--purple)]" style={{ color: "var(--text-dark)" }}>
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* About / Mission */}
      <SectionWrapper tone="cream">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-full shadow-xl md:h-72 md:w-72">
              <Image src="/images/pexels-karola-g-6633769.webp" alt="Quiet Ember practitioner" fill className="object-cover object-top" sizes="288px" />
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--accent-green)" }}>
              Welcome to Quiet Ember
            </p>
            <h2
              className="mt-3 text-3xl font-normal leading-tight md:text-4xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              Welcome to Quiet Ember, where balance <em>isn&apos;t</em> about perfection, <em>it&apos;s</em> about being human.
            </h2>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--coral)" }}>
              Meet our founder — Diana Fletcher
            </p>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              We are not here to replace clinical care — we offer human, structured support so you can find your footing and walk forward with more clarity.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              Whether you need a single psychological first aid session, a team workshop, or a parenting circle — we meet you where you are, without a one-size-fits-all script.
            </p>
            <div className="mt-8 rounded-[1.25rem] border px-4 py-2 md:px-6" style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}>
              <HomeMissionAccordion />
            </div>
            <Link href="/about" className="mt-6 inline-block text-[14px] font-semibold underline decoration-[var(--purple)] underline-offset-4" style={{ color: "var(--purple)" }}>
              Read our full story
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Trust pills */}
      <SectionWrapper tone="warm50">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustPills.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-2xl border"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-white)", color: "var(--purple)" }}
              >
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="max-w-[100px] text-[12px] font-medium leading-tight" style={{ color: "var(--text-body)" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper tone="sage" id="testimonials">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Hear from our clients
            </p>
            <h2
              className="mt-3 text-3xl font-normal md:text-4xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              Stories of transformation
            </h2>
          </div>
          <TestimonialCarousel items={homeTestimonials} />
        </div>
      </SectionWrapper>

      <CTABanner
        title="Ready to take the first step?"
        subtitle="Change begins with a single conversation. You don't need to have all the answers right now."
        primaryHref="/contact"
        primaryLabel="Get in touch"
        phone={SITE_PHONE}
        phoneHref={SITE_PHONE_TEL}
      />

      {/* Contact form */}
      <SectionWrapper tone="white">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-start">
          <div className="relative min-h-[380px] overflow-hidden rounded-[1.5rem] shadow-lg">
            <Image src="/images/pexels-polina-tankilevitch-5234575.webp" alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 45vw" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-6">
              <div className="flex flex-wrap gap-2">
                <a
                  href={SITE_PHONE_TEL}
                  className="rounded-full bg-white/95 px-4 py-2 text-[12px] font-semibold backdrop-blur"
                  style={{ color: "var(--purple)" }}
                >
                  Call us now
                </a>
                <Link
                  href="/contact"
                  className="rounded-full border-2 border-white bg-white/10 px-4 py-2 text-[12px] font-semibold text-white backdrop-blur"
                >
                  Send message
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h2
              className="text-3xl font-normal md:text-4xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              Ready to take the first step?
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              Change begins with a single conversation. You don&apos;t need to have all the answers right now.
            </p>
            <div className="mt-6 flex flex-wrap gap-6 text-[15px]">
              <a href={SITE_PHONE_TEL} className="font-semibold hover:underline" style={{ color: "var(--purple)" }}>
                {SITE_PHONE}
              </a>
              <a href={`mailto:${SITE_EMAIL}`} className="font-semibold hover:underline" style={{ color: "var(--purple)" }}>
                {SITE_EMAIL}
              </a>
            </div>
            <h3
              className="mt-8 text-xl font-normal"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              Get in touch
            </h3>
            <div className="mt-4">
              <ContactForm variant="bookSession" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* What to expect */}
      <SectionWrapper tone="cream">
        <div className="mx-auto max-w-[1280px]">
          <h2
            className="text-center text-3xl font-normal md:text-4xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            What to <em>expect</em>?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whatToExpectSteps.map((s) => (
              <div
                key={s.step}
                className="rounded-[1.25rem] border p-6 text-center shadow-sm"
                style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
              >
                <span
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold text-[var(--cream)]"
                  style={{ backgroundColor: "var(--purple)" }}
                >
                  {s.step}
                </span>
                <h3 className="mt-4 text-lg font-normal" style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--text-body)" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper tone="warm50">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--purple)" }}>
              Frequently asked questions
            </p>
            <h2
              className="mt-3 text-3xl font-normal md:text-4xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              Read our FAQs — tap a question to expand, or visit the full FAQ page.
            </p>
            <div className="mt-6">
              <PillButtonLink href="/faq">Read all FAQs</PillButtonLink>
            </div>
          </div>
          <FAQAccordion items={faqItems.slice(0, 5)} defaultOpen={0} />
        </div>
      </SectionWrapper>

      {/* Blog */}
      <SectionWrapper tone="white">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--coral)" }}>
                From the journal
              </p>
              <h2
                className="mt-2 text-3xl font-normal md:text-4xl"
                style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
              >
                Read our recent blog posts
              </h2>
            </div>
            <Link href="/blog" className="text-[14px] font-semibold" style={{ color: "var(--purple)" }}>
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.map((p) => (
              <BlogPostCard key={p.slug} href={`/blog/${p.slug}`} {...p} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Newsletter */}
      <SectionWrapper tone="cream">
        <div
          className="mx-auto max-w-2xl rounded-[1.5rem] border px-6 py-10 text-center shadow-sm md:px-10"
          style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
        >
          <Sparkles className="mx-auto h-8 w-8" style={{ color: "var(--coral)" }} />
          <h2
            className="mt-4 text-2xl font-normal md:text-3xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Gentle insights, monthly
          </h2>
          <p className="mt-2 text-[14px]" style={{ color: "var(--text-muted)" }}>
            No noise — just warmth in your inbox.
          </p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row" action="/contact">
            <input
              type="email"
              name="newsletter"
              placeholder="Your email"
              className="flex-1 rounded-full border px-4 py-3 text-[14px] outline-none focus:ring-2 focus:ring-[var(--purple)]"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-50)", color: "var(--text-dark)" }}
            />
            <button
              type="submit"
              className="rounded-full px-6 py-3 text-[14px] font-semibold text-[var(--cream)]"
              style={{ backgroundColor: "var(--purple)" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </SectionWrapper>
    </>
  );
}
