/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  output: 'export',  // Add this line to enable static export
};

module.exports = nextConfig;
