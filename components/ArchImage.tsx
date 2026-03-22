import Image from "next/image";

const fadeMap = {
  cream: "from-[var(--cream)] via-[var(--cream)]/70",
  warm50: "from-[var(--warm-50)] via-[var(--warm-50)]/70",
  white: "from-[var(--warm-white)] via-[var(--warm-white)]/70",
  mint: "from-[var(--warm-50)] via-[var(--teal-light)]/20",
} as const;

/** Rounded arch top + soft bottom fade into section background (template style). */
export default function ArchImage({
  src,
  alt,
  seed,
  className = "",
  aspectClass = "aspect-[3/4] max-h-[520px]",
  fade = "cream",
}: {
  src?: string;
  alt: string;
  seed?: string;
  className?: string;
  aspectClass?: string;
  fade?: keyof typeof fadeMap;
}) {
  const imgSrc = src ?? `https://picsum.photos/seed/${seed ?? "qe"}/600/800`;
  return (
    <div className={`relative w-full justify-self-center overflow-hidden rounded-t-[10rem] ${aspectClass} ${className}`}>
      <Image src={imgSrc} alt={alt} fill className="object-cover" sizes="(max-width:1024px) 90vw, 40vw" />
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t ${fadeMap[fade]} to-transparent`}
        aria-hidden
      />
    </div>
  );
}
