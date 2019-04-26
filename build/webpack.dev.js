const webpack = require("webpack")
const paths = require("./paths")
const appConfig = require("../config")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

module.exports = {
  mode: "development",
  devtool: "cheap-eval-source-map",
  output: {
    path: paths.outputPath,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "eslint-loader",
            options: { emitError: true, failOnError: false }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          },
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  devServer: {
    port: appConfig.server.port,
    host: appConfig.server.host,
    progress: true,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: !!process.env.WITH_STATS
    })
  ]
}
