/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Performance monitoring
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP'],
  },
};

export default nextConfig;
