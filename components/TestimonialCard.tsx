import { Quote } from "lucide-react";

export default function TestimonialCard({ quote, name, context }: { quote: string; name: string; context?: string }) {
  return (
    <blockquote
      className="flex flex-col rounded-[1.25rem] border p-6 shadow-sm"
      style={{ backgroundColor: "var(--warm-50)", borderColor: "var(--border)" }}
    >
      <Quote className="h-8 w-8 shrink-0 opacity-30" style={{ color: "var(--purple)" }} />
      <p
        className="mt-4 flex-1 text-[15px] leading-relaxed italic"
        style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-body)" }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-4">
        <cite className="not-italic text-[13px] font-semibold" style={{ color: "var(--text-dark)" }}>
          {name}
        </cite>
        {context && <p className="text-[12px]" style={{ color: "var(--text-muted)" }}>{context}</p>}
      </footer>
    </blockquote>
  );
}
