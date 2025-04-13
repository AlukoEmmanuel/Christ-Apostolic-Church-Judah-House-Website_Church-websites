/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    optimizeCss: false,
  },
  images: {
    remotePatterns: [],
  },
}

module.exports = nextConfig;
