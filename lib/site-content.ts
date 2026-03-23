/** Shared copy and data for the Quiet Ember website */

// ─── Brand identity ───────────────────────────────────────────────────────────
export const SITE_NAME = "Quiet Ember";
export const SITE_TAGLINE = "Emotional Well-being and Support";
/** Public website hostname (apex). Email may use a different domain (e.g. quietember.com). */
export const SITE_DOMAIN = "quietember.in";
export const SITE_URL = "https://quietember.in";

// ─── Contact ──────────────────────────────────────────────────────────────────
export const SITE_PHONE = "+91 8848 131 151";
export const SITE_PHONE_TEL = "+918848131151";
export const SITE_EMAIL = "support@quietember.com";
/** In-person sessions are offered in Hyderabad, Telangana */
export const SITE_ADDRESS = "Hyderabad, Telangana, India";

// ─── FAQ — short list used on home page ───────────────────────────────────────
export const faqItems = [
  {
    q: "Is Quiet Ember a clinical counselling service?",
    a: "No. Quiet Ember provides non-clinical mental health support — including mental health first aid, wellbeing education, and awareness-based guidance. Our services do not replace diagnosis, treatment, or care from a licensed mental health professional.",
  },
  {
    q: "Who can access your services?",
    a: "Our services are available to individuals aged 18 and above. Group programmes (neurodiversity awareness, parenting workshops) are open to university communities, corporates, and parents of neurodivergent children.",
  },
  {
    q: "What is Mental Health First Aid?",
    a: "Mental Health First Aid (MHFA) is a 1:1 session of up to 60 minutes designed to offer immediate, compassionate support during or after a distressing experience. It is not clinical care — it is a structured, human-centred approach to help you feel heard, stabilised, and pointed toward the right next steps.",
  },
  {
    q: "Do you offer online sessions?",
    a: "Yes. Online sessions are available via Google Meet or Microsoft Teams. In-person sessions are currently offered in Hyderabad, Telangana.",
  },
  {
    q: "How much does a session cost?",
    a: "Mental Health First Aid sessions start at ₹799 online and ₹1,099 in person. Monthly subscriptions are also available for better value. Group programmes (neurodiversity awareness, parenting workshops) are priced separately — see our Pricing page or contact us for a quote.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We ask for at least 24 hours' notice to cancel or reschedule. Cancellations within 24 hours of a scheduled session are non-refundable.",
  },
  {
    q: "What if I am in crisis or need emergency support?",
    a: "Quiet Ember does not provide crisis or emergency care. If you or someone you know is at immediate risk, please contact local emergency services or a qualified mental health professional immediately.",
  },
];

// ─── Full FAQ page — category blocks ─────────────────────────────────────────
export type FAQSectionBlock = {
  id: string;
  title: string;
  subtitle: string;
  dotClass: string;
  items: { q: string; a: string }[];
};

