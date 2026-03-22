import Link from "next/link";

type Block = {
  type: "h2" | "paragraph" | "cta" | "bullets" | "label";
  content?: string;
  items?: string[];
};

type LandingBlueprint = {
  name: string;
  slug: string;
  accent: string;
  badge: string;
  purpose: string;
  h1: string;
  paragraph: string;
  awareness: string;
  blocks: Block[];
};

const landings: LandingBlueprint[] = [
  {
    name: "Awareness Landing",
    slug: "awareness",
    accent: "from-[#5BA8A0] to-[#8BAF84]",
    badge: "Template A",
    purpose:
      "Introduce Quiet Ember to someone who has never heard of the brand. This page is the very beginning of the relationship — gentle, curious, and non-pressuring.",
    h1: "You are not alone in this. And you do not have to carry it alone.",
    paragraph:
      "Life is not always easy to put into words. Sometimes it is a heaviness that settles in without warning. Sometimes it is the feeling that things are fine — and yet somehow, they are not. Quiet Ember exists for those in-between moments. We are not here to fix you. We are here to sit with you, understand what you are carrying, and gently help you find your way through it.",
    awareness:
      "This landing page is designed to land top-of-funnel — for someone who searched for 'counselling near me', clicked a social ad, or was sent a link by a friend. It does not ask for a booking immediately. It asks for nothing except a moment of recognition: 'Yes, this is what I need.' Brand awareness here is built through resonance, not persuasion.",
    blocks: [
      { type: "label", content: "HERO SECTION" },
      { type: "h2", content: "A safe space to feel, explore, and heal." },
      { type: "paragraph", content: "Quiet Ember is an emotional wellness practice founded on one belief: everyone deserves a place where they are truly heard — without judgement, without pressure, and without having to have it all together first." },
      { type: "label", content: "EMPATHY SECTION" },
      { type: "h2", content: "Does this sound familiar?" },
      { type: "bullets", items: ["You lie awake replaying conversations you cannot change", "You feel disconnected from the people you love most", "You function — but you know, deep down, something is off", "You have tried to push through, but 'pushing through' is exhausting"] },
      { type: "label", content: "WHAT WE OFFER" },
      { type: "h2", content: "A different kind of support." },
      { type: "paragraph", content: "We offer individual counselling, couples therapy, family sessions, and online support — each tailored to your story, your pace, and your needs. There is no one-size-fits-all here. There is only what works for you." },
      { type: "label", content: "SOFT CTA" },
      { type: "cta", content: "Curious? Book a free 20-minute conversation — no commitment, just a conversation." },
    ],
  },
  {
    name: "Service Landing — Anxiety",
    slug: "anxiety",
    accent: "from-[#D4836A] to-[#E8A896]",
    badge: "Template B",
    purpose:
      "Target someone specifically struggling with anxiety. This page speaks directly to their experience and positions Quiet Ember as the compassionate, skilled guide they have been looking for.",
    h1: "Anxiety is exhausting. You deserve support that actually helps.",
    paragraph:
      "Anxiety is not just worry. It is the way your body braces for something that hasn't happened yet. It is the 3am thoughts, the cancelled plans, the constant scan for what might go wrong. At Quiet Ember, we understand anxiety not as a character flaw, but as a signal — one that, with the right support, you can learn to hear differently.",
    awareness:
      "This service-specific landing page builds brand awareness within a clearly defined audience segment: people actively experiencing anxiety. It validates their experience using precise, empathetic language, then presents Quiet Ember as a specialist — not a generalist. This page would be paired with a Google Ads campaign, an Instagram awareness post, or a referral link targeting anxiety keywords.",
    blocks: [
      { type: "label", content: "HERO SECTION" },
      { type: "h2", content: "You can stop bracing for the worst. Let us help you find calm." },
      { type: "paragraph", content: "Our anxiety counselling sessions use evidence-based approaches — including CBT and EMDR — to help you understand where your anxiety comes from, how it shows up, and how to gently redirect it. This is not about forcing yourself to feel better. It is about learning to be with yourself differently." },
      { type: "label", content: "WHAT ANXIETY ACTUALLY FEELS LIKE" },
      { type: "bullets", items: ["Constant background hum of worry you cannot switch off", "Physical symptoms: tight chest, shallow breath, restless sleep", "Avoidance of situations that once felt normal", "Exhaustion from managing it alone"] },
      { type: "label", content: "HOW WE HELP" },
      { type: "h2", content: "Evidence-based care, delivered with warmth." },
      { type: "paragraph", content: "We use Cognitive Behavioural Therapy (CBT) to identify and gently shift unhelpful thought patterns. We use EMDR where trauma underlies anxiety. And above all, we create a space where you feel safe enough to actually talk about it — without rehearsing, without performing." },
      { type: "label", content: "TESTIMONIAL PLACEHOLDER" },
      { type: "paragraph", content: "\"For the first time in years, I slept through the night without waking up convinced something was wrong. Quiet Ember changed the way I relate to my own mind.\" — Name, Role" },
      { type: "label", content: "CTA" },
      { type: "cta", content: "Ready to feel calmer? Book a free consultation today. We will listen first." },
    ],
  },
  {
    name: "Free Consultation Landing",
    slug: "free-consultation",
    accent: "from-[#8FCAC4] to-[#5BA8A0]",
    badge: "Template C",
    purpose:
      "Convert curious visitors into booked consultations. This page is focused on the single action of getting someone to schedule a free call — removing every barrier and concern that might stop them.",
    h1: "Your first conversation is free. And it might be the most important one you have.",
    paragraph:
      "We know that reaching out is the hardest step. That is why we offer a complimentary 20-minute consultation — no forms to fill, no diagnosis, no commitment. Just a conversation. You talk. We listen. Together, we figure out whether we are a good fit and what support might look like for you.",
    awareness:
      "This landing page is designed for the middle of the funnel — someone who already knows they want support but has not yet committed to booking. It removes friction, reassures, and focuses entirely on a single, low-stakes action: schedule a free call. The brand shows up as generous, trustworthy, and unhurried — which is exactly the energy that converts.",
    blocks: [
      { type: "label", content: "HERO SECTION" },
      { type: "h2", content: "No pressure. No commitment. Just a conversation." },
      { type: "paragraph", content: "In 20 minutes, you can tell us a little about what is going on. We will tell you how we work and whether we think we can help. There is no obligation to book further sessions. We just want you to feel heard — from the very first moment." },
      { type: "label", content: "WHAT TO EXPECT" },
      { type: "h2", content: "Here is what happens when you reach out." },
      { type: "bullets", items: ["You fill in a short form — name, email, a line or two about what you need", "We respond within 24 hours with a booking link", "You choose a time that works for you — daytime, evening, online or in-person", "We meet. We talk. You decide if Quiet Ember feels right"] },
      { type: "label", content: "REASSURANCE SECTION" },
      { type: "h2", content: "It is okay not to know what to say." },
      { type: "paragraph", content: "Many people come to their first consultation not knowing where to begin. That is completely normal. You do not need a prepared summary or a clear diagnosis. You can simply say: 'I have been struggling, and I am not sure why.' That is more than enough. We will go from there." },
      { type: "label", content: "TRUST SIGNALS" },
      { type: "bullets", items: ["Licensed and accredited counsellors", "Confidential and GDPR-compliant", "Online sessions available globally", "Flexible scheduling — evenings and weekends"] },
      { type: "label", content: "CTA — BOOKING FORM" },
      { type: "cta", content: "Book your free consultation — fill in your name, email, and what you are looking for. We will take it from there." },
    ],
  },
];

