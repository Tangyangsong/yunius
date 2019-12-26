module.exports = {
  //process.env.NODE_ENV === 'production' ? '/53.com.cn/': './',
  publicPath: './',

  css: {
    loaderOptions: {
      sass: {
        data: '@import "./src/assets/css/style.scss";'
      },
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },

  assetsDir: 'static',
  lintOnSave:false,
  runtimeCompiler: true,

  // devServer: {
  //   proxy: "https://www.53.com.cn"
  // }
  productionSourceMap: true,

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  }
}
