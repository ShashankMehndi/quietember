import SectionWrapper from "@/components/SectionWrapper";

const sections = [
  {
    title: "Disclaimer",
    body: [
      "Quiet Ember provides non-clinical mental health support, mental health first aid, wellbeing education, and awareness-based guidance.",
      "We are not a medical or psychiatric service. Our services do not replace diagnosis, treatment, or ongoing care from a licensed mental health professional.",
      "Engaging with our services does not create a clinician–patient or medical relationship.",
    ],
  },
  {
    title: "Scope of services",
    body: [
      "Our services are intended for education, awareness, and general wellbeing support.",
      "We do not provide clinical interventions, diagnosis or treatment, or emergency or crisis support.",
      "Mental health first aid may involve discussion of distress. If a situation arises that is outside our scope — including risk to life, harm to others, involvement of minors, or the need for clinical or emergency care — the session will be stopped. Where required, appropriate external support services or authorities may be contacted.",
    ],
  },
  {
    title: "Emergency support",
    body: [
      "If you are experiencing a mental health emergency or feel at risk of harm, please contact local emergency services or a qualified mental health professional immediately.",
    ],
  },
  {
    title: "Nature of services",
    body: [
      "All services are non-clinical and provided for guidance, education, awareness, and wellbeing support only. Participation is voluntary. Individuals remain responsible for their own decisions and actions.",
    ],
  },
  {
    title: "Eligibility",
    body: [
      "Services are available to individuals 18 years of age and older only.",
    ],
  },
  {
    title: "Sessions & delivery",
    body: [
      "Services may be delivered in person or online. Online sessions are conducted via platforms such as Google Meet or Microsoft Teams.",
      "In-person services are currently offered in Hyderabad, Telangana.",
    ],
  },
  {
    title: "Payments, cancellations & refunds",
    body: [
      "Services are paid unless explicitly stated otherwise.",
      "A 24-hour cancellation notice is required for a refund. Cancellations made within 24 hours of a scheduled session are non-refundable.",
    ],
  },
  {
    title: "Recordings & photography",
    body: [
      "Sessions are not recorded without explicit consent.",
      "Photographs may be taken during group awareness or training sessions only with consent. Photographs are never taken during one-on-one sessions. Individuals may opt out of photography at any time without providing a reason.",
    ],
  },
  {
    title: "Refusal or discontinuation of services",
    body: [
      "We reserve the right to refuse, pause, or discontinue services if a request falls outside our ethical or professional scope, clinical or emergency care is required, or safety concerns arise.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "All materials, resources, and content provided remain the intellectual property of Quiet Ember and may not be reproduced, shared, or distributed without prior permission.",
      "All trauma-informed training materials and resources are the intellectual property of Bee Kind Training and are used by Quiet Ember with permission. These materials may not be reproduced, shared, or distributed without prior consent.",
    ],
  },
  {
    title: "Governing law",
    body: [
      "These terms are governed by the laws applicable in Hyderabad, Telangana, India.",
    ],
  },
  {
    title: "Updates",
    body: [
      "These terms may be updated periodically. Continued use of the website or services indicates acceptance of any changes.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <SectionWrapper tone="white" className="!pt-12 md:!pt-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            Legal
          </p>
          <h1
            className="mt-3 text-4xl font-normal md:text-5xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Terms &amp; Conditions
          </h1>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="cream" className="!pt-0">
        <article className="mx-auto max-w-2xl">
          {sections.map((s) => (
            <section key={s.title} className="mb-10">
              <h2
                className="text-xl font-normal"
                style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
              >
                {s.title}
              </h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3 text-[14px] leading-relaxed" style={{ color: "var(--text-body)" }}>
                  {p}
                </p>
              ))}
            </section>
          ))}
          <p className="text-[12px]" style={{ color: "var(--text-muted)" }}>
            Last updated: March {new Date().getFullYear()} · Reviewed annually
          </p>
        </article>
      </SectionWrapper>
    </>
  );
}
