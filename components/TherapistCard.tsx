import Image from "next/image";
import Link from "next/link";

export default function TherapistCard({
  name,
  role,
  bio,
  imageSeed,
  href,
}: {
  name: string;
  role: string;
  bio?: string;
  imageSeed: string;
  href?: string;
}) {
  const src = `https://picsum.photos/seed/${imageSeed}/400/520`;
  const inner = (
    <>
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[1.5rem]">
        <Image src={src} alt={name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent" />
      </div>
      <div className="p-4">
        <p className="text-lg font-normal" style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}>
          {name}
        </p>
        <p className="mt-1 text-[12px] font-medium uppercase tracking-wider" style={{ color: "var(--teal)" }}>
          {role}
        </p>
        {bio && <p className="mt-2 text-[13px] leading-snug line-clamp-3" style={{ color: "var(--text-muted)" }}>{bio}</p>}
      </div>
    </>
  );

  const cardStyle = { borderColor: "var(--border)", backgroundColor: "var(--warm-white)" } as const;
  const className = "block overflow-hidden rounded-[1.5rem] border transition-shadow hover:shadow-lg";

  if (href) {
    return (
      <Link href={href} className={className} style={cardStyle}>
        {inner}
      </Link>
    );
  }

  return (
    <article className="overflow-hidden rounded-[1.5rem] border shadow-sm" style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-white)" }}>
      {inner}
    </article>
  );
}
