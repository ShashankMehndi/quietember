"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm({ variant = "default" }: { variant?: "default" | "bookSession" }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[1.25rem] border p-8 text-center"
        style={{ backgroundColor: "var(--warm-50)", borderColor: "var(--border)" }}
      >
        <p className="text-lg font-normal" style={{ fontFamily: "'Baskervville', Georgia, serif", color: "var(--text-dark)" }}>
          Thank you — we have received your message.
        </p>
        <p className="mt-2 text-[14px]" style={{ color: "var(--text-muted)" }}>
          We typically respond within 24 hours with next steps.
        </p>
      </motion.div>
    );
  }

  const input =
    "w-full rounded-xl border px-4 py-3 text-[14px] outline-none transition-shadow focus:ring-2 focus:ring-[var(--teal)]";
  const inputStyle = { borderColor: "var(--border)", backgroundColor: "var(--warm-white)", color: "var(--text-dark)" };
  const labelClass = "mb-1 block text-[12px] font-semibold uppercase tracking-wider";
  const labelStyle = { color: "var(--text-muted)" };

  const isBook = variant === "bookSession";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isBook ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelClass} style={labelStyle}>
              Your name
            </label>
            <input id="firstName" name="firstName" required className={input} style={inputStyle} autoComplete="given-name" />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass} style={labelStyle}>
              Last name
            </label>
            <input id="lastName" name="lastName" required className={input} style={inputStyle} autoComplete="family-name" />
          </div>
        </div>
      ) : (
        <div>
          <label htmlFor="name" className={labelClass} style={labelStyle}>
            Name
          </label>
          <input id="name" name="name" required className={input} style={inputStyle} />
        </div>
      )}
      <div>
        <label htmlFor="email" className={labelClass} style={labelStyle}>
          Email
        </label>
        <input id="email" name="email" type="email" required className={input} style={inputStyle} />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass} style={labelStyle}>
          Phone number
        </label>
        <input id="phone" name="phone" type="tel" className={input} style={inputStyle} />
      </div>
      <div>
        <label htmlFor="service" className={labelClass} style={labelStyle}>
          What are you interested in?
        </label>
        <select id="service" name="service" className={input} style={inputStyle} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option value="mhfa">Mental Health First Aid (1:1 session)</option>
          <option value="neurodiversity">Neurodiversity Awareness (group / corporate)</option>
          <option value="parenting">Parenting Workshop</option>
          <option value="tipt">Trauma-Informed Practice Training (TIPT)</option>
          <option value="free-call">Free 15-min introductory call</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="preferredDate" className={labelClass} style={labelStyle}>
            Preferred date <span className="font-normal normal-case opacity-80">(optional)</span>
          </label>
          <input id="preferredDate" name="preferredDate" type="date" className={input} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="preferredTime" className={labelClass} style={labelStyle}>
            Preferred time <span className="font-normal normal-case opacity-80">(optional)</span>
          </label>
          <input id="preferredTime" name="preferredTime" type="time" className={input} style={inputStyle} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={labelClass} style={labelStyle}>
          Message
        </label>
        <textarea id="message" name="message" rows={4} required className={input} style={inputStyle} />
      </div>
      <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
        You can also email us directly. If you pick a preferred date and time, we&apos;ll receive it with your message like a short booking request.
      </p>
      <button
        type="submit"
        className="w-full rounded-full py-3.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto sm:px-10"
        style={{ backgroundColor: "var(--teal-dark)" }}
      >
        {isBook ? "Submit" : "Send message →"}
      </button>
    </form>
  );
}
