/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "pradeepelectrode.com", // non-www domain
          },
        ],
        destination: "https://www.pradeepelectrode.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
