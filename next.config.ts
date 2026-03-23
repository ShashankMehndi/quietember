import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Parent folder has a workspace package.json but no node_modules; without this,
// Turbopack resolves CSS imports (e.g. tailwindcss) from the wrong directory.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      { source: "/conditions", destination: "/services", permanent: true },
      { source: "/fees-insurance", destination: "/pricing", permanent: true },
      {
        source: "/services/psychological-first-aid",
        destination: "/services/mental-health-first-aid",
        permanent: true,
      },
      {
        source: "/blog/what-is-psychological-first-aid",
        destination: "/blog/what-is-mental-health-first-aid",
        permanent: true,
      },
      { source: "/therapists/sarah-mitchell", destination: "/therapists/founder", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.quietember.in" }],
        destination: "https://quietember.in/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
