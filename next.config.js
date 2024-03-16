/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/page(/1)?',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