export const faqSections: FAQSectionBlock[] = [
  {
    id: "about",
    title: "About Us",
    subtitle: "WHAT QUIET EMBER IS (AND ISN'T)",
    dotClass: "bg-[var(--teal)]",
    items: [
      {
        q: "Is Quiet Ember a clinical counselling service?",
        a: "No. Quiet Ember provides non-clinical mental health support — mental health first aid, wellbeing education, and awareness programmes. We are not a medical or psychiatric service and do not offer diagnosis, treatment, or clinical intervention.",
      },
      {
        q: "Who can access your services?",
        a: "Services are open to individuals aged 18 and older. Our group and corporate programmes are designed for universities, organisations, and parents of neurodivergent children.",
      },
      {
        q: "Where are you based?",
        a: "We are based in Hyderabad, Telangana, India. In-person services are offered in Hyderabad; online services are available to anyone.",
      },
    ],
  },
  {
    id: "services",
    title: "Services",
    subtitle: "WHAT WE OFFER",
    dotClass: "bg-[var(--coral)]",
    items: [
      {
        q: "What is Mental Health First Aid?",
        a: "Mental Health First Aid (MHFA) is a 1:1 session of up to 60 minutes. It offers structured, compassionate support during or after a distressing experience — helping you feel heard, grounded, and clear on next steps. It is not clinical care.",
      },
      {
        q: "What do your neurodiversity awareness sessions cover?",
        a: "These are 2-hour group sessions for universities or corporate teams. They build practical understanding of neurodivergent experiences, reduce stigma, and equip teams with tools to create more inclusive environments. Physical resources and fidget toys are included in offline sessions.",
      },
      {
        q: "What happens in a parenting workshop?",
        a: "Our 2-hour parenting workshops (with a 10-minute break) are designed for parents of neurodivergent children. Offline sessions include guided discussions, take-home resources, and practical tools for responding calmly to your child's needs.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Booking",
    subtitle: "SESSIONS & SUBSCRIPTIONS",
    dotClass: "bg-[var(--sage)]",
    items: [
      {
        q: "How much do sessions cost?",
        a: "For full pricing tables, visit our Pricing page. Mental Health First Aid: ₹799 per online session, ₹1,099 per in-person session. Monthly subscriptions are available. Parenting workshops, neurodiversity awareness, and Trauma-Informed Practice Training are priced separately.",
      },
      {
        q: "How do I book a session?",
        a: "You can reach us via the contact form on our website or directly by email. We will confirm availability and share next steps.",
      },
      {
        q: "What platforms are used for online sessions?",
        a: "Online sessions are conducted via Google Meet or Microsoft Teams.",
      },
    ],
  },
  {
    id: "policies",
    title: "Policies",
    subtitle: "CANCELLATIONS & PRIVACY",
    dotClass: "bg-[var(--teal-dark)]",
    items: [
      {
        q: "What is your cancellation policy?",
        a: "At least 24 hours' notice is required to cancel or reschedule. Cancellations within 24 hours of the session time are non-refundable.",
      },
      {
        q: "Are sessions recorded?",
        a: "Sessions are not recorded without your explicit consent. Photographs are never taken during 1:1 sessions.",
      },
      {
        q: "How is my personal information handled?",
        a: "We collect only what is necessary (name, email, phone) and use it solely to respond to you and deliver services. We do not sell or share your data. Identifiable information is retained for no longer than 12 months. See our Privacy Policy for full details.",
      },
    ],
  },
];

// ─── Focus areas shown on home / conditions pages ────────────────────────────
export const focusAreasHome = [
  "Mental Health First Aid",
  "Trauma-Informed Practice Training",
  "Neurodiversity Awareness",
  "Parenting Support",
  "Emotional Wellbeing",
  "Workplace Mental Health",
  "Student Wellbeing",
  "Stress & Burnout",
  "Grief & Loss",
  "Anxiety Awareness",
  "Trauma-Informed Approaches",
  "Inclusive Environments",
  "Crisis Preparedness",
];

export const conditionsList = focusAreasHome;

// ─── Service cards shown on home page ────────────────────────────────────────
export type HomeServiceCard = {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc?: string;
  templateIllustration?: "individual" | "couples" | "family";
};

export const homeServiceCards: HomeServiceCard[] = [
  {
    href: "/services/mental-health-first-aid",
    title: "Mental Health First Aid",
    description:
      "Mental Health First Aid is the first point of contact for supporting people with mental health issues. A structured 1:1 session of up to 60 minutes — online and in person.",
    bullets: [
      "Safe space to be heard without judgement",
      "Practical tools to feel more grounded",
      "Clear guidance on next steps",
    ],
    imageSrc: "https://picsum.photos/seed/quietember-mhfa/800/1000",
    templateIllustration: "individual",
  },
  {
    href: "/services/neurodiversity-awareness",
    title: "Neurodiversity Awareness",
    description:
      "Group sessions for universities and corporate teams — building genuine understanding of neurodivergent experiences and creating more inclusive environments.",
    bullets: [
      "Tailored for universities (up to 50) and corporates (up to 30)",
      "Reduces stigma and builds empathy",
      "Physical resources included for in-person sessions",
    ],
    imageSrc: "https://picsum.photos/seed/quietember-neuro/800/1000",
    templateIllustration: "couples",
  },
  {
    href: "/services/parenting-workshops",
    title: "Parenting Workshops",
    description:
      "Neurodiversity awareness workshops for parents of neurodivergent children — practical, warm, and grounded in real experience.",
    bullets: [
      "Guided parent discussions",
      "Take-home resources",
      "Practical tools for responding calmly",
    ],
    imageSrc: "https://picsum.photos/seed/quietember-parent/800/1000",
    templateIllustration: "family",
  },
  {
    href: "/services/trauma-informed-practice-training",
    title: "Trauma-Informed Practice Training (TIPT)",
    description:
      "Workshops on trauma-informed practices for educators, teams, and organisations — building safety, awareness, and compassionate responses in everyday settings.",
    bullets: [
      "Grounded in safety and awareness",
      "Practical tools for institutions and workplaces",
      "Delivered online or in person",
      "Pricing and format tailored to your group — contact us",
    ],
    imageSrc: "https://picsum.photos/seed/quietember-tipt/800/1000",
    templateIllustration: "individual",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export type HomeTestimonial = { quote: string; name: string; context: string };

export const homeTestimonials: HomeTestimonial[] = [
  {
    quote:
      "I didn't know what mental health first aid was before this. Afterwards I felt like I could breathe again. It was exactly what I needed.",
    name: "Priya",
    context: "MHFA participant",
  },
  {
    quote:
      "Quiet Ember's neurodiversity session changed how our whole HR team thinks. We left with real tools, not just theory.",
    name: "Rohan",
    context: "HR Manager",
  },
  {
    quote:
      "As a parent of a neurodivergent child, I've felt so alone. The workshop gave me language for what my son experiences — and for what I experience too.",
    name: "Sunita",
    context: "Parent",
  },
  {
    quote:
      "Our university invited Quiet Ember for a session and the feedback from students was overwhelmingly positive. Genuinely impactful.",
    name: "Vikram",
    context: "Student Welfare Officer",
  },
  {
    quote:
      "I appreciated that the session was honest about what they can and can't offer. That clarity made me trust them more, not less.",
    name: "Aisha",
    context: "MHFA participant",
  },
];

// ─── What to expect steps ─────────────────────────────────────────────────────
export const whatToExpectSteps = [
  {
    step: "1",
    title: "Reach out",
    body: "Contact us by email or phone. Tell us a little about what you're looking for — 1:1 support, a group session, or a workshop — and we'll take it from there.",
  },
  {
    step: "2",
    title: "We connect",
    body: "We'll confirm availability, answer any questions you have, and share what to expect. No pressure, no jargon.",
  },
  {
    step: "3",
    title: "Your session",
    body: "Online via Google Meet or Microsoft Teams, or in person in Hyderabad. All sessions are private, unhurried, and focused on you.",
  },
  {
    step: "4",
    title: "Follow-up",
    body: "After some programmes we may share an optional, anonymous feedback form. This helps us improve and — with your consent — contributes to wellbeing research.",
  },
];

// ─── Pricing ──────────────────────────────────────────────────────────────────
export type PricingTier = {
  label: string;
  price: string;
  note?: string;
};

export const pfaPricing = {
  online: [
    { label: "Single session", price: "₹799" },
    { label: "Monthly — 2 sessions", price: "₹1,399" },
    { label: "Monthly — 4 sessions", price: "₹2,799" },
  ] as PricingTier[],
  offline: [
    { label: "Single session", price: "₹1,099" },
    { label: "Monthly — 2 sessions", price: "₹1,899" },
    { label: "Monthly — 4 sessions", price: "₹3,899" },
  ] as PricingTier[],
};

export const groupPricing = [
  {
    title: "Neurodiversity Awareness — Universities",
    duration: "2 hours · up to 50 people",
    online: "₹20,000",
    offline: "₹30,000",
    offlineNote: "Includes physical resources + fidget toys",
  },
  {
    title: "Neurodiversity Awareness — Corporates",
    duration: "2 hours · up to 30 people",
    online: "₹35,000",
    offline: "₹45,000",
    offlineNote: "Includes physical resources + fidget toys",
  },
  {
    title: "Parenting Workshops",
    duration: "2 hours (10 min break)",
    online: "₹899 per couple / ₹450 per parent",
    offline: "₹1,200 per couple / ₹600 per parent",
    offlineNote: "Includes guided discussions + take-home resources",
  },
];

/** Trauma-Informed Practice Training — placeholder until final rates are confirmed */
export const tiptPricing = {
  rows: [
    { label: "Half-day workshop (up to 25)", online: "TBC", offline: "TBC", note: "Contact us for a quote" },
    { label: "Full-day workshop (up to 25)", online: "TBC", offline: "TBC", note: "Contact us for a quote" },
    { label: "Institution / corporate package", online: "TBC", offline: "TBC", note: "Custom scope and pricing" },
  ] as { label: string; online: string; offline: string; note?: string }[],
};

// ─── Therapists / team (update with real team details before launch) ──────────
export type Therapist = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  credentials: string[];
  specialties: string[];
  imageSeed: string;
  bookingHref?: string;
};

export const therapists: Therapist[] = [
  {
    slug: "founder",
    name: "[Your name here]",
    role: "Founder · Wellbeing Practitioner",
    bio: "Update this bio with your story, qualifications, and what draws you to this work — replace placeholder before launch.",
    longBio:
      "We are updating our team page with full details and experience. Please replace this placeholder with your background: training in mental health first aid, neurodiversity, trauma-informed practice, workshops delivered, and any relevant professional experience you wish to share publicly.",
    credentials: ["Mental Health First Aider", "Neurodiversity & inclusion practitioner"],
    specialties: ["Mental Health First Aid", "Neurodiversity awareness", "Parenting support", "Trauma-informed practice"],
    imageSeed: "101",
    bookingHref: "/contact",
  },
];

// ─── Blog posts ───────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    slug: "what-is-mental-health-first-aid",
    title: "What is Mental Health First Aid — and when might it help?",
    excerpt: "MHFA isn't clinical care. Here's what it actually is, who it's for, and what a session feels like.",
    category: "Wellbeing",
    readTime: "5 min",
    imageSrc: "https://picsum.photos/seed/quietember-blog-mhfa/1200/800",
    body: `
Mental Health First Aid — often called MHFA — is a human, structured way to support someone who is struggling emotionally.

It is not diagnosis. It is not clinical intervention. It is compassionate presence at a moment when someone needs to feel safe, heard, and clear about what comes next.

**What MHFA actually involves**

A MHFA session at Quiet Ember lasts up to 60 minutes. In that time, the focus is on three things: helping you feel physically and emotionally safer, listening without judgement, and connecting you with any practical information or next steps that might help.

We do not push you to talk about things you are not ready for. We do not interpret your experience. We simply sit with you in it.

**Who is it for?**

MHFA is for anyone going through a difficult period — a loss, a sudden change, workplace stress, relationship upheaval, or simply a moment where things feel too heavy to carry alone. You do not need to be "in crisis" to benefit. You just need to feel like you could use a steady, informed presence for an hour.

**Online or in person?**

Both. Online sessions are held via Google Meet or Microsoft Teams. In-person sessions are offered in Hyderabad, Telangana. The format does not change the quality of what we offer — choose whichever feels most comfortable for you.

If you are unsure whether MHFA is right for what you are going through, reach out and we will be honest with you about whether it fits.
    `.trim(),
  },
  {
    slug: "neurodiversity-in-the-workplace",
    title: "What does a neuro-inclusive workplace actually look like?",
    excerpt: "Inclusion isn't a poster on the wall. Here are the practical shifts that make a real difference.",
    category: "Neurodiversity",
    readTime: "6 min",
    imageSrc: "https://picsum.photos/seed/quietember-blog-work/1200/800",
    body: `
Neuro-inclusion is one of those workplace topics that is easy to add to a policy document and much harder to live in practice. The gap between intention and experience is often where neurodivergent employees quietly struggle.

This is not about lowering expectations. It is about removing the unnecessary friction that makes ordinary work significantly harder for some people — without benefiting anyone.

**What neurodivergence actually means**

Neurodivergence refers to the natural variation in how human brains work. This includes ADHD, autism, dyslexia, dyspraxia, and other cognitive profiles. Neurodivergent employees are not less capable — they are differently wired, and most workplace environments are designed without them in mind.

**Practical shifts that matter**

Clear, written instructions rather than only verbal ones. Advance agendas for meetings. Quiet spaces for focused work. Flexibility around when and how work gets done. Feedback that is direct and specific rather than vague.

None of these changes are radical. Most of them improve the environment for everyone.

**What our awareness sessions do**

Our 2-hour neurodiversity awareness sessions for universities and corporates are designed to build genuine understanding, not just compliance. We focus on what neurodivergent experiences actually feel like day-to-day, what tends to help, and how teams can shift from tolerance to real inclusion.

If you would like to bring a session to your organisation or university, contact us to discuss what would work best for your team.
    `.trim(),
  },
  {
    slug: "parenting-neurodivergent-child",
    title: "Parenting a neurodivergent child: what no one prepares you for",
    excerpt: "The emotional landscape of parenting a neurodivergent child — and why support for parents matters just as much.",
    category: "Parenting",
    readTime: "7 min",
    imageSrc: "https://picsum.photos/seed/quietember-blog-parent/1200/800",
    body: `
When your child is neurodivergent, the focus almost always lands on the child. Assessments, school plans, specialist appointments, and support services. This is necessary and right.

But the parent sitting in those waiting rooms — the one researching at midnight, trying to hold it together, wondering if they are doing enough — often goes unacknowledged.

**The invisible weight**

Parenting any child is demanding. Parenting a neurodivergent child often involves an additional layer of advocacy, emotional labour, and uncertainty that can quietly accumulate into exhaustion.

Many parents describe feeling isolated — either because others do not understand what their daily life looks like, or because asking for support for themselves feels somehow selfish when the child's needs are so visible.

It is not selfish. It is necessary.

**What our parenting workshops offer**

Our 2-hour workshops are designed specifically for parents of neurodivergent children. We do not deliver lectures. We create a space for parents to talk honestly with others who understand — guided by a practitioner who can offer both knowledge and perspective.

Offline sessions include take-home resources and practical tools for responding calmly when things escalate. Online sessions offer the same discussion and guidance in a format that works around your schedule.

**You cannot pour from an empty vessel**

Your child needs you regulated, resourced, and well. Taking an hour or two to invest in your own understanding and support is not separate from caring for your child — it is part of it.
    `.trim(),
  },
];

// ─── Services by slug ─────────────────────────────────────────────────────────
export const serviceSlugs = [
  "mental-health-first-aid",
  "neurodiversity-awareness",
  "parenting-workshops",
  "trauma-informed-practice-training",
] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

export const servicesBySlug: Record<
  ServiceSlug,
  { title: string; short: string; bullets: string[]; heroSub: string }
> = {
  "mental-health-first-aid": {
    title: "Mental Health First Aid",
    short: "1:1 sessions of up to 60 minutes — online or in Hyderabad.",
    heroSub:
      "Mental Health First Aid is the first point of contact for supporting people with mental health issues — a structured, compassionate space to feel heard and find your footing again.",
    bullets: [
      "Safe, non-judgemental listening",
      "Practical grounding and stabilisation",
      "Clear guidance on next steps",
      "Available online or in person (Hyderabad)",
    ],
  },
  "neurodiversity-awareness": {
    title: "Neurodiversity Awareness Sessions",
    short: "Group programmes for universities and corporates — 2 hours, up to 50 people.",
    heroSub: "Building genuine understanding of neurodivergent experience, one team at a time.",
    bullets: [
      "Tailored for universities (up to 50) or corporates (up to 30)",
      "Practical tools for neuro-inclusive environments",
      "Physical resources and fidget toys included (offline)",
      "Online or in-person delivery",
    ],
  },
  "parenting-workshops": {
    title: "Parenting Workshops",
    short: "Neurodiversity awareness for parents of neurodivergent children.",
    heroSub: "Because parents need support too — not just information.",
    bullets: [
      "Guided parent discussions",
      "Take-home resources",
      "Practical tools for responding calmly",
      "Online and in-person options",
    ],
  },
  "trauma-informed-practice-training": {
    title: "Trauma-Informed Practice Training (TIPT)",
    short: "Workshops for educators, teams, and organisations — safety, awareness, and compassionate practice.",
    heroSub:
      "Build trauma-informed cultures in schools, workplaces, and communities — practical, respectful, and grounded in lived experience.",
    bullets: [
      "Understanding trauma's impact in everyday settings",
      "Safety, choice, and trust in how you support others",
      "Tools for educators, HR, and leaders",
      "Custom formats — half-day, full-day, or ongoing programmes",
    ],
  },
};
