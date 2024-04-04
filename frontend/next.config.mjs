/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ['image/webp'],
  },
  // webpack(config) {
  //   config.externals = {
  //     'sharp': 'commonjs sharp'
  //   }

  //   return config
  // },
}

export default nextConfig
