"use client";

import FAQAccordion from "@/components/FAQAccordion";

const items = [
  {
    q: "Who We Are",
    a: "We're a team of licensed counseling psychologists united by one belief: therapy should feel like a safe conversation with someone who truly understands. Each therapist brings unique expertise, but we all share a commitment to meeting you exactly where you are—without judgment, without pressure.",
  },
  {
    q: "A Judgement Free Space",
    a: "This is where you don't have to have it all together. Where messy is okay. Where your feelings are valid—all of them. You can be honest here. We'll listen without judging, without fixing, without telling you how you \"should\" feel. Just understanding. Just support.",
  },
  {
    q: "Our Approach to Therapy",
    a: "We use proven methods like CBT, EMDR, and attachment theory—but we tailor everything to you. Your therapy isn't one-size-fits-all. It's built around your story, your pace, your needs. Some need tools. Some need space to process. Most need both. We'll figure it out together.",
  },
];

export default function HomeMissionAccordion() {
  return <FAQAccordion items={items} defaultOpen={null} />;
}
