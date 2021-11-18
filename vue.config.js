require('dotenv').config();

const { getEnv } = require('./src/globals');

module.exports = {
  outputDir: './src/server/dist',
  assetsDir: 'static',
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    progress: false,
    allowedHosts: ['dev.psylean.it'],
    https: {
      key: 'src/server/sslcert/' + getEnv('SSL_PRIVATE_KEY'),
      cert: 'src/server/sslcert/' + getEnv('SSL_CERTIFICATE')
    },
    proxy: {
      '^/api': {
        target: 'https://localhost:' + getEnv('HTTPS_SERVER_PORT', 3000)
      }
    }
  }
};
