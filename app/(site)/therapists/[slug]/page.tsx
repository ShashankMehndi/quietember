import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import { therapists, SITE_NAME, SITE_URL } from "@/lib/site-content";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return therapists.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = therapists.find((th) => th.slug === slug);
  if (!t) return {};
  return {
    title: `${t.name} | ${SITE_NAME}`,
    description: `${t.role} at Quiet Ember. ${t.bio}`,
    openGraph: {
      title: `${t.name} — ${t.role}`,
      description: t.bio,
      images: [{ url: `${SITE_URL}/images/og-therapist.jpg` }],
    },
  };
}

export default async function TherapistDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const therapist = therapists.find((t) => t.slug === slug);
  if (!therapist) notFound();

  const others = therapists.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <>
      <SectionWrapper tone="white" className="!pt-12 md:!pt-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/therapists"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold"
            style={{ color: "var(--teal-dark)" }}
          >
            ← Our therapists
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="warm50" className="!pt-0">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-[1.75rem] shadow-xl lg:sticky lg:top-24">
            <Image
              src={`https://picsum.photos/seed/${therapist.imageSeed}/700/900`}
              alt={therapist.name}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width:1024px) 90vw, 45vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-[11px] font-bold uppercase tracking-widest text-white/80">
                {therapist.role}
              </p>
              <p
                className="mt-1 text-2xl font-normal text-white"
                style={{ fontFamily: "'Baskervville', Georgia, serif" }}
              >
                {therapist.name}
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--coral)" }}>
              Quiet Ember Team
            </p>
            <h1
              className="mt-2 text-3xl font-normal md:text-4xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              {therapist.name}
            </h1>
            <p className="mt-1 text-[13px] font-semibold uppercase tracking-wider" style={{ color: "var(--teal)" }}>
              {therapist.role}
            </p>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              {therapist.longBio.split("\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                Specialties
              </p>
              <ul className="mt-3 space-y-2">
                {therapist.specialties.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-[14px]" style={{ color: "var(--text-body)" }}>
                    <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "var(--teal)" }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                Credentials
              </p>
              <ul className="mt-3 space-y-1.5">
                {therapist.credentials.map((c) => (
                  <li key={c} className="text-[14px]" style={{ color: "var(--text-body)" }}>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={therapist.bookingHref ?? "/contact"}
              className="mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold text-white"
              style={{ backgroundColor: "var(--teal-dark)" }}
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {others.length > 0 && (
        <SectionWrapper tone="white">
          <div className="mx-auto max-w-6xl">
            <h2
              className="text-center text-2xl font-normal md:text-3xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif" }}
            >
              Meet more of our team
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((t) => (
                <Link
                  key={t.slug}
                  href={`/therapists/${t.slug}`}
                  className="group overflow-hidden rounded-[1.5rem] border shadow-sm transition-shadow hover:shadow-md"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-white)" }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${t.imageSeed}/400/520`}
                      alt={t.name}
                      fill
                      className="object-cover object-top transition-transform group-hover:scale-[1.02]"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p
                      className="text-lg font-normal"
                      style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
                    >
                      {t.name}
                    </p>
                    <p className="mt-0.5 text-[12px] font-semibold uppercase tracking-wider" style={{ color: "var(--teal)" }}>
                      {t.role}
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {t.bio}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}
    </>
  );
}
