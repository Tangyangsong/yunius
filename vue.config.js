module.exports = {
  publicPath: './',//process.env.NODE_ENV === 'production' ? '/53.com.cn/': './',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "./src/assets/css/style.scss";'
      }
    }
  },
  assetsDir: 'static',
  lintOnSave:false,
  runtimeCompiler: true,
  productionSourceMap: true,
  // devServer: {
  //   proxy: "https://www.53.com.cn"
  // }
}