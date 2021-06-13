const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    API_URL: '',
    BASE_URL: 'http://localhost:3000',
  },
  future: {
    webpack5: true,
  },
}