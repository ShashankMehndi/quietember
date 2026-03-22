"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const rotatingWords = ["see", "hear"];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % rotatingWords.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block w-[1.6em] text-center align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingWords[index]}
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const portraitScale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.92, 1, 1, 0.92]);
  const portraitBlur = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [8, 0, 0, 8]);
  const portraitOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const panel2Opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const panel2Blur = useTransform(scrollYProgress, [0.15, 0.35], [15, 0]);

  const panel3Opacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const panel3Blur = useTransform(scrollYProgress, [0.55, 0.75], [15, 0]);

  return (
    <>
      {/* Panel 1 — Balancia-style split hero (copy left, image right on large screens) */}
      <section className="relative min-h-[100vh] overflow-hidden" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto grid min-h-[100vh] max-w-[1280px] grid-cols-1 items-center gap-10 px-6 py-24 lg:grid-cols-2 lg:gap-14 lg:py-16">
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-4xl font-normal leading-[1.1] md:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              Emotional well-being support, when you need it.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "4rem" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mx-auto mt-6 h-[2px] lg:mx-0"
              style={{ backgroundColor: "var(--purple)" }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[15px] font-medium lg:justify-start"
              style={{ color: "var(--text-body)" }}
            >
              <span className="h-px w-8 bg-[var(--purple)]/30" />
              <span>
                <strong>Online</strong> and <strong>in-person</strong> sessions.
              </span>
              <span className="h-px w-8 bg-[var(--purple)]/30" />
            </motion.p>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 max-w-xl text-2xl font-normal md:text-3xl lg:text-4xl"
              style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
            >
              Stop carrying this <em>alone.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 max-w-lg text-[15px] leading-relaxed"
              style={{ color: "var(--text-body)" }}
            >
              Psychological first aid, neurodiversity awareness, and parenting workshops — online and in Hyderabad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-10"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-[15px] font-semibold text-[var(--cream)] shadow-lg transition-all hover:brightness-110"
                style={{ backgroundColor: "var(--purple)" }}
              >
                Get in touch
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="order-1 relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-[2rem] shadow-xl lg:order-2 lg:mx-0 lg:max-h-[min(88vh,720px)] lg:max-w-none"
          >
            <Image
              src="/images/gettyimages-1471373623-2048x2048-2.webp"
              alt=""
              fill
              className="object-cover"
              priority
              sizes="(max-width:1024px) 90vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-[var(--purple)]/15 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Panel 2 + 3 — Scroll-pinned portrait with side text */}
      <section ref={containerRef} className="relative" style={{ height: "300vh" }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden" style={{ backgroundColor: "var(--cream)" }}>
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
            {/* Portrait side */}
            <motion.div
              className="relative mx-auto aspect-[2/3] w-full max-w-[420px] overflow-hidden rounded-[2.5rem]"
              style={{
                scale: portraitScale,
                opacity: portraitOpacity,
                filter: useTransform(portraitBlur, (v) => `blur(${v}px)`),
              }}
            >
              <Image
                src="/images/GettyImages-1463774501.webp"
                alt="Person finding peace"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-[var(--purple)]/20 to-transparent" />
            </motion.div>

            {/* Text side — two states based on scroll progress */}
            <div className="relative min-h-[320px]">
              {/* State 1: "We see/hear you" + "You're not alone" */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center"
                style={{
                  opacity: useTransform(scrollYProgress, [0, 0.15, 0.45, 0.55], [1, 1, 1, 0]),
                }}
              >
                <h3
                  className="text-4xl font-normal md:text-5xl lg:text-[3.5rem]"
                  style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
                >
                  We <RotatingWord /> you.
                </h3>

                <motion.div style={{ opacity: panel2Opacity, filter: useTransform(panel2Blur, (v) => `blur(${v}px)`) }}>
                  <h2
                    className="mt-8 text-2xl font-normal md:text-3xl"
                    style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
                  >
                    You&apos;re not alone in this.
                  </h2>
                  <h3
                    className="mt-3 text-xl font-normal md:text-2xl"
                    style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-body)" }}
                  >
                    Does this <em>sound</em> familiar?
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
                    Exhausted from the constant worry?<br />
                    Lying awake at night replaying conversations?<br />
                    Relationships feel strained, and you barely recognize yourself?
                  </p>
                  <a href="#hero-benefits" className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--purple)" }}>
                    <ChevronDown className="h-5 w-5 animate-bounce" />
                  </a>
                </motion.div>
              </motion.div>

              {/* State 2: "The good news?" + "You can feel better" */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center"
                style={{
                  opacity: useTransform(scrollYProgress, [0.45, 0.55, 1], [0, 1, 1]),
                }}
              >
                <motion.div style={{ opacity: panel3Opacity, filter: useTransform(panel3Blur, (v) => `blur(${v}px)`) }}>
                  <h3
                    className="text-xl font-normal md:text-2xl"
                    style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-body)" }}
                  >
                    The <em>good</em> news?
                  </h3>
                  <h2
                    className="mt-4 text-3xl font-normal md:text-4xl lg:text-5xl"
                    style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}
                  >
                    You can feel better.
                  </h2>
                  <h3
                    className="mt-3 text-lg font-normal md:text-xl"
                    style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-body)" }}
                  >
                    Not overnight, but step by step
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed" style={{ color: "var(--text-body)" }}>
                    Quiet Ember offers structured, compassionate support — from a single PFA session to workshops for teams and parents. Explore what we offer and reach out when you are ready.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
