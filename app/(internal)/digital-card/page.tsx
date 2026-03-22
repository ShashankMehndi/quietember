import Link from "next/link";
import Image from "next/image";
import { SITE_ADDRESS, SITE_EMAIL, SITE_PHONE, SITE_DOMAIN } from "@/lib/site-content";

export default function DigitalCardPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)" }}>
      {/* Header */}
      <header
        className="border-b px-6 py-8"
        style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
      >
        <div className="mx-auto max-w-3xl">
          <Link href="/internal" className="text-[12px] font-medium hover:underline" style={{ color: "var(--teal)" }}>
            ← Internal hub
          </Link>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--coral)" }}>
            Quiet Ember — Digital Card
          </p>
          <h1
            className="mt-1 text-3xl font-normal"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Digital Business Card
          </h1>
          <p className="mt-2 text-[14px] leading-relaxed max-w-xl" style={{ color: "var(--text-body)" }}>
            A sample digital card in Quiet Ember branding — ready to personalise with real contact details. Two variants: teal-forward and warm white.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10 space-y-12">

        {/* Variant A — Teal gradient card */}
        <section>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
            Variant A — Brand Colour Card
          </p>
          <div
            className="rounded-3xl overflow-hidden shadow-xl max-w-sm mx-auto"
            style={{ background: "linear-gradient(145deg, #5BA8A0 0%, #3D8A82 60%, #2C6E69 100%)" }}
          >
            {/* Card top */}
            <div className="px-7 pt-8 pb-6">
              <Image
                src="/logo.png"
                alt="Quiet Ember"
                width={120}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert opacity-90"
              />
              <div className="mt-6">
                <p className="text-white/60 text-[11px] font-medium uppercase tracking-widest">
                  Licensed Counsellor
                </p>
                <h2
                  className="mt-1 text-[24px] font-normal text-white leading-tight"
                  style={{ fontFamily: "'Baskervville', Georgia, serif" }}
                >
                  Dr. Sarah Mitchell
                </h2>
                <p className="mt-1 text-white/70 text-[13px]">
                  Emotional Well-being &amp; Support
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-7 h-px bg-white/20" />

            {/* Contact details */}
            <div className="px-7 py-6 space-y-3">
              <ContactRow icon="📞" label={SITE_PHONE} />
              <ContactRow icon="✉" label={SITE_EMAIL} />
              <ContactRow icon="🌐" label={SITE_DOMAIN} />
              <ContactRow icon="📍" label={SITE_ADDRESS} />
            </div>

            {/* Divider */}
            <div className="mx-7 h-px bg-white/20" />

            {/* Bottom: tagline + QR placeholder */}
            <div className="px-7 py-6 flex items-end justify-between">
              <div>
                <p className="text-white/50 text-[10px] uppercase tracking-widest">Tagline</p>
                <p
                  className="mt-0.5 text-white text-[13px] italic font-light"
                  style={{ fontFamily: "'Baskervville', Georgia, serif" }}
                >
                  Feel it. Name it. Heal it.
                </p>
                {/* Social */}
                <div className="flex gap-3 mt-3">
                  <span className="text-white/60 text-[11px]">@quietember</span>
                  <span className="text-white/30">·</span>
                  <span className="text-white/60 text-[11px]">in/quietember</span>
                </div>
              </div>
              {/* QR placeholder */}
              <div
                className="h-16 w-16 rounded-xl flex items-center justify-center text-[9px] font-bold text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}
              >
                QR<br/>Code
              </div>
            </div>
          </div>
        </section>

        {/* Variant B — Warm white card */}
        <section>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
            Variant B — Warm White Card
          </p>
          <div
            className="rounded-3xl overflow-hidden shadow-xl max-w-sm mx-auto border"
            style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
          >
            {/* Teal top strip */}
            <div
              className="h-2 w-full"
              style={{ background: "linear-gradient(to right, #5BA8A0, #D4836A)" }}
            />

            {/* Card content */}
            <div className="px-7 pt-6 pb-4">
              <Image
                src="/logo-tagline.png"
                alt="Quiet Ember"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>

            <div className="px-7 pb-5">
              <p
                className="text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: "var(--teal)" }}
              >
                Licensed Counsellor
              </p>
              <h2
                className="mt-1 text-[22px] font-normal leading-tight"
                style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
              >
                Dr. Sarah Mitchell
              </h2>
              <p className="mt-0.5 text-[13px]" style={{ color: "var(--text-muted)" }}>
                Emotional Well-being &amp; Support
              </p>
            </div>

            <div className="mx-7 h-px" style={{ backgroundColor: "var(--border)" }} />

            <div className="px-7 py-5 space-y-2.5">
              <WhiteContactRow icon="📞" label={SITE_PHONE} />
              <WhiteContactRow icon="✉" label={SITE_EMAIL} />
              <WhiteContactRow icon="🌐" label="www.quietember.com" />
              <WhiteContactRow icon="📍" label={SITE_ADDRESS} />
            </div>

            <div className="mx-7 h-px" style={{ backgroundColor: "var(--border)" }} />

            <div className="px-7 py-5 flex items-end justify-between">
              <div>
                <p
                  className="text-[12px] italic font-light"
                  style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-body)" }}
                >
                  &ldquo;Feel it. Name it. Heal it.&rdquo;
                </p>
                <div className="flex gap-3 mt-2">
                  <span className="text-[11px]" style={{ color: "var(--teal)" }}>@quietember</span>
                  <span style={{ color: "var(--border)" }}>·</span>
                  <span className="text-[11px]" style={{ color: "var(--teal)" }}>in/quietember</span>
                </div>
              </div>
              <div
                className="h-14 w-14 rounded-xl flex items-center justify-center text-[9px] font-bold text-center"
                style={{ backgroundColor: "var(--warm-100)", color: "var(--text-muted)" }}
              >
                QR<br/>Code
              </div>
            </div>

            {/* Bottom coral strip */}
            <div
              className="h-1.5 w-full"
              style={{ background: "linear-gradient(to right, #D4836A, #5BA8A0)" }}
            />
          </div>
        </section>

        {/* Customisation note */}
        <section
          className="rounded-2xl border px-6 py-6 max-w-sm mx-auto"
          style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
            Personalise This Card
          </p>
          <ul className="space-y-2">
            {[
              "Replace name and title with real counsellor details",
              "Add real phone number and email address",
              "Replace QR code placeholder with a booking link QR",
              "Add real Instagram / LinkedIn handles",
              "Choose Variant A (teal) or Variant B (white) based on context",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[12px]" style={{ color: "var(--text-body)" }}>
                <span style={{ color: "var(--teal)" }} className="shrink-0 mt-0.5">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <p className="text-center text-[12px] pt-2" style={{ color: "var(--text-muted)" }}>
          Quiet Ember — Digital Card Sample
        </p>
      </main>
    </div>
  );
}

function ContactRow({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[15px]">{icon}</span>
      <span className="text-white/80 text-[13px]">{label}</span>
    </div>
  );
}

function WhiteContactRow({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[14px]">{icon}</span>
      <span className="text-[12px]" style={{ color: "var(--text-body)" }}>{label}</span>
    </div>
  );
}
