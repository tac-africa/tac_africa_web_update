const nextConfig = {
  reactStrictMode: true,
  // concurrentFeatures: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'imgix',
    path: '/',
  }
}

module.exports = nextConfig