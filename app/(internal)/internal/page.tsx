import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    href: "/brand-guidelines",
    title: "Brand Guidelines",
    description: "Colours, typography, tone of voice, visual direction — the Quiet Ember identity system",
    gradient: "from-[#5BA8A0] to-[#3D8A82]",
    icon: "✦",
  },
  {
    href: "/website",
    title: "Website",
    description: "Page blueprints with H1s, section structures, and brand copy for the full website",
    gradient: "from-[#8BAF84] to-[#5BA8A0]",
    icon: "◈",
  },
  {
    href: "/landing-page",
    title: "Landing Page",
    description: "Awareness-focused landing page templates designed to enlighten and gently invite",
    gradient: "from-[#D4836A] to-[#B8664F]",
    icon: "◇",
  },
  {
    href: "/digital-card",
    title: "Digital Card",
    description: "A sample digital business card in Quiet Ember branding — ready to personalise",
    gradient: "from-[#8FCAC4] to-[#5BA8A0]",
    icon: "▣",
  },
];

export default function InternalHubPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)" }}>
      <header
        className="border-b px-6 py-10"
        style={{
          backgroundColor: "var(--warm-white)",
          borderColor: "var(--border)",
        }}
      >
        <div className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="text-[12px] font-medium hover:underline"
            style={{ color: "var(--teal)" }}
          >
            ← Public website
          </Link>
          <div className="flex items-center gap-4 mb-5 mt-4">
            <Image
              src="/logo.png"
              alt="Quiet Ember"
              width={160}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--teal)" }}
          >
            Internal brand reference
          </p>
          <h1
            className="mt-1 text-4xl font-normal"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Quiet Ember
          </h1>
          <p className="mt-2 max-w-lg text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
            Emotional Well-being and Support — your internal brand hub for guidelines, web assets, and identity.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-10">
        <ul className="space-y-4">
          {cards.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="group flex items-center gap-5 rounded-2xl border p-5 shadow-sm transition-all hover:shadow-md"
                style={{
                  backgroundColor: "var(--warm-white)",
                  borderColor: "var(--border)",
                }}
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${c.gradient} text-xl text-white shadow-inner`}
                >
                  {c.icon}
                </span>
                <div className="min-w-0">
                  <p
                    className="font-semibold text-[15px] transition-colors group-hover:text-[#5BA8A0]"
                    style={{ color: "var(--text-dark)" }}
                  >
                    {c.title}
                  </p>
                  <p className="mt-0.5 text-[13px] leading-snug" style={{ color: "var(--text-muted)" }}>
                    {c.description}
                  </p>
                </div>
                <span
                  className="ml-auto shrink-0 text-lg opacity-30 transition-opacity group-hover:opacity-70"
                  style={{ color: "var(--teal)" }}
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-[12px]" style={{ color: "var(--text-muted)" }}>
          Quiet Ember — Emotional Well-being and Support
        </p>
      </main>
    </div>
  );
}
