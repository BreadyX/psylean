module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @use '@/scss/globals' as *;
        `
      }
    }
  }
};
