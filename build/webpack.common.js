const webpack = require("webpack")
const paths = require("./paths")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    app: paths.entryPath
  },
  output: {
    chunkFilename: "[name].bundle.js",
    filename: "[name].bundle.js"
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        default: false,
        vendor: {
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  module: {
    rules: [
      {
        type: "javascript/auto",
        test: /\.mjs$/,
        exclude: /node_modules/,
        use: []
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: ["url-loader?limit=10000", "img-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader"
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".mjs", ".js", ".jsx"],
    alias: {
      "@": paths.sourceFolder,
      "@config": paths.configPath,
      "@tests": paths.testsFolder
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.templatePath,
      favicon: paths.faviconPath
    })
  ]
}
