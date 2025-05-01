/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/Nutrimaxiboost-ss', 
  assetPrefix: '/Nutrimaxiboost-ss/',
}

export default nextConfig
