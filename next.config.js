/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/owner",
        destination: "/owner/dashboard",
        permanent: true,
      },
      {
        source: "/freelancer",
        destination: "/freelancer/dashboard",
        permanent: true,
      },
      {
        source: "/admin",
        destination: "/admin/dashboard",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
