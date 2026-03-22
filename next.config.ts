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
      { source: "/fees-insurance", destination: "/faq", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
    ],
  },
};

export default nextConfig;