function BlueprintBlock({ block }: { block: Block }) {
  if (block.type === "label") {
    return (
      <p className="text-[10px] font-bold uppercase tracking-widest pt-4 pb-1" style={{ color: "var(--text-muted)" }}>
        {block.content}
      </p>
    );
  }
  if (block.type === "h2") {
    return (
      <h3
        className="text-[17px] font-normal leading-snug"
        style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
      >
        {block.content}
      </h3>
    );
  }
  if (block.type === "paragraph") {
    return (
      <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-body)" }}>
        {block.content}
      </p>
    );
  }
  if (block.type === "bullets") {
    return (
      <ul className="space-y-1.5">
        {block.items?.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[13px]" style={{ color: "var(--text-body)" }}>
            <span style={{ color: "var(--teal)" }} className="mt-0.5 shrink-0">
              —
            </span>
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "cta") {
    return (
      <div
        className="rounded-xl px-5 py-4 mt-2"
        style={{ backgroundColor: "var(--warm-50)", border: `1px solid var(--border)` }}
      >
        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "var(--coral)" }}>
          Call to Action
        </p>
        <p
          className="text-[14px] font-medium leading-snug"
          style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--coral-dark, #B8664F)" }}
        >
          &ldquo;{block.content}&rdquo;
        </p>
      </div>
    );
  }
  return null;
}

