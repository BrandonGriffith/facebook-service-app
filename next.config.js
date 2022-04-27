/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['localhost', 'cdn3.iconfinder.com', 'images.freeimages.com',
    'platform-lookaside.fbsbx.com', 'firebasestorage.googleapis.com']
  }
}
module.exports = nextConfig
