/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        child_process: false,
        net: 'empty',
        dns: 'empty',
        tls: 'empty',
      }
    }
    return config
  }
};

module.exports = nextConfig;
