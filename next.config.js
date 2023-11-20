/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
    
        // pathname: '/account123/**',
      }
    ]
  }
}

module.exports = nextConfig
