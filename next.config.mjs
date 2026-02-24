/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.oceanlinkglobal.com",
        // port: '',
        // pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
    ],
  },
};

export default nextConfig;
