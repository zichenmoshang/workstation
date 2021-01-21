const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // configureWebpack: {
  //     resolve: {
  //         alias: {
  //             'images': '@/assets/images',
  //         }
  //     }
  // },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@components", resolve("src/components"))
      .set("@images", resolve("src/assets/images"))
      .set("@views", resolve("src/pages"));
  },
  publicPath: "./",
  outputDir: "outputs/",
  devServer: {
    open: true,
    host: "localhost",
    port: 2325,
    https: false,
    hotOnly: false,
    // proxy: { // 配置跨域
    //     '/api': {
    //         target: 'http://localhost:2326/',
    //         ws: true,
    //         changeOrigin: true, // 允许跨域
    //         pathRewrite: {
    //             '^/api': '/'
    //         }
    //     }
    // },
    before: app => {}
  }
};
