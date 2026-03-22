# Quiet Ember — completion spec (from Balancia / VamTam reference)

This document is a **single source of truth** for finishing the public Quiet Ember site when using **[Balancia](https://balancia.vamtam.com/)** (VamTam WordPress demo) as the **layout, section structure, and demo copy** reference, while keeping the **Quiet Ember** brand (name, logo, palette, tone where you choose).

Last aligned with repo paths under `c:\Users\iamsh\Videos\Project Web\quiteember`.

---

## 1. Goals and non-goals

### Goals

- **Visual and IA parity** with Balancia where it improves the therapy-practice funnel: hero, services grid, testimonials, FAQ blocks, fees/insurance patterns, therapist listing, blog index, contact/booking flows.
- **One content hub**: extend [`lib/site-content.ts`](../lib/site-content.ts) (or split into `lib/content/*` later) so marketing copy is not scattered across dozens of JSX files without reason.
- **Production readiness**: real contact data, real imagery rights, working forms, correct legal/footer, SEO, and accessibility.

### Non-goals (unless you explicitly expand scope)

- Running WordPress or importing VamTam PHP/CSS as the runtime (the app is **Next.js**).
- Pixel-perfect clone of Balancia’s theme assets (fonts may differ; Quiet Ember uses Baskervville + system stack in CSS variables).
- Copy-pasting **Balancia** or **VamTam** trademarks into customer-facing production text (demo placeholders must be replaced).

---

## 2. Reference materials in this repo

| Resource | Location / URL | Use |
|----------|----------------|-----|
| Live reference | `https://balancia.vamtam.com/` | Compare section order, microcopy, and component density. |
| Local HTML mirror | [`external/balancia-vamtam-mirror/`](../external/balancia-vamtam-mirror/) | Offline diff: blog posts, therapist pages, long-form article HTML, embedded assets. Use for **copy extraction** and **image URL discovery** (respect copyright; re-license or replace). |
| Shared site data | [`lib/site-content.ts`](../lib/site-content.ts) | FAQs, services, blog cards, therapists, testimonials, phone/email/address, insurer names. |
| Global styles / tokens | [`app/globals.css`](../app/globals.css) | `--teal`, `--coral`, `--purple`, `--cream`, etc. |

**Workflow tip:** When Balancia adds a section you want, open the mirrored `index.html` for that route, search for heading text, then port structure into the matching Next page and optionally move strings into `site-content.ts`.

---

## 3. Information architecture (implemented routes)

Public site layout: [`app/(site)/layout.tsx`](../app/(site)/layout.tsx) (Navbar + Footer).

| Route | File | Notes vs Balancia |
|-------|------|-------------------|
| `/` | [`app/(site)/page.tsx`](../app/(site)/page.tsx) | Split hero (`ScrollHero`), mission accordion, services, partners strip, testimonials `#testimonials`, CTA, book form, what-to-expect, FAQ preview, blog preview. |
| `/about` | [`app/(site)/about/page.tsx`](../app/(site)/about/page.tsx) | Verify section stack vs Balancia “About”. |
| `/therapists` | [`app/(site)/therapists/page.tsx`](../app/(site)/therapists/page.tsx) | **No** `/therapists/[slug]` yet; Balancia has per-therapist pages (mirror has `therapists/*/index.html`). |
| `/services` | [`app/(site)/services/page.tsx`](../app/(site)/services/page.tsx) | Five services including Assessment. |
| `/services/[slug]` | [`app/(site)/services/[slug]/page.tsx`](../app/(site)/services/[slug]/page.tsx) | `generateStaticParams` from `serviceSlugs`. |
| `/conditions` | [`app/(site)/conditions/page.tsx`](../app/(site)/conditions/page.tsx) | Focus areas list + FAQ tie-in. |
| `/fees-insurance` | [`app/(site)/fees-insurance/page.tsx`](../app/(site)/fees-insurance/page.tsx) | Uses `partnerPlaceholders` from content lib. |
| `/faq` | [`app/(site)/faq/page.tsx`](../app/(site)/faq/page.tsx) | Category blocks via `faqSections`. |
| `/blog` | [`app/(site)/blog/page.tsx`](../app/(site)/blog/page.tsx) | **No** `/blog/[slug]` article pages; Balancia has full posts (mirror under `2025/`, `2026/`). |
| `/contact` | [`app/(site)/contact/page.tsx`](../app/(site)/contact/page.tsx) | Default `ContactForm`. |
| `/privacy`, `/terms` | [`app/(site)/privacy/page.tsx`](../app/(site)/privacy/page.tsx), [`terms/page.tsx`](../app/(site)/terms/page.tsx) | Replace template text with counsel-approved copy. |

Internal / design (not part of Balancia parity): `app/(internal)/*`, `CommentOverlay`, brand guidelines.

---

## 4. Global constants — replace before launch

All defined in [`lib/site-content.ts`](../lib/site-content.ts):

| Constant | Current demo value | Action |
|----------|-------------------|--------|
| `SITE_PHONE` | `(422) 820 820` | Set to real display number. |
| `SITE_PHONE_TEL` | `+14228208200` | E.164 for `tel:` links; must match practice. |
| `SITE_EMAIL` | `hello@balanciacounseling.demo` | Real inbox or CRM address. |
| `SITE_ADDRESS` | NYC-style demo | Real address or remove if virtual-only. |
| `partnerPlaceholders` | Major US carriers | Replace with **actual** accepted networks or “We are out-of-network; superbill provided” list. |

**Footer legal:** [`components/Footer.tsx`](../components/Footer.tsx) still shows `2026 © VamTam. All rights reserved` — replace with **Quiet Ember** (or your legal entity) and dynamic year if desired.

**Social links:** Footer Facebook / Instagram / X use `href="#"` — set real URLs or remove.

**“top” link:** Footer `href="#"` — implement scroll-to-top (`#` or `window.scrollTo`) or remove.

---

## 5. Copy and brand voice — known cleanup

### 5.1 Third-party names to remove in production

- **Testimonials** in [`homeTestimonials`](../lib/site-content.ts): several quotes still say **“Balancia”**; rewrite to **Quiet Ember** (or neutral “this practice / my therapist”) so you do not imply false affiliation.
- **FAQ answers** use first-person **“I”** in places (matches Balancia therapist voice). Decide: single-practitioner voice vs **“we”** for a group practice and update consistently across FAQ + service pages.

### 5.2 Optional: `SITE_URL`

- Digital card still shows `www.quietember.com` as plain text ([`app/(internal)/digital-card/page.tsx`](../app/(internal)/digital-card/page.tsx)). Add `SITE_URL` or `SITE_DOMAIN` to `site-content.ts` and reuse in footer/metadata/Open Graph later.

---

## 6. Media and imagery

### 6.1 Local assets (good)

- [`public/images/`](../public/images/) — used for **home service cards**, **blog cards**, and **service detail** heroes (`serviceImages` in [`services/[slug]/page.tsx`](../app/(site)/services/[slug]/page.tsx)).

### 6.2 Placeholders still on picsum.photos

Replace with licensed photography or your own assets (and tighten `alt` text everywhere — many are empty today).

| Area | Approximate usage |
|------|-------------------|
| [`TherapistCard`](../components/TherapistCard.tsx) | `https://picsum.photos/seed/${imageSeed}/...` |
| [`ArchImage`](../components/ArchImage.tsx) | Default fallback to picsum |
| [`BlogPostCard`](../components/BlogPostCard.tsx) | Fallback when `imageSrc` missing |
| Contact, fees, conditions, therapists CTA, home sections | Various `picsum.photos/seed/...` in page files |

**next.config.ts** allows `picsum.photos` in `images.remotePatterns`; remove when no longer needed.

### 6.3 Hero video / rich media

Balancia may use video or sliders on the hero. Quiet Ember uses [`ScrollHero`](../components/ScrollHero.tsx) (split layout + scroll-pinned panels). If you need **Vimeo hero**, follow workspace UI rules: embed via oEmbed in hero section.

---

## 7. Forms and integrations

| Form | File | Current behavior |
|------|------|------------------|
| Contact (default) | [`ContactForm`](../components/ContactForm.tsx) | Client-side `preventDefault` + “thank you” UI only — **no** email/API. |
| Book session (home) | Same component, `variant="bookSession"` | Same — no backend. |

**To complete:**

1. Choose provider (Formspree, Resend, Getform, server Action + SMTP, CRM webhook, etc.).
2. Add server action or API route with validation (e.g. Zod) and spam protection (honeypot, Turnstile).
3. Map `bookSession` fields to your intake workflow.
4. **Privacy policy** must mention what you collect and where it is stored.

**Contact page** mentions “Live chat — coming soon” — either implement or remove.

---

## 8. Blog: gap analysis

**Today:** [`blogPosts`](../lib/site-content.ts) drives [`blog/page.tsx`](../app/(site)/blog/page.tsx) only.

**Balancia / mirror:** Many full articles exist under `external/balancia-vamtam-mirror/**/index.html`.

**To complete a real blog:**

1. Add [`app/(site)/blog/[slug]/page.tsx`](../app/(site)/blog/) with `generateStaticParams` from `blogPosts` (or a CMS).
2. Add `body` field (MDX, CMS HTML, or portable text) per post.
3. Migrate slugs/titles to **original** or properly licensed copy (do not publish VamTam demo articles as your own without rights).
4. Optional: categories archive pages, RSS, `sitemap.xml`.

---

## 9. Therapists: gap analysis

**Today:** Single list page; photos via picsum seeds from [`therapists`](../lib/site-content.ts).

**Balancia / mirror:** Individual bios (e.g. `therapists/emily-johnson/index.html`).

**To complete:**

1. Add `app/(site)/therapists/[slug]/page.tsx` + `generateStaticParams`.
2. Extend therapist objects: `longBio`, `credentials`, `specialties`, `bookingLink`, real `imageSrc`.
3. Link from cards to detail routes.

---

## 10. SEO and metadata

**Today:** Root [`app/layout.tsx`](../app/layout.tsx) has single `title` / `description` for entire site.

**To complete:**

- `export const metadata` or `generateMetadata` per **major route** (home, services, contact, blog).
- Open Graph / Twitter images (`opengraph-image` or metadata API).
- Canonical URLs when deploying to final domain.
- `robots.txt` / `sitemap.xml` if indexable.

---

## 11. Accessibility checklist

- Replace empty `alt=""` on meaningful photos with descriptive alt or `alt=""` only when decorative (and mark decorative consistently).
- Ensure contrast on coral/teal on cream (spot-check with WCAG tool).
- Keyboard: mobile nav drawer, dropdowns ([`Navbar`](../components/Navbar.tsx)), focus states.
- Forms: associate labels (book session uses split “Your name” fields but ids `firstName` / `lastName` — confirm copy matches field semantics).

---

## 12. Engineering hygiene

| Item | Status / action |
|------|-----------------|
| `npm run build` | Should pass before release. |
| `npm run lint` | Fails on vendored JS under `external/balancia-vamtam-mirror/_assets/*.js` — **exclude `external/` from ESLint** in `eslint.config` or move mirror outside repo. |
| Comment overlay | [`CommentOverlay`](../components/CommentOverlay.tsx) — decide if it ships to production or is dev-only. |
| API route | [`app/api/comments/route.ts`](../app/api/comments/route.ts) — unused import warning; verify security if exposed. |

---

## 13. Suggested completion phases

**Phase A — Truth in content (1–2 days)**  
Replace `SITE_*`, footer copyright, social URLs, testimonial names of “Balancia”, insurer list, VamTam line.

**Phase B — Media (2–5 days)**  
Swap picsum URLs for `/public/images` or a CDN; add alt text; optional hero video.

**Phase C — Forms (1–3 days)**  
Wire Contact + book session to real backend; spam protection; confirmation emails.

**Phase D — Depth pages (3–7 days)**  
Blog `[slug]`, therapist `[slug]`, optional CMS.

**Phase E — Polish (ongoing)**  
Per-route metadata, sitemap, lint ignore for `external/`, performance (Image `sizes`, `priority` on LCP).

---

## 14. Quick file index (most touched when mirroring Balancia)

| Concern | Primary files |
|---------|----------------|
| Phone / email / address / FAQs / lists | [`lib/site-content.ts`](../lib/site-content.ts) |
| Header / nav / mobile | [`components/Navbar.tsx`](../components/Navbar.tsx) |
| Footer | [`components/Footer.tsx`](../components/Footer.tsx) |
| Home layout | [`app/(site)/page.tsx`](../app/(site)/page.tsx), [`ScrollHero.tsx`](../components/ScrollHero.tsx), [`HomeMissionAccordion.tsx`](../components/HomeMissionAccordion.tsx), [`TestimonialCarousel.tsx`](../components/TestimonialCarousel.tsx) |
| Services | [`app/(site)/services/page.tsx`](../app/(site)/services/page.tsx), [`[slug]/page.tsx`](../app/(site)/services/[slug]/page.tsx), [`ServiceCard.tsx`](../components/ServiceCard.tsx) |
| FAQ UI | [`FAQAccordion.tsx`](../components/FAQAccordion.tsx), [`faq/page.tsx`](../app/(site)/faq/page.tsx) |
| CTA bands | [`CTABanner.tsx`](../components/CTABanner.tsx) |
| Forms | [`ContactForm.tsx`](../components/ContactForm.tsx) |

---

## 15. Legal / ethical reminder

The VamTam Balancia demo is **not** your practice. Before launch: replace all demo contact info, remove **VamTam** copyright, ensure testimonials are **real or clearly marked as illustrative** per your jurisdiction’s advertising rules, and use only imagery and blog text you have rights to publish.

---

*End of spec — update this file as routes and content modules change.*
