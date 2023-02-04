/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif','image/webp'],
    domains: ['flagcdn.com','upload.wikimedia.org']
  }
}

module.exports = nextConfig
