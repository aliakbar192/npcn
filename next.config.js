/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
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
  experimental: {},
};

module.exports = nextConfig;
