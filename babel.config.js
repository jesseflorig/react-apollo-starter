const presets = [
  ["@babel/preset-env", { targets: { node: "current" } }],
  "@babel/preset-react"
]
const plugins = [
  "@babel/plugin-transform-runtime",
  "@babel/plugin-syntax-dynamic-import",
  "@babel/proposal-object-rest-spread",
  "@babel/plugin-proposal-class-properties",
  "react-hot-loader/babel",
  ["babel-plugin-webpack-aliases", { config: "./webpack.config.js" }],
  "import-graphql"
]

const env = {
  test: {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      ["@babel/preset-react"]
    ],
    plugins: [
      "@babel/plugin-transform-runtime",
      "babel-plugin-dynamic-import-node",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties",
      "react-hot-loader/babel",
      ["babel-plugin-webpack-aliases", { config: "./webpack.config.js" }],
      "import-graphql"
    ]
  }
}

module.exports = { presets, plugins, env }
