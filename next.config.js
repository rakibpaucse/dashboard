module.exports = {
  reactStrictMode: true,
}
const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
}