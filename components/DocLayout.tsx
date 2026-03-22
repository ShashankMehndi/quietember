import Link from "next/link";

export type DocSection = {
  heading: string;
  level: number;
  paragraphs: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
};

function toId(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export default function DocLayout({
  breadcrumb,
  title,
  subtitle,
  lastUpdated,
  sections,
}: {
  breadcrumb: Array<{ label: string; href?: string }>;
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  sections: DocSection[];
}) {
  const tocSections = sections.filter((s) => s.level <= 2);
  const accent = "text-indigo-600";
  const accentBg = "bg-indigo-50";
  const border = "border-slate-200";

  return (
    <div className="min-h-screen bg-slate-50">
      <div className={`border-b ${border} bg-white`}>
        <div className="mx-auto max-w-3xl px-4 py-4">
          <nav className="flex flex-wrap items-center gap-1.5 text-[13px] text-slate-500">
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className={`${accent} hover:underline`}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-700">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <h1 className="text-[28px] font-bold text-slate-900 md:text-[34px]">{title}</h1>
        {subtitle && <p className="mt-2 text-[15px] text-slate-600">{subtitle}</p>}
        {lastUpdated && <p className="mt-2 text-[13px] text-slate-400">Last updated: {lastUpdated}</p>}

        <div className={`mt-8 rounded-2xl border ${border} bg-white p-6 shadow-sm md:p-8`}>
          {tocSections.length > 3 && (
            <nav className={`mb-8 border-b ${border} pb-6`}>
              <h2 className={`mb-3 text-[13px] font-semibold uppercase tracking-wider ${accent}`}>Contents</h2>
              <ul className="space-y-1.5">
                {tocSections.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${toId(section.heading)}`}
                      className={`inline-block rounded-md px-2 py-0.5 text-[14px] ${accent} transition-colors hover:bg-indigo-50 hover:underline`}
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {sections.map((section) => {
            const HeadingTag = section.level <= 2 ? "h2" : "h3";
            const headingSize =
              section.level <= 2 ? "text-[18px] font-bold text-slate-900" : "text-[16px] font-semibold text-slate-700";

            return (
              <section key={section.heading} id={toId(section.heading)} className="mb-8 scroll-mt-24 last:mb-0">
                <HeadingTag className={headingSize}>{section.heading}</HeadingTag>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="mt-3 text-[15px] leading-7 text-slate-600">
                    {p}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {section.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[15px] leading-7 text-slate-600">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div className={`mt-4 overflow-x-auto rounded-xl border ${border}`}>
                    <table className="w-full text-[13px]">
                      <thead>
                        <tr className={accentBg}>
                          {section.table.headers.map((h) => (
                            <th key={h} className="px-3 py-2 text-left font-semibold text-slate-800">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                            {row.map((cell, j) => (
                              <td key={j} className="px-3 py-2 align-top text-slate-700">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
