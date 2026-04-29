/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile Spline runtime for better compatibility
  transpilePackages: ['@splinetool/runtime'],

  // Image optimization config
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    // Enable AVIF format for better compression (fallback to WebP, PNG)
    formats: ['image/avif', 'image/webp'],
    // Increase cache time for optimized images
    minimumCacheTTL: 31536000, // 1 year
    // Enable dangerously allowing SVG
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Note: Optimized font loading is enabled by default in Next.js 14

  // Compression and optimization
  compress: true,

  // Production source maps for debugging (disable if bundle size is critical)
  productionBrowserSourceMaps: false,

  // SWC minification (faster than Terser)
  swcMinify: true,

  // Enable React strict mode (helps catch potential issues)
  reactStrictMode: true,

  // PoweredByHeader removal for security
  poweredByHeader: false,

  // Redirect non-www to www or vice versa (optional)
  // trailingSlash: false,

  // Headers for performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Cache static assets aggressively
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Specific cache for Spline scene
      {
        source: '/(.*)(.splinecode)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=2592000',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
