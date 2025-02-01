import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['upload.wikimedia.org'], // Allow loading images from this domain
  },
};

export default nextConfig;
