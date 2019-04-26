const { resolve } = require("path")

module.exports = {
  root: resolve(__dirname, "../"),
  outputPath: resolve(__dirname, "../", "build"),
  entryPath: resolve(__dirname, "../", "src/index.jsx"),
  templatePath: resolve(__dirname, "../", "src/template.html"),
  faviconPath: resolve(__dirname, "../", "public/favicon.ico"),
  configPath: resolve(__dirname, "../", "config/index.js"),
  sourceFolder: resolve(__dirname, "../", "src"),
  testsFolder: resolve(__dirname, "../", "tests")
}
