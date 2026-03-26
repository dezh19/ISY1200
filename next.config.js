/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    domains: [],
  },
  // Optimize for production
  compress: true,
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['components'],
  },
}

module.exports = nextConfig
