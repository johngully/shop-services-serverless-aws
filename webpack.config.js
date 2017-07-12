var nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './handler.js',
  target: 'node',
  externals: [nodeExternals()],
  // module: {
  //   loaders: [
  //     {
  //       test: /\.js(x?)$/,
  //       exclude: /node_modules/,
  //       loaders: ["babel-loader"]
  //     }
  //   ]
  // }
};
