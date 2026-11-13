import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  experimental: {
    useLightningcss: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
};

export default nextConfig;
