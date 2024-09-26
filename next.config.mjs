/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.oceanlinkglobal.com',
        // port: '',
        // pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
