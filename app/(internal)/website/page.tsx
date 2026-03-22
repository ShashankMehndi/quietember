import Link from "next/link";

type Section = { label: string; note?: string };

type PageBlueprint = {
  page: string;
  slug: string;
  accent: string;
  badge: string;
  h1: string;
  intro: string;
  awareness: string;
  sections: Section[];
};

const pages: PageBlueprint[] = [
  {
    page: "Home",
    slug: "home",
    accent: "from-[#5BA8A0] to-[#3D8A82]",
    badge: "Page 1",
    h1: "You deserve to feel okay. We are here to help you get there.",
    intro:
      "Your homepage is the first breath someone takes with your brand. It should feel warm, clear, and quietly confident — like walking into a room where someone is genuinely glad you arrived.",
    awareness:
      "This page exists to let the visitor know: they are in the right place. Quiet Ember is not a clinic. It is a companion — for the moments between crisis and fine, for the feelings that don't have a name yet, for anyone who is quietly carrying more than they should.",
    sections: [
      { label: "Hero", note: "Tagline + CTA: 'Schedule Your First Session' — soft background, logo visible" },
      { label: "Empathy Bridge", note: "3 relatable pain points: anxiety, isolation, relationship strain — gentle language" },
      { label: "How Quiet Ember Helps", note: "3 short benefit statements — not clinical, deeply human" },
      { label: "Services Overview", note: "Individual, Couples, Family, Online — icon cards with one-line descriptions" },
      { label: "Testimonials", note: "2–3 short client stories — first name only, warm and real" },
      { label: "Meet the Founder", note: "Short warm bio paragraph + photo — approachable, not formal" },
      { label: "Final CTA", note: "'Take the first step' — soft gradient section with booking link" },
    ],
  },
  {
    page: "About",
    slug: "about",
    accent: "from-[#8BAF84] to-[#5BA8A0]",
    badge: "Page 2",
    h1: "We believe healing is not a destination — it is a practice, tended with care.",
    intro:
      "The About page is where someone decides whether to trust you. It should feel honest, human, and grounded. Share the why behind Quiet Ember — not just the what.",
    awareness:
      "Many people arrive at an About page already half-convinced. This page turns curiosity into trust. It answers the quiet question: 'Are these people real? Do they actually understand what I am going through?' The answer, on this page, is always yes.",
    sections: [
      { label: "Founder Story", note: "Why Quiet Ember exists — personal, honest, 2–3 paragraphs" },
      { label: "Our Philosophy", note: "How we approach emotional wellness — warm, not academic" },
      { label: "Our Approach to Therapy", note: "Methods: CBT, EMDR, attachment theory — explained in plain language" },
      { label: "A Judgement-Free Space", note: "What sessions feel like — reassurance for first-timers" },
      { label: "The Team", note: "Therapist cards: name, specialisation, short warm bio" },
      { label: "Why 'Quiet Ember'", note: "Brand story: the metaphor of a quiet ember — steady warmth, not a blaze" },
    ],
  },
  {
    page: "Services",
    slug: "services",
    accent: "from-[#D4836A] to-[#B8664F]",
    badge: "Page 3",
    h1: "Comprehensive care, shaped around you — not the other way around.",
    intro:
      "The Services page must do two things: help visitors find the right service, and reassure them that whichever they choose, they will be truly supported. Keep it warm. Keep it clear.",
    awareness:
      "People reading this page are usually in two camps: those looking for something specific (e.g. 'couples therapy'), and those who don't yet know what they need. This page gently guides both. It says: whatever is going on, there is a place for it here.",
    sections: [
      { label: "Individual Therapy", note: "H2 + 2 paragraphs + 3 bullet points on what it helps with" },
      { label: "Couples Therapy", note: "H2 + 2 paragraphs + 3 bullet points — rebuild connection language" },
      { label: "Family Therapy", note: "H2 + 2 paragraphs + focus on communication and belonging" },
      { label: "Online Sessions", note: "H2 + reassurance that online is equally effective + privacy note" },
      { label: "Areas of Focus", note: "Grid of tags: anxiety, grief, trauma, burnout, postpartum, relationships, etc." },
      { label: "Insurance & Pricing", note: "Transparent pricing note + insurance providers — no surprises" },
      { label: "CTA", note: "'Not sure which service? Book a free call and we will figure it out together.'" },
    ],
  },
  {
    page: "Contact",
    slug: "contact",
    accent: "from-[#8FCAC4] to-[#5BA8A0]",
    badge: "Page 4",
    h1: "Your first step does not have to be a big one. Just say hello.",
    intro:
      "The Contact page should feel like an open door, not a form. Make it easy, make it warm, and remind people that reaching out is brave — not weak.",
    awareness:
      "Reaching out is often the hardest part of the journey. This page honours that. It acknowledges the courage it takes to contact a counsellor for the first time — and it makes the process as soft and simple as possible.",
    sections: [
      { label: "Warm Opening Paragraph", note: "One or two sentences: 'We are glad you are here. There is no wrong reason to reach out.'" },
      { label: "Contact Form", note: "Name, email, phone, service of interest, brief message — minimal, calm layout" },
      { label: "What Happens Next", note: "Step 1–3: we read your message → we respond within 24h → free consultation call" },
      { label: "Alternative Contact", note: "Phone, email, address — clearly shown, not buried" },
      { label: "Location / Map", note: "Embedded map if in-person sessions are offered" },
      { label: "FAQ teaser", note: "2–3 most common questions with a 'Read all FAQs' link" },
    ],
  },
  {
    page: "FAQ",
    slug: "faq",
    accent: "from-[#B4CEAF] to-[#8BAF84]",
    badge: "Page 5",
    h1: "Questions are welcome here. There are no wrong ones.",
    intro:
      "FAQs are not just for information — they are a trust-building exercise. Answer questions the way a caring person would, not the way a legal disclaimer would.",
    awareness:
      "Before someone books a session, they have doubts. This page dismantles each one gently. It speaks to people who are curious, nervous, or on the fence — and helps them feel that the decision to reach out is a good one.",
    sections: [
      { label: "Is therapy right for me?", note: "Warm, inclusive answer — no threshold required to seek support" },
      { label: "What does a session look like?", note: "Explain the flow: first session, ongoing rhythm, duration" },
      { label: "How much does it cost?", note: "Honest and clear — pricing range, insurance notes, sliding scale if offered" },
      { label: "Do you offer online sessions?", note: "Yes — explain the platform, privacy, and effectiveness" },
      { label: "What is your approach?", note: "CBT, EMDR, attachment theory — plain language explanation" },
      { label: "How long will I need therapy?", note: "Honest answer: it varies — some see shifts in weeks, others work longer" },
      { label: "What if I am not sure what I need?", note: "Free consultation offer — 'We will figure it out together'" },
    ],
  },
  {
    page: "Blog",
    slug: "blog",
    accent: "from-[#E8A896] to-[#D4836A]",
    badge: "Page 6",
    h1: "Words for the moments when you need them most.",
    intro:
      "The blog is a gift to anyone who is not ready to book a session yet. It shows that Quiet Ember cares about people — not just clients. Every article should make someone feel a little less alone.",
    awareness:
      "This page builds brand awareness without asking for anything in return. Readers arrive from a search, from social media, from a friend's recommendation. They leave with a sense of Quiet Ember's warmth. Over time, this turns readers into clients — gently, naturally.",
    sections: [
      { label: "Featured Article", note: "Largest card at top — most recent or most read" },
      { label: "Categories", note: "Anxiety · Relationships · Grief · Self-care · Parenting · Personal growth" },
      { label: "Article Grid", note: "3-column cards: thumbnail, category tag, title, 1-line teaser, read time" },
      { label: "Newsletter Sign-up", note: "Soft inline CTA: 'Gentle insights, delivered monthly. No noise, just warmth.'" },
      { label: "Suggested Reading", note: "Sidebar or bottom section: 'If you enjoyed this, try these'" },
    ],
  },
];

