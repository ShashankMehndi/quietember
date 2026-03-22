import path from "path";
import fs from "fs";
import Link from "next/link";

export const dynamic = "force-dynamic";

type ColourSwatch = { name: string; hex: string; usage: string };
type Gradient = { name: string; css: string; usage: string };

type BrandData = {
  brandName: string;
  tagline: string;
  brandEssence?: string;
  brandSpine?: string;
  brandMantra?: string;
  brandPurpose?: string;
  brandBeliefs?: string[];
  brandRole?: string;
  brandPersonality?: { attributes: string[]; isNot: string[] };
  languageGuardrails?: { use: string[]; avoid: string[] };
  visualDirection?: string[];
  brandGovernance?: string[];
  contact?: { phone?: string; email?: string; linkedin?: string; twitter?: string; website?: string; instagram?: string };
  colours: {
    primary: ColourSwatch[];
    brand: ColourSwatch[];
    accent: ColourSwatch[];
    neutral: ColourSwatch[];
  };
  typography: {
    heading: { family: string; weight: string; usage: string };
    body: { family: string; weight: string; usage: string };
  };
  gradients: Gradient[];
  toneOfVoice: string[];
  logoFile?: string;
};

async function getBrandContent(): Promise<BrandData> {
  const jsonPath = path.join(process.cwd(), "brand-guidelines", "content", "content.json");
  const raw = await fs.promises.readFile(jsonPath, "utf-8");
  return JSON.parse(raw) as BrandData;
}

function isDark(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 128;
}

