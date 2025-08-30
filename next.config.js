/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enables static site generation
  // Don't specify distDir to use the default "out" directory
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure paths are resolved correctly
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // Use src directory as source
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },

  // Removing trailingSlash to comply with static export requirements
  trailingSlash: true,
  
  // Point to src directory for app router
  experimental: {},
};

module.exports = nextConfig;

module.exports = nextConfig;
