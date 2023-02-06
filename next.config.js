/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'w.wallhaven.cc'
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      }
    ]
  }
}

module.exports = nextConfig
