const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

console.log("开启环境：", process.env.NODE_ENV);

module.exports = {
  publicPath: "/",
  outputDir: "dist",


  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        return options;
      });
    // 压缩代码
    config.optimization.minimize(true);
    // 分割代码
    config.optimization.splitChunks({
      chunks: "all"
    });
    config.performance
      .hints(false)
      .maxAssetSize(244)
      .maxEntrypointSize(244);
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.devtool = false;
    }
    config.plugins.push(
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].bundle.css"
      })
    );
  },

  lintOnSave: process.env.NODE_ENV !== "production",
  productionSourceMap: false,
  parallel: require("os").cpus().length > 1,

  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 9988,
    https: false,
    hotOnly: false,
    // proxy: {
    //   "/": {
    //     target: "http://localhost:10066",
    //     pathRewrite: { '^/api': '/' },
    //     xfwd: true,
    //     ws: false
    //   }
    // },
    // before: app => {},
    // 如果存在mock数据
    // before: require('./mock'),
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/theme/theme.less')
      ]
    }
  }
};
