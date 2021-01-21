module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'images': '@/assets/images',
            }
        }
    },
    publicPath: "./",
    devServer: {
        open: true,
        host: 'localhost',
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
}