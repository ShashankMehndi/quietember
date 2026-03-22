import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Non-clinical mental health support: psychological first aid (1:1), neurodiversity awareness for teams, and parenting workshops. Online and in Hyderabad, Telangana.",
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quietember",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
