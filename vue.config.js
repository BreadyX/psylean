require('dotenv').config();

const { getEnv } = require('./src/globals');

const customElements = ['box-icon'];

module.exports = {
  outputDir: './src/server/dist',
  assetsDir: 'static',
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: (target) => customElements.includes(target)
        };
        return options;
      });
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    progress: false,
    allowedHosts: ['dev.psylean.it'],
    https: {
      key: 'src/server/sslcert/' + getEnv('SSL_KEY'),
      cert: 'src/server/sslcert/' + getEnv('SSL_CERT')
    },
    proxy: {
      '^/api': {
        target: 'https://localhost:' + getEnv('HTTPS_SERVER_PORT', 3000)
      }
    }
  }
};
