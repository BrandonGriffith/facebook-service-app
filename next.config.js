/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'cdn3.iconfinder.com',
    'platform-lookaside.fbsbx.com', 'firebasestorage.googleapis.com']
  }
}
module.exports = nextConfig
