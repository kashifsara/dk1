/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable if you want Vercel's image optimization
  },
}

module.exports = nextConfig