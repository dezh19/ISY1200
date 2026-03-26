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
  // Netlify-compatible output configuration
  output: process.env.NETLIFY ? 'standalone' : undefined,
  // Optimize for production
  swcMinify: true,
  compress: true,
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['components'],
  },
}

module.exports = nextConfig
