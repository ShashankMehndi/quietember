import Link from "next/link";
import Image from "next/image";
import { ArrowRight, LucideIcon, UserRound, HeartHandshake, Users } from "lucide-react";

function IllustrationBlock({ type }: { type: "individual" | "couples" | "family" }) {
  const blocks = {
    individual: {
      className: "bg-gradient-to-br from-[var(--purple)] to-[var(--purple-light)]",
      children: (
        <>
          <UserRound className="h-14 w-14 text-white/90" strokeWidth={1.25} />
          <UserRound className="-ml-4 h-12 w-12 text-white/60" strokeWidth={1.25} />
        </>
      ),
    },
    couples: {
      className: "bg-gradient-to-br from-[var(--accent-green)] to-[var(--sage)]",
      children: <HeartHandshake className="h-16 w-16 text-white/95" strokeWidth={1.15} />,
    },
    family: {
      className: "bg-gradient-to-br from-[var(--coral)] to-[var(--coral-dark)]",
      children: <Users className="h-16 w-16 text-white/95" strokeWidth={1.15} />,
    },
  };
  const b = blocks[type];
  return (
    <div
      className={`mb-4 flex h-36 items-center justify-center overflow-hidden rounded-2xl shadow-inner ${b.className}`}
    >
      <div className="flex items-center justify-center">{b.children}</div>
    </div>
  );
}

export default function ServiceCard({
  href,
  title,
  description,
  icon: Icon,
  templateIllustration,
  imageSrc,
  bullets,
}: {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  templateIllustration?: "individual" | "couples" | "family";
  imageSrc?: string;
  bullets?: string[];
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-[1.25rem] border p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
      style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
    >
      {imageSrc ? (
        <div className="relative mb-4 h-40 w-full overflow-hidden rounded-2xl">
          <Image src={imageSrc} alt="" fill className="object-cover transition-transform group-hover:scale-[1.02]" sizes="(max-width:768px) 100vw, 33vw" />
        </div>
      ) : templateIllustration ? (
        <IllustrationBlock type={templateIllustration} />
      ) : (
        <span
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{ backgroundColor: "var(--teal-light)", color: "var(--teal-dark)" }}
        >
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </span>
      )}
      <h3 className="text-lg font-normal" style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}>
        {title}
      </h3>
      <p className="mt-2 flex-1 text-[14px] leading-relaxed" style={{ color: "var(--text-body)" }}>
        {description}
      </p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-3 space-y-1.5 text-[13px]" style={{ color: "var(--text-muted)" }}>
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: "var(--accent-green)" }} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      <span
        className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold transition-gap group-hover:gap-2"
        style={{ color: "var(--purple)" }}
      >
        Learn more
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
