const common = require("./build/webpack.common")
const webpackMerge = require("webpack-merge")

const envs = {
  development: "dev",
  production: "prod",
  test: "test"
}

const env = envs[process.env.NODE_ENV || "development"]
const envConfig = require(`./build/webpack.${env}.js`)
module.exports = webpackMerge(common, envConfig)
