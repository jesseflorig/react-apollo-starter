require("@babel/register")
require("@babel/polyfill")

module.exports = {
  moduleFileExtensions: ["js", "jsx", "json"],
  coveragePathIgnorePatterns: ["/node_modules/", ".config.", ".json"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  globals: {
    NODE_ENV: "test"
  },
  verbose: true,
  roots: ["<rootDir>/src/"],
  moduleDirectories: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.jsx?$": "<rootDir>/tests/transformer.js"
  }
}
