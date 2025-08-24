/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Next.js 15 already has app directory support by default
  distDir: '.next',
};

module.exports = nextConfig;