function SwatchGroup({ title, swatches }: { title: string; swatches: ColourSwatch[] }) {
  if (!swatches?.length) return null;
  return (
    <div>
      <p className="mb-3 text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
        {title}
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {swatches.map((s) => (
          <div
            key={s.name}
            className="overflow-hidden rounded-[10px] border"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex h-16 items-end px-3 pb-2" style={{ backgroundColor: s.hex }}>
              <span className={`text-[11px] font-bold ${isDark(s.hex) ? "text-white" : "text-[#2C3E35]"}`}>
                {s.hex}
              </span>
            </div>
            <div className="px-3 py-2.5" style={{ backgroundColor: "var(--warm-white)" }}>
              <p className="text-[13px] font-semibold" style={{ color: "var(--text-dark)" }}>{s.name}</p>
              <p className="mt-0.5 text-[11px]" style={{ color: "var(--text-muted)" }}>{s.usage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="mt-6 rounded-2xl border p-6 shadow-sm"
      style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
    >
      <h2
        className="mb-5 text-[18px] font-normal"
        style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

export default async function BrandGuidelinesPage() {
  const data = await getBrandContent();

  return (
    <div className="min-h-screen px-4 py-10" style={{ backgroundColor: "var(--cream)" }}>
      <div className="mx-auto mb-6 max-w-4xl">
        <Link href="/internal" className="text-[13px] font-medium hover:underline" style={{ color: "var(--teal)" }}>
          ← Internal hub
        </Link>
      </div>
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div
          className="rounded-2xl border p-6 shadow-sm"
          style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--coral)" }}>
            Brand Guidelines
          </p>
          <h1
            className="mt-1 text-3xl font-normal"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            {data.brandName}
          </h1>
          <p className="mt-1 text-[15px]" style={{ color: "var(--text-muted)" }}>{data.tagline}</p>
          {data.brandEssence && (
            <p
              className="mt-4 border-l-4 pl-4 text-[16px] font-normal italic"
              style={{ borderLeftColor: "var(--teal)", color: "var(--text-body)", fontFamily: "'Baskervville', Georgia, serif" }}
            >
              {data.brandEssence}
            </p>
          )}
        </div>

        {/* Brand Spine */}
        {data.brandSpine && (
          <div
            className="mt-6 rounded-2xl p-6 text-center shadow-sm"
            style={{ background: "linear-gradient(135deg, #5BA8A0 0%, #3D8A82 60%, #2C6E69 100%)" }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">Brand Spine</p>
            <p
              className="mt-3 text-[17px] font-normal leading-8 text-white"
              style={{ fontFamily: "'Baskervville', Georgia, serif" }}
            >
              {data.brandSpine}
            </p>
          </div>
        )}

        {/* Brand Purpose */}
        {data.brandPurpose && (
          <Section title="Brand Purpose">
            <p className="text-[15px] leading-7" style={{ color: "var(--text-body)" }}>{data.brandPurpose}</p>
          </Section>
        )}

        {/* Belief System */}
        {data.brandBeliefs && (
          <Section title="What We Believe">
            <div className="space-y-2">
              {data.brandBeliefs.map((belief, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg px-4 py-3"
                  style={{ backgroundColor: "var(--warm-50)" }}
                >
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--teal)" }}
                  />
                  <p className="text-[14px] font-medium" style={{ color: "var(--text-body)" }}>{belief}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Brand Role */}
        {data.brandRole && (
          <Section title="Brand Role">
            <p className="text-[15px] leading-7" style={{ color: "var(--text-body)" }}>{data.brandRole}</p>
          </Section>
        )}

        {/* Personality */}
        {data.brandPersonality && (
          <Section title="Brand Personality">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                  The brand is
                </p>
                <div className="space-y-1.5">
                  {data.brandPersonality.attributes.map((a, i) => (
                    <div
                      key={i}
                      className="rounded-lg px-4 py-2 text-[14px] font-medium"
                      style={{ backgroundColor: "#EEF7F6", color: "var(--teal-dark, #3D8A82)" }}
                    >
                      {a}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                  The brand is not
                </p>
                <div className="space-y-1.5">
                  {data.brandPersonality.isNot.map((n, i) => (
                    <div
                      key={i}
                      className="rounded-lg px-4 py-2 text-[14px] font-medium"
                      style={{ backgroundColor: "#FDF0EC", color: "var(--coral-dark, #B8664F)" }}
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        )}

        {/* Colour Palette */}
        <Section title="Colour Palette">
          <div className="space-y-8">
            <SwatchGroup title="Primary" swatches={data.colours.primary} />
            <SwatchGroup title="Brand" swatches={data.colours.brand} />
            <SwatchGroup title="Accent" swatches={data.colours.accent} />
            <SwatchGroup title="Neutral" swatches={data.colours.neutral} />
          </div>
        </Section>

        {/* Gradients */}
        {data.gradients?.length > 0 && (
          <Section title="Gradients">
            <div className="grid gap-4 sm:grid-cols-2">
              {data.gradients.map((g) => (
                <div
                  key={g.name}
                  className="overflow-hidden rounded-[10px] border"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="h-14" style={{ background: g.css }} />
                  <div className="px-3 py-2.5" style={{ backgroundColor: "var(--warm-white)" }}>
                    <p className="text-[13px] font-semibold" style={{ color: "var(--text-dark)" }}>{g.name}</p>
                    <p className="mt-0.5 text-[11px]" style={{ color: "var(--text-muted)" }}>{g.usage}</p>
                    <code className="mt-1 block text-[10px]" style={{ color: "var(--text-muted)" }}>{g.css}</code>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Typography */}
        <Section title="Typography">
          <div className="grid gap-5 sm:grid-cols-2">
            <div
              className="rounded-[10px] border p-5"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-50)" }}
            >
              <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                Headings
              </p>
              <p
                className="mt-3 text-[24px] font-normal"
                style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
              >
                {data.typography.heading.family}
              </p>
              <p className="mt-1 text-[13px]" style={{ color: "var(--text-muted)" }}>
                Weight: {data.typography.heading.weight}
              </p>
              <p className="mt-1 text-[12px]" style={{ color: "var(--text-muted)" }}>
                {data.typography.heading.usage}
              </p>
            </div>
            <div
              className="rounded-[10px] border p-5"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-50)" }}
            >
              <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                Body
              </p>
              <p className="mt-3 text-[24px] font-semibold" style={{ color: "var(--text-dark)" }}>
                {data.typography.body.family}
              </p>
              <p className="mt-1 text-[13px]" style={{ color: "var(--text-muted)" }}>
                Weight: {data.typography.body.weight}
              </p>
              <p className="mt-1 text-[12px]" style={{ color: "var(--text-muted)" }}>
                {data.typography.body.usage}
              </p>
            </div>
          </div>
        </Section>

        {/* Tone of Voice */}
        <Section title="Tone of Voice">
          <div className="space-y-2">
            {data.toneOfVoice?.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg px-4 py-3"
                style={{ backgroundColor: "var(--warm-50)" }}
              >
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  style={{ backgroundColor: "var(--teal)" }}
                >
                  {i + 1}
                </span>
                <p className="text-[13px] leading-6" style={{ color: "var(--text-body)" }}>{item}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Language Guardrails */}
        {data.languageGuardrails && (
          <Section title="Language Guardrails">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--sage)" }}>
                  Use
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.languageGuardrails.use.map((w, i) => (
                    <span
                      key={i}
                      className="rounded-full px-3 py-1.5 text-[13px] font-medium"
                      style={{ backgroundColor: "#EEF7F6", color: "var(--teal-dark, #3D8A82)" }}
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--coral)" }}>
                  Avoid
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.languageGuardrails.avoid.map((w, i) => (
                    <span
                      key={i}
                      className="rounded-full px-3 py-1.5 text-[13px] font-medium"
                      style={{ backgroundColor: "#FDF0EC", color: "var(--coral-dark, #B8664F)" }}
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        )}

        {/* Visual Direction */}
        {data.visualDirection && (
          <Section title="Visual Direction">
            <div className="space-y-2">
              {data.visualDirection.map((v, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg px-4 py-3"
                  style={{ backgroundColor: "var(--warm-50)" }}
                >
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--sage)" }}
                  />
                  <p className="text-[14px]" style={{ color: "var(--text-body)" }}>{v}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Brand Governance */}
        {data.brandGovernance && (
          <Section title="Brand Governance">
            <div className="space-y-2">
              {data.brandGovernance.map((g, i) => (
                <div
                  key={i}
                  className="rounded-lg border px-4 py-3 text-[14px] font-medium"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-50)", color: "var(--text-body)" }}
                >
                  {g}
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Brand Mantra */}
        {data.brandMantra && (
          <div
            className="mt-6 rounded-2xl p-8 text-center shadow-sm"
            style={{ background: "linear-gradient(135deg, #D4836A 0%, #B8664F 100%)" }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 mb-2">Brand Mantra</p>
            <p
              className="text-[22px] font-normal leading-10 text-white"
              style={{ fontFamily: "'Baskervville', Georgia, serif" }}
            >
              {data.brandMantra}
            </p>
          </div>
        )}

        {/* Contact */}
        {data.contact && Object.values(data.contact).some(Boolean) && (
          <Section title="Contact">
            <div className="grid gap-3 sm:grid-cols-2">
              {data.contact.phone && (
                <ContactField label="Phone" value={data.contact.phone} />
              )}
              {data.contact.email && (
                <ContactField label="Email" value={data.contact.email} />
              )}
              {data.contact.website && (
                <ContactField label="Website" value={data.contact.website} />
              )}
              {data.contact.instagram && (
                <ContactField label="Instagram" value={data.contact.instagram} />
              )}
              {data.contact.linkedin && (
                <ContactField label="LinkedIn" value={data.contact.linkedin} />
              )}
              {data.contact.twitter && (
                <ContactField label="X / Twitter" value={data.contact.twitter} />
              )}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
}

function ContactField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg px-4 py-3" style={{ backgroundColor: "var(--warm-50)" }}>
      <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
        {label}
      </p>
      <p className="mt-1 text-[15px] font-medium" style={{ color: "var(--text-body)" }}>{value}</p>
    </div>
  );
}
