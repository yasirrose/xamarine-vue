// vue.config.js
console.log(`======== Building for URL `, process.env.VUE_APP_ENDPOINT, `========`)
module.exports = {
  runtimeCompiler: true,
  devServer: {
    port: 8081,
    proxy: {
      '^/api/v1': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: { '^/api': '/api' },
        logLevel: 'debug',
      }
    }
  }
};
