const paths = require("./paths")

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
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          "sass-loader"
        ]
      }
    ]
  }
}
