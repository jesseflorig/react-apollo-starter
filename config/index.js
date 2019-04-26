let env

const envs = {
  development: "dev",
  production: "prod",
  test: "test"
}

if (process.env.npm_config_config) {
  env = process.env.npm_config_config
} else {
  const envType = process.env.NODE_ENV || "development"
  env = `${envs[envType]}.json`
}

module.exports = require(`./${env}`)
