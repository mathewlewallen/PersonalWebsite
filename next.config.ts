import type { NextConfig } from 'next';
import { createSecureHeaders } from 'next-secure-headers';
import { env } from '@cc/env';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  distDir: 'dist',
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          // HSTS Preload: https://hstspreload.org/
          forceHTTPSRedirect: [
            true,
            { maxAge: 63072000, includeSubDomains: true, preload: true },
          ],
        }),
      },
    ];
  },
};

export default nextConfig;
