import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ucarecdn.com', 'flaticon.com'], // Add the hostname here
  },
}

export default nextConfig
