module.exports = {
  outputDir: './server/dist',
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    progress: false,
    proxy: 'localhost:3000'
  }
};
