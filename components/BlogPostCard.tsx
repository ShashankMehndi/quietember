import Image from "next/image";
import Link from "next/link";

export default function BlogPostCard({
  href,
  title,
  excerpt,
  category,
  readTime,
  imageSeed,
  imageSrc,
}: {
  href: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  imageSeed?: string;
  imageSrc?: string;
}) {
  const src = imageSrc ?? `https://picsum.photos/seed/${imageSeed}/600/400`;
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-[1.25rem] border shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
      style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
    >
      <div className="relative aspect-[16/10] w-full">
        <Image src={src} alt="" fill className="object-cover transition-transform group-hover:scale-[1.02]" sizes="(max-width:768px) 100vw, 33vw" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--coral)" }}>
          {category}
        </span>
        <h3
          className="mt-2 text-lg font-normal leading-snug transition-colors group-hover:text-[var(--teal-dark)]"
          style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
        >
          {title}
        </h3>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed line-clamp-2" style={{ color: "var(--text-muted)" }}>
          {excerpt}
        </p>
        <p className="mt-3 text-[12px]" style={{ color: "var(--text-muted)" }}>
          {readTime} read
        </p>
      </div>
    </Link>
  );
}
