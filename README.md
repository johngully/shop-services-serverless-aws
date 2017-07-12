# Shop Services Serverless on AWS
> Services to support the shop examples implemented using serverless AWS Lambda

## Build Setup
```bash
# Install dependencies
npm install

# Invoke the product or products functions locally
npm run invoke-products
npm run invoke-product

# Deploy to AWS
npm run deploy
```

## Bootstrapping a new application
```bash
npm init
npm install -g serverless
serverless create --template aws-nodejs
```

##### Test the service
```bash
serverless invoke local --function hello
```


### Use webpack and babel
```bash
npm install webpack --save-dev babel-loader babel-core  babel-preset-es2015 webpack-node-externals
```

`.gitignore`
```
  .serverless
  .webpack
```

`.bablerc`
```json
{
  "presets": [
    "es2015"
  ]
}
```

`webpack.config.js`
```js
var nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './handler.js',
  target: 'node',
  externals: [nodeExternals()]
};
```

`serverless.yml`
```yml
service: shop-services-serverless-aws
  plugins:
    - serverless-webpack
  custom:
    webpackIncludeModules:
      packagePath: './package.json'
```

##### Test the service with webpack
Notice that `webpack` must be specified as the serverless command, so that the service will be transpiled before being loaded.
```bash
serverless webpack invoke --function hello
```
