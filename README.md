# React Apollo Starter

A starter for building a front-end for a graphql server

Features: 
 - [x] UI via [React](https://github.com/facebook/react)
 - [x] Data via [Apollo Client](https://github.com/apollographql/apollo-client)
 - [x] Code formatting via [Prettier](https://github.com/prettier/prettier)
 - [x] Linting via [ESLint](https://github.com/eslint/eslint)
 - [x] Testing via [Jest](https://github.com/facebook/jest)

## Requirements

Node>=9

## Configuration

### Code Formatting
Modify the `.prettierrc` as needed

### Linting
Modify the `.eslintrc` as needed

### WebpackConfig

Webpack configuration is based on `NODE_ENV` (default: `development`)

Shared configuration settings between environments go into `webpack.common.js` and environment-specific settings should go in their respective environment files (e.g `webpack.dev.js`) 

### App Config

By default, the app config is also determined by using the `NODE_ENV` environment variable. You can tell the application to use a specific config file by adding a `--config` flag:

```bash
npm run start --config=localprod.json
```

In the above example, `localprod.json` would be inside the `config` directory. 

## Development

A helper `init` script is provided that copies the `sample.json` file to `dev.json` in the `config/` directory:
```bash
npm run init
```

Install dependencies and run:
```bash
npm install
npm run start
```

To start a local server in production mode:
```bash
npm run start:prod --config=localprod.json
```

In the above example, this will look for a `localprod.json` config file in the `config` directory. You can create your own custom config as needed. 

If you want to see the webpack bundle analyzer render in a browser window:
```bash
npm run start:stats
```

## Production

Build the production bundle:
```bash
npm run build
```
Then deploy the `dist/` directory

## Testing
```bash
npm run test
```

## Linting
```bash
npm run lint
```

You can pass a `--fix` flag to automatically fix linting errors, if possible.

```bash
npm run lint --fix
```
