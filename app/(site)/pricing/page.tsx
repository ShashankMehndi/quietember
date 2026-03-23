import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import { PillButtonLink } from "@/components/PillButton";
import { pfaPricing, groupPricing, tiptPricing, SITE_EMAIL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Quiet Ember pricing — mental health first aid sessions, subscriptions, neurodiversity awareness, parenting workshops, and Trauma-Informed Practice Training. Free 15-minute introductory call.",
};

function PricingTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: { cells: string[] }[];
}) {
  return (
    <div className="overflow-x-auto rounded-[1.25rem] border shadow-sm" style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-white)" }}>
      <table className="w-full min-w-[280px] text-left text-[14px]">
        <thead>
          <tr style={{ backgroundColor: "var(--warm-50)" }}>
            {headers.map((h) => (
              <th key={h} className="border-b px-4 py-3 font-semibold" style={{ borderColor: "var(--border)", color: "var(--text-dark)" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b last:border-0" style={{ borderColor: "var(--border)" }}>
              {row.cells.map((c, j) => (
                <td key={j} className="px-4 py-3 align-top" style={{ color: "var(--text-body)" }}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <SectionWrapper tone="white" className="!pt-12 md:!pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
            Pricing
          </p>
          <h1
            className="mt-3 text-4xl font-normal md:text-5xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Clear, simple pricing
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
            Every option below is a starting point. For groups, institutions, or custom training, contact us and we&apos;ll tailor a quote.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="mint">
        <div
          className="mx-auto max-w-3xl rounded-[1.5rem] border px-6 py-8 text-center shadow-sm md:px-10"
          style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
        >
          <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--coral)" }}>
            New here?
          </p>
          <h2 className="mt-2 text-2xl font-normal md:text-3xl" style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}>
            Free 15-minute call
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
            Book a short call to learn about mental health first aid, what our sessions cover (including TIPT and neurodiversity programmes), or to ask questions before you commit.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <PillButtonLink href="/contact">Book via contact form</PillButtonLink>
            <a
              href={`mailto:${SITE_EMAIL}?subject=Free%2015-minute%20call`}
              className="inline-flex items-center rounded-full border-2 px-6 py-2.5 text-[14px] font-semibold transition-colors hover:bg-[var(--mint)]"
              style={{ borderColor: "var(--teal-deep)", color: "var(--teal-deep)" }}
            >
              Email us directly
            </a>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="warm50">
        <div className="mx-auto max-w-3xl space-y-10">
          <div>
            <h2 className="text-2xl font-normal md:text-3xl" style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}>
              Mental Health First Aid (1:1)
            </h2>
            <p className="mt-2 text-[14px]" style={{ color: "var(--text-muted)" }}>
              Up to 60 minutes per session. Online via Google Meet or Microsoft Teams; in person in Hyderabad.
            </p>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
              Online
            </h3>
            <div className="mt-3">
              <PricingTable
                headers={["Option", "Price"]}
                rows={pfaPricing.online.map((t) => ({ cells: [t.label, t.price] }))}
              />
            </div>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
              In person (Hyderabad)
            </h3>
            <div className="mt-3">
              <PricingTable
                headers={["Option", "Price"]}
                rows={pfaPricing.offline.map((t) => ({ cells: [t.label, t.price] }))}
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-normal md:text-3xl" style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}>
              Neurodiversity awareness
            </h2>
            <p className="mt-2 text-[14px]" style={{ color: "var(--text-muted)" }}>
              Two-hour group sessions for universities and corporate teams.
            </p>
            <div className="mt-6">
              <PricingTable
                headers={["Programme", "Duration & size", "Online", "In person", "Notes"]}
                rows={groupPricing.slice(0, 2).map((g) => ({
                  cells: [g.title, g.duration, g.online, g.offline, g.offlineNote ?? "—"],
                }))}
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-normal md:text-3xl" style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}>
              Parenting workshops
            </h2>
            <p className="mt-2 text-[14px]" style={{ color: "var(--text-muted)" }}>
              {groupPricing[2].duration}. For parents of neurodivergent children.
            </p>
            <div className="mt-6">
              <PricingTable
                headers={["Format", "Online", "In person", "Notes"]}
                rows={[
                  {
                    cells: [
                      "Per couple / per parent",
                      groupPricing[2].online,
                      groupPricing[2].offline,
                      groupPricing[2].offlineNote ?? "—",
                    ],
                  },
                ]}
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-normal md:text-3xl" style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}>
              Trauma-Informed Practice Training (TIPT)
            </h2>
            <p className="mt-2 text-[14px]" style={{ color: "var(--text-muted)" }}>
              Workshops for educators, teams, and organisations. Final pricing is confirmed after we understand your group size, format, and goals — placeholders below until your package is set.
            </p>
            <div className="mt-6">
              <PricingTable
                headers={["Format", "Online", "In person", "Notes"]}
                rows={tiptPricing.rows.map((r) => ({
                  cells: [r.label, r.online, r.offline, r.note ?? "—"],
                }))}
              />
            </div>
          </div>

          <div className="rounded-[1.25rem] border p-6 text-center" style={{ borderColor: "var(--border)", backgroundColor: "var(--cream)" }}>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              Questions about booking, invoices, or a custom quote? We&apos;re happy to help.
            </p>
            <Link href="/contact" className="mt-4 inline-block text-[14px] font-semibold underline underline-offset-4" style={{ color: "var(--teal-deep)" }}>
              Contact us →
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
