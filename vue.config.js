module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-pwa/'
      : '/',
  outputDir: 'docs',
  // pwa: {
  //   workboxPluginMode: 'InjectManifest',
  //   workboxOptions: {
  //     swSrc: 'public/service-worker.js'
  //   }
  // }
}
