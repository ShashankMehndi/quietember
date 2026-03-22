import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/internal/", "/digital-card/", "/brand-guidelines/", "/landing-page/", "/website/", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