export default function LandingPage() {
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
            Quiet Ember — Landing Pages
          </p>
          <h1
            className="mt-1 text-3xl font-normal"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Landing Page Blueprints
          </h1>
          <p className="mt-2 text-[14px] leading-relaxed max-w-xl" style={{ color: "var(--text-body)" }}>
            Three awareness-focused landing page templates — each with an H1, opening paragraph, brand awareness rationale, and a complete section-by-section content plan.
          </p>
        </div>
      </header>

      {/* Templates */}
      <main className="mx-auto max-w-3xl px-6 py-10 space-y-10">
        {landings.map((lp) => (
          <article
            key={lp.slug}
            className="rounded-2xl border overflow-hidden shadow-sm"
            style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
          >
            {/* Top bar */}
            <div className={`bg-gradient-to-r ${lp.accent} px-6 py-4 flex items-center gap-3`}>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 bg-white/20 px-2 py-0.5 rounded-full">
                {lp.badge}
              </span>
              <h2
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "'Baskervville', Georgia, serif" }}
              >
                {lp.name}
              </h2>
            </div>

            <div className="px-6 py-6 space-y-4">
              {/* Purpose */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>
                  Purpose
                </p>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-body)" }}>
                  {lp.purpose}
                </p>
              </div>

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
                  &ldquo;{lp.h1}&rdquo;
                </p>
              </div>

              {/* Opening paragraph */}
              <div
                className="rounded-xl px-5 py-4 border-l-4"
                style={{ backgroundColor: "var(--warm-50)", borderLeftColor: "var(--sage)" }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "var(--sage)" }}>
                  Opening Paragraph
                </p>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-body)" }}>
                  {lp.paragraph}
                </p>
              </div>

              {/* Awareness note */}
              <div
                className="rounded-xl px-5 py-4 border-l-4"
                style={{ backgroundColor: "#FBF6F0", borderLeftColor: "var(--coral)" }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "var(--coral)" }}>
                  Brand Awareness Note
                </p>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-body)" }}>
                  {lp.awareness}
                </p>
              </div>

              {/* Content blocks */}
              <div
                className="rounded-xl px-5 py-5 space-y-3 border"
                style={{ backgroundColor: "var(--warm-50)", borderColor: "var(--warm-200, #E8D8CC)" }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                  Page Content Blueprint
                </p>
                {lp.blocks.map((b, i) => (
                  <BlueprintBlock key={i} block={b} />
                ))}
              </div>
            </div>
          </article>
        ))}

        <p className="text-center text-[12px] pt-4" style={{ color: "var(--text-muted)" }}>
          Quiet Ember — Landing Page Blueprint
        </p>
      </main>
    </div>
  );
}
