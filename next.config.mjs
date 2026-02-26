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
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
      },
    ],
  },
};

export default nextConfig;
