module.exports = {
  publicPath : process.env.NODE_ENV === 'production'
      ? '/vue-pwa/'
      : '/',
  outputDir: 'docs'
}
