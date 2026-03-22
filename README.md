# Quiet Ember (`quietember`)

Next.js site for Quiet Ember — emotional well-being support (Hyderabad & online).

## Run locally

```bash
cd quietember
npm install
npm run dev
```

Open **http://localhost:3011**.

## Project layout

| Area | Path |
|------|------|
| Site copy & data | `lib/site-content.ts` |
| Pages (App Router) | `app/(site)/` |
| Internal / design refs | `app/(internal)/`, `brand-guidelines/` |

## Custom domain (`quietember.in`)

Canonical URLs in code use **`https://quietember.in`** ([`lib/site-content.ts`](lib/site-content.ts)).

### If the site does not load on `quietember.in`

Vercel currently expects DNS you control to point at their edge. A common blocker is **nameservers still set to parking** (e.g. `ns1.dns-parking.com`) instead of your registrar’s DNS (e.g. Hostinger).

1. **Registrar / Hostinger:** For `quietember.in`, set **nameservers** to **Hostinger** (or whichever DNS host you use). Do not leave generic “parking” nameservers if you edit DNS in Hostinger — the zone Hostinger shows will not apply until NS point there.
2. **DNS records** (in Hostinger **DNS Zone** for `quietember.in`; keep **MX** and mail **TXT** records for email):
   - **A** · Name `@` (apex) · Value **`76.76.21.21`** (use the exact value from **Vercel → Project → Settings → Domains → quietember.in** if it differs).
   - **CNAME** · Name **`www`** · Target **`cname.vercel-dns.com`** (again, match Vercel’s UI if shown differently).
3. **Vercel:** **Settings → Domains** → confirm `quietember.in` is attached to this project and wait until **SSL** is valid.

`www.quietember.in` redirects to `https://quietember.in` via [`next.config.ts`](next.config.ts) once both hostnames hit Vercel.
