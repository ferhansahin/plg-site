/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable x-powered-by header for security
  poweredByHeader: false,
  // Trailing slash for better compatibility with static hosts
  trailingSlash: true,
}

module.exports = nextConfig
