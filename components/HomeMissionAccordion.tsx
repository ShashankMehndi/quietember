"use client";

import FAQAccordion from "@/components/FAQAccordion";

const items = [
  {
    q: "Who We Are",
    a: "Quiet Ember is a non-clinical mental health support initiative rooted in empathy, accessibility, and trauma-informed care. We work across India with educators, corporate teams, parents, students, and individuals — helping normalise emotional wellbeing and build spaces where people feel seen, supported, and able to ask for help without shame.",
  },
  {
    q: "Acceptance and Confidentiality",
    a: "We create environments rooted in acceptance — where you can show up authentically. What you share stays private: we prioritise confidentiality and trust so you feel secure exploring your experiences with us.",
  },
  {
    q: "Our Approach",
    a: "Our approach is empathetic, holistic, lived, non-judgemental, and trauma-informed.",
  },
];

export default function HomeMissionAccordion() {
  return <FAQAccordion items={items} defaultOpen={null} />;
}
