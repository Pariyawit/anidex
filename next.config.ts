import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  images: {
    remotePatterns: [
      new URL('https://s4.anilist.co/file/anilistcdn/media/anime/**'),
    ],
  },
};

export default nextConfig;