function SectionRow({ label, note }: Section) {
  return (
    <li className="flex items-start gap-3 py-2 border-b last:border-b-0" style={{ borderColor: "var(--warm-100)" }}>
      <span
        className="mt-0.5 h-5 w-5 shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
        style={{ backgroundColor: "var(--teal)" }}
      >
        ✓
      </span>
      <div>
        <span className="text-[13px] font-semibold" style={{ color: "var(--text-dark)" }}>
          {label}
        </span>
        {note && (
          <p className="text-[12px] mt-0.5 leading-snug" style={{ color: "var(--text-muted)" }}>
            {note}
          </p>
        )}
      </div>
    </li>
  );
}

export default function WebsitePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)" }}>
      {/* Header */}
      <header
        className="border-b px-6 py-8"
        style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
      >
        <div className="mx-auto max-w-3xl">
          <Link
            href="/internal"
            className="text-[12px] font-medium hover:underline"
            style={{ color: "var(--teal)" }}
          >
            ← Internal hub
          </Link>
          <p
            className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--coral)" }}
          >
            Quiet Ember — Website
          </p>
          <h1
            className="mt-1 text-3xl font-normal"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Website Page Blueprints
          </h1>
          <p className="mt-2 text-[14px] leading-relaxed max-w-xl" style={{ color: "var(--text-body)" }}>
            Each page below is a complete blueprint: the H1, the intent, why it matters for brand awareness, and the sections it contains. Use this as the foundation for your website build.
          </p>
        </div>
      </header>

      {/* Blueprints */}
      <main className="mx-auto max-w-3xl px-6 py-10 space-y-8">
        {pages.map((p) => (
          <article
            key={p.slug}
            className="rounded-2xl border overflow-hidden shadow-sm"
            style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
          >
            {/* Page header bar */}
            <div className={`bg-gradient-to-r ${p.accent} px-6 py-4 flex items-center gap-3`}>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 bg-white/20 px-2 py-0.5 rounded-full">
                {p.badge}
              </span>
              <h2
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "'Baskervville', Georgia, serif" }}
              >
                {p.page} Page
              </h2>
            </div>

            <div className="px-6 py-6 space-y-5">
              {/* H1 */}
              <div
                className="rounded-xl px-5 py-4 border-l-4"
                style={{ backgroundColor: "var(--warm-50)", borderLeftColor: "var(--teal)" }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "var(--teal)" }}>
                  H1 Heading
                </p>
                <p
                  className="text-[18px] leading-snug font-normal"
                  style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
                >
                  &ldquo;{p.h1}&rdquo;
                </p>
              </div>

              {/* Intent */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>
                  Page Intent
                </p>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-body)" }}>
                  {p.intro}
                </p>
              </div>

              {/* Awareness */}
              <div
                className="rounded-xl px-5 py-4 border-l-4"
                style={{ backgroundColor: "#FBF6F0", borderLeftColor: "var(--coral)" }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "var(--coral)" }}>
                  Brand Awareness Note
                </p>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-body)" }}>
                  {p.awareness}
                </p>
              </div>

              {/* Sections */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                  Page Sections
                </p>
                <ul className="divide-y" style={{ borderColor: "var(--warm-100)" }}>
                  {p.sections.map((s) => (
                    <SectionRow key={s.label} {...s} />
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}

        <p className="text-center text-[12px] pt-4" style={{ color: "var(--text-muted)" }}>
          Quiet Ember — Website Blueprint
        </p>
      </main>
    </div>
  );
}
