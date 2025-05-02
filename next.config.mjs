/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Nutrimaxiboost-ss' : '',
  assetPrefix: isProd ? '/Nutrimaxiboost-ss/' : '',
  images: {
    unoptimized: true, // Unoptimized for GitHub Pages
    // Make sure to serve images correctly from the public folder
    loader: 'default', // Use default loader (no CDN optimizations)
  },
};

export default nextConfig;
