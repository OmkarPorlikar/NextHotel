/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },

  images: {
    domains: ['yourdomain.com'], // change this to your actual domain
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
