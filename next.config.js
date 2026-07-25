/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> deploy the `out/` folder directly to Cloudflare Pages.
  // No server runtime, no Next Image Optimization API (unsupported on
  // Cloudflare's edge without extra config), no Node-only APIs anywhere
  // in this project so it stays 100% compatible with Pages/Workers.
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
