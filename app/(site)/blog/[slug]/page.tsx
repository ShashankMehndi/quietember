import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import { blogPosts, SITE_NAME, SITE_URL } from "@/lib/site-content";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.imageSrc ? [{ url: `${SITE_URL}${post.imageSrc}` }] : [],
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  // Split body into paragraphs, preserving **bold** and headers
  const renderBody = (body: string) => {
    return body.split("\n\n").map((block, i) => {
      if (block.startsWith("**") && block.endsWith("**")) {
        const text = block.slice(2, -2);
        return (
          <h3
            key={i}
            className="mt-8 text-xl font-normal"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            {text}
          </h3>
        );
      }
      // inline bold within paragraph
      const parts = block.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="mt-4 text-[15px] leading-[1.8]" style={{ color: "var(--text-body)" }}>
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} style={{ color: "var(--text-dark)" }}>
                {part.slice(2, -2)}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  return (
    <>
      <SectionWrapper tone="white" className="!pt-12 md:!pt-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold"
            style={{ color: "var(--teal-dark)" }}
          >
            ← Back to blog
          </Link>

          <div className="mt-6">
            <span
              className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white"
              style={{ backgroundColor: "var(--coral)" }}
            >
              {post.category}
            </span>
          </div>

          <h1
            className="mt-4 text-4xl font-normal leading-tight md:text-5xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-[12px]" style={{ color: "var(--text-muted)" }}>
            <span>{post.readTime} read</span>
            <span aria-hidden>·</span>
            <span>Quiet Ember Team</span>
          </div>
        </div>
      </SectionWrapper>

      {post.imageSrc && (
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] shadow-lg">
            <Image
              src={post.imageSrc}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width:1280px) 100vw, 1280px"
            />
          </div>
        </div>
      )}

      <SectionWrapper tone="warm50">
        <article className="mx-auto max-w-2xl">
          <p
            className="text-[17px] font-normal leading-relaxed"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            {post.excerpt}
          </p>

          {"body" in post && post.body ? renderBody(post.body as string) : null}

          <div
            className="mt-12 rounded-[1.25rem] border p-6"
            style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
          >
            <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
              Quiet Ember
            </p>
            <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--text-body)" }}>
              If this resonated, reach out — we will answer questions and help you find the right next step.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex rounded-full px-5 py-2.5 text-[13px] font-semibold text-white"
              style={{ backgroundColor: "var(--teal-dark)" }}
            >
              Get in touch →
            </Link>
          </div>
        </article>
      </SectionWrapper>

      {related.length > 0 && (
        <SectionWrapper tone="white">
          <div className="mx-auto max-w-4xl">
            <h2
              className="text-center text-2xl font-normal"
              style={{ fontFamily: "'Baskervville', Georgia, serif" }}
            >
              More from the blog
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group overflow-hidden rounded-[1.25rem] border shadow-sm transition-shadow hover:shadow-md"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-white)" }}
                >
                  {p.imageSrc && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={p.imageSrc}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-[1.02]"
                        sizes="(max-width:768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--coral)" }}>
                      {p.category}
                    </span>
                    <h3
                      className="mt-2 text-lg font-normal leading-tight"
                      style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-1 text-[13px]" style={{ color: "var(--text-muted)" }}>
                      {p.readTime} read
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}
    </>
  );
}
