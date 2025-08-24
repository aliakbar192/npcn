import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Ensure paths are resolved correctly
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Use src directory as source
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  // Point to src directory for app router
  experimental: {
    // This is handled more safely in the JS config
  } as any,
};

export default nextConfig;
