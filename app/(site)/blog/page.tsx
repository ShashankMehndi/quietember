"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import BlogPostCard from "@/components/BlogPostCard";
import { blogPosts } from "@/lib/site-content";
import Image from "next/image";
import Link from "next/link";

// Static metadata is exported from the server-component version; this client-component
// page has its <title> controlled by the parent layout metadata template.

const cats = ["All", "Anxiety", "Relationships", "Grief", "Family", "Self-care"];

export default function BlogPage() {
  const [filter, setFilter] = useState("All");
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);
  const showFeatured = filter === "All";
  const gridPosts = filter === "All" ? rest : blogPosts.filter((p) => p.category === filter);

  return (
    <>
      <SectionWrapper tone="white" className="!pt-12 md:!pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--coral)" }}>
            Blog
          </p>
          <h1
            className="mt-3 text-4xl font-normal md:text-5xl"
            style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
          >
            Words for the moments you need them
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
            Gentle ideas — no pressure, no noise. Take what helps and leave the rest.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="warm50">
        <div className="mx-auto max-w-6xl">
          {showFeatured && (
          <Link href={`/blog/${featured.slug}`} className="group mb-10 block overflow-hidden rounded-[1.5rem] border shadow-md lg:grid lg:grid-cols-2" style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-white)" }}>
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
              <Image
                src={featured.imageSrc ?? `https://picsum.photos/seed/featured/1200/800`}
                alt=""
                fill
                className="object-cover transition-transform group-hover:scale-[1.02]"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--coral)" }}>
                Featured · {featured.category}
              </span>
              <h2 className="mt-3 text-2xl font-normal md:text-3xl" style={{ fontFamily: "'Baskervville', Georgia, serif" }}>
                {featured.title}
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {featured.excerpt}
              </p>
              <span className="mt-4 text-[12px]" style={{ color: "var(--text-muted)" }}>
                {featured.readTime} read
              </span>
            </div>
          </Link>
          )}

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className="rounded-full border px-4 py-2 text-[13px] font-medium transition-colors"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: filter === c ? "var(--teal-dark)" : "var(--warm-white)",
                  color: filter === c ? "white" : "var(--text-body)",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((p) => (
              <BlogPostCard key={p.slug} href={`/blog/${p.slug}`} {...p} />
            ))}
          </div>
          {gridPosts.length === 0 && (
            <p className="py-12 text-center text-[14px]" style={{ color: "var(--text-muted)" }}>
              More in this category soon.
            </p>
          )}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="cream">
        <div
          className="mx-auto max-w-xl rounded-[1.5rem] border px-6 py-10 text-center"
          style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border)" }}
        >
          <h2 className="text-xl font-normal" style={{ fontFamily: "'Baskervville', Georgia, serif" }}>
            Gentle insights, monthly
          </h2>
          <p className="mt-2 text-[13px]" style={{ color: "var(--text-muted)" }}>
            No spam — just warmth when we publish something new.
          </p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 rounded-full border px-4 py-2.5 text-[14px]"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-50)" }}
            />
            <button type="button" className="rounded-full px-5 py-2.5 text-[13px] font-semibold text-white" style={{ backgroundColor: "var(--teal-dark)" }}>
              Join
            </button>
          </form>
        </div>
      </SectionWrapper>
    </>
  );
}
