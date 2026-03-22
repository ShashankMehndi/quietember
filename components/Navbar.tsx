"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceSlugs, servicesBySlug } from "@/lib/site-content";

const aboutLinks = [
  { href: "/about", label: "About Quiet Ember" },
  { href: "/therapists", label: "Our team" },
  { href: "/blog", label: "Blog" },
  { href: "/faq#pricing", label: "Pricing & booking" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
];

const serviceLinks = [
  ...serviceSlugs.map((slug) => ({
    href: `/services/${slug}`,
    label: servicesBySlug[slug].title,
  })),
  { href: "/services", label: "All services" },
];

const SCROLL_THRESHOLD_PX = 56;
const HOVER_CLOSE_MS = 160;

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), HOVER_CLOSE_MS);
  };

  useEffect(() => () => cancelClose(), []);

  useEffect(() => {
    function close(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div
      className="relative"
      ref={ref}
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        onClick={() => {
          cancelClose();
          setOpen((o) => !o);
        }}
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-[14px] font-medium transition-colors hover:bg-black/[0.04] hover:text-[var(--purple)]"
        style={{ color: "var(--text-dark)" }}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <div
            className="absolute left-0 top-full z-50 min-w-[220px] pt-2"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl border py-2 shadow-2xl backdrop-blur-xl ring-1 ring-black/[0.04]"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.98)", borderColor: "var(--border)" }}
            >
              {items.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="block px-4 py-2.5 text-[13px] transition-colors hover:bg-[var(--warm-50)] hover:text-[var(--purple)]"
                  style={{ color: "var(--text-body)" }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/therapists", label: "Our team" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/faq#pricing", label: "Pricing & booking" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-[100] transition-shadow duration-300 ease-out ${
        scrolled
          ? "shadow-[0_6px_32px_rgba(53,42,68,0.10)]"
          : "shadow-[0_2px_16px_rgba(53,42,68,0.06)]"
      }`}
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-3.5">
        <nav className="hidden flex-1 items-center gap-1.5 lg:flex">
          <Dropdown label="About" items={aboutLinks} />
          <Dropdown label="Services" items={serviceLinks} />
          <Link
            href="/contact"
            className="rounded-lg px-3 py-2 text-[14px] font-medium transition-colors hover:bg-black/[0.04] hover:text-[var(--purple)]"
            style={{ color: "var(--text-dark)" }}
          >
            Contact
          </Link>
        </nav>

        <Link href="/" className="shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <Image
            src="/logo-tagline.png"
            alt="Quiet Ember — Emotional Well-being and Support"
            width={200}
            height={64}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        <div className="flex flex-1 items-center justify-end gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full px-6 py-2.5 text-[13px] font-semibold shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.99] md:inline-flex"
            style={{ backgroundColor: "white", color: "var(--purple)", border: "1.5px solid var(--purple)" }}
          >
            Get in touch
            <span className="flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: "var(--purple)" }}>
              <ArrowRight className="h-3.5 w-3.5 text-white" />
            </span>
          </Link>
          <button
            type="button"
            className="rounded-full p-2 transition-colors hover:bg-black/[0.06] lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" style={{ color: "var(--text-dark)" }} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed right-0 top-0 z-[201] flex h-full w-[min(100%,320px)] flex-col border-l shadow-2xl lg:hidden"
              style={{ backgroundColor: "#ffffff", borderColor: "var(--border)" }}
            >
              <div className="flex items-center justify-between border-b p-4" style={{ borderColor: "var(--border)" }}>
                <span className="text-[15px] font-semibold" style={{ color: "var(--text-dark)" }}>
                  Menu
                </span>
                <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 overflow-y-auto p-4">
                {mobileLinks.map((l) => (
                  <Link
                    key={l.href + l.label}
                    href={l.href}
                    className="rounded-xl px-3 py-3 text-[15px] font-medium transition-colors hover:bg-[var(--warm-50)]"
                    style={{ color: "var(--text-dark)" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full py-3 text-[14px] font-semibold text-[var(--cream)] transition-transform active:scale-[0.99]"
                  style={{ backgroundColor: "var(--purple)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
