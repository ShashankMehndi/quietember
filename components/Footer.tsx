"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SITE_EMAIL, SITE_PHONE, SITE_PHONE_TEL, SITE_ADDRESS, SITE_NAME, SITE_TAGLINE } from "@/lib/site-content";

const quickLinksColA = [
  { href: "/about", label: "About" },
  { href: "/therapists", label: "Our team" },
  { href: "/services", label: "Services" },
];

const quickLinksColB = [
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/faq#pricing", label: "Pricing & booking" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden rounded-t-[2rem] text-white" style={{ backgroundColor: "var(--purple)" }}>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center pt-8 opacity-25">
        <svg width="280" height="120" viewBox="0 0 280 120" fill="none" aria-hidden>
          <path d="M140 8 C 70 8 20 40 20 80" stroke="currentColor" strokeWidth="1.2" />
          <path d="M140 8 C 210 8 260 40 260 80" stroke="currentColor" strokeWidth="1.2" />
          <path d="M140 24 C 85 24 45 48 45 85" stroke="currentColor" strokeWidth="1" />
          <path d="M140 24 C 195 24 235 48 235 85" stroke="currentColor" strokeWidth="1" />
          <path d="M140 40 C 100 40 70 58 70 90" stroke="currentColor" strokeWidth="0.8" />
          <path d="M140 40 C 180 40 210 58 210 90" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-24 md:px-6">
        <div className="mb-10 text-center">
          <p className="font-serif text-2xl font-normal md:text-3xl" style={{ fontFamily: "'Baskervville', Georgia, serif" }}>
            {SITE_NAME}
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-white/80 md:text-[13px]">{SITE_TAGLINE}</p>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
            Non-clinical mental health support · Hyderabad &amp; online
          </p>
        </div>

        <div className="grid gap-10 border-t border-white/15 pt-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/60">Get in touch</p>
            <ul className="mt-4 space-y-3 text-[14px] text-white/90">
              <li className="flex gap-2">
                <span className="text-white/50">☎</span>
                <a href={SITE_PHONE_TEL} className="hover:underline">
                  {SITE_PHONE}
                </a>
              </li>
              <li className="flex gap-2">
                <span className="text-white/50">✉</span>
                <a href={`mailto:${SITE_EMAIL}`} className="hover:underline">
                  {SITE_EMAIL}
                </a>
              </li>
              <li className="flex gap-2">
                <span className="text-white/50">⌖</span>
                <span>{SITE_ADDRESS}</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-[var(--mint)] px-6 py-3 text-[14px] font-semibold text-[var(--purple)] transition-colors hover:bg-white"
            >
              Get in touch
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <div className="mt-6 flex gap-4">
              <a href="#" className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20" aria-label="Facebook">
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20" aria-label="Instagram">
                <FaInstagram className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20" aria-label="X">
                <FaXTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/60">Quick links</p>
            <ul className="mt-4 space-y-2 text-[13px]">
              {quickLinksColA.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/85 hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/60">Quick links</p>
            <ul className="mt-4 space-y-2 text-[13px]">
              {quickLinksColB.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="text-white/85 hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-[12px] text-white/55 md:flex-row">
          <p>{new Date().getFullYear()} © {SITE_NAME}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-white"
            >
              top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
