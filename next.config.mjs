/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Nutrimaxiboost-ss' : '',
  assetPrefix: isProd ? '/Nutrimaxiboost-ss/' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig