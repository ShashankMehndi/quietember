import SectionWrapper from "@/components/SectionWrapper";

const sections = [
  {
    title: "About this policy",
    body: [
      "This website and the services offered under the brand Quiet Ember are operated in India. We respect your privacy and are committed to protecting the personal information you share with us. We collect and use information responsibly and only for purposes related to our services.",
    ],
  },
  {
    title: "Information we collect",
    body: [
      "We collect limited personal information only when it is voluntarily provided through website enquiry or registration forms, email communication, or phone contact.",
      "This information may include your name, email address, and phone number.",
      "Social media direct messages are not treated as a formal communication or intake channel. For all service-related enquiries, we request that individuals contact us via email or phone.",
    ],
  },
  {
    title: "How we use information",
    body: [
      "Personal information is used solely to respond to enquiries, communicate details about services, workshops, or sessions, manage bookings and service delivery, and provide relevant follow-up communication.",
      "We do not sell, trade, or misuse personal information.",
    ],
  },
  {
    title: "Questionnaires, feedback & programme evaluation",
    body: [
      "As part of our awareness programmes and training sessions, participants may be invited to complete optional questionnaires. These may include pre-session questionnaires, post-session questionnaires, and follow-up questionnaires approximately 2–4 months after a session.",
      "The purpose of these questionnaires is to understand whether participants noticed any changes in awareness, thinking, or behaviour over time and to support service improvement.",
      "Participation in questionnaires is entirely voluntary and does not affect access to our services.",
      "For one-on-one sessions, only a brief feedback questionnaire may be provided, used solely to improve service quality and participant experience.",
    ],
  },
  {
    title: "Optional research participation",
    body: [
      "In some instances, anonymised questionnaire responses may be used for research purposes, including the preparation of articles, reports, or publications related to wellbeing awareness and education. Participation in research is entirely optional.",
      "The questionnaire and consent form include a clear option for participants to indicate whether they consent to their anonymised data being used for research purposes. Choosing not to provide consent does not affect participation in sessions, access to services, or engagement with our programmes in any way.",
      "Only responses for which explicit research consent has been provided will be used for research purposes. All research data is fully anonymised, reported only in aggregate form, and does not include any identifying information. This research is non-clinical and observational in nature — it does not involve diagnosis, treatment, or intervention.",
    ],
  },
  {
    title: "Questionnaire data handling",
    body: [
      "For questionnaires: exact age and gender are collected. No names, phone numbers, or email addresses are linked to responses. Responses are reviewed only in anonymised and aggregated form.",
    ],
  },
  {
    title: "Data storage & access",
    body: [
      "All data is stored on a password-protected device. Access is limited to authorised team members only. Data is not shared with third parties for marketing or commercial purposes.",
    ],
  },
  {
    title: "Data retention",
    body: [
      "Personal and identifiable information is retained for no longer than 12 months from the date of collection, unless retention is required by law.",
      "After this period, identifiable data is securely deleted. Fully anonymised and aggregated questionnaire responses may be retained for internal learning, service improvement, or approved research purposes only.",
    ],
  },
  {
    title: "Disclosure of information",
    body: [
      "Information may be disclosed only in limited circumstances: where there is a serious and immediate risk of harm to the individual or others, or where disclosure is required by applicable law.",
    ],
  },
  {
    title: "Consent",
    body: [
      "By using this website or engaging with our services, you consent to the collection and use of information as outlined in this Privacy Policy.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy-related questions or concerns, please contact us via our official work email or phone number.",
    ],
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
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
