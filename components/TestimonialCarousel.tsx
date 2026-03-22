"use client";

import TestimonialCard from "@/components/TestimonialCard";
import type { HomeTestimonial } from "@/lib/site-content";

export default function TestimonialCarousel({ items }: { items: HomeTestimonial[] }) {
  return (
    <div className="mt-12 -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3">
      {items.map((t, i) => (
        <div key={`${t.name}-${t.context}-${i}`} className="min-w-[min(100%,300px)] shrink-0 snap-center md:min-w-0">
          <TestimonialCard quote={t.quote} name={`${t.name} – ${t.context}`} />
        </div>
      ))}
    </div>
  );
}
