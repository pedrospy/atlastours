import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:locale/circuits/marrakech-sahara-atlas-11-days",
        destination: "/:locale/circuits/marrakech-sahara-atlas-3-days",
        permanent: true,
      },
      {
        source: "/:locale/circuits/grand-tour-maroc-17-jours",
        destination: "/:locale/circuits/marrakech-chefchaouen-3-days",
        permanent: true,
      },
      {
        source: "/:locale/circuits/grand-tour-maroc-4-jours",
        destination: "/:locale/circuits/marrakech-chefchaouen-3-days",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
