/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@splinetool/runtime'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;
