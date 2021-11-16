require('dotenv').config();

module.exports = {
  outputDir: './src/server/dist',
  assetsDir: 'static',
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    progress: false,
    proxy: {
      '^/api': {
        target: 'http://localhost:' + process.env.SERVER_PORT
      }
    }
  }
};
