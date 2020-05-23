const { join, resolve } = require('path')
const { lib } = require('serverless-webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  context: __dirname,
  mode: lib.webpack.isLocal ? 'development' : 'production',
  entry: lib.entries,
  devtool: lib.webpack.isLocal ? 'cheap-module-eval-source-map' : 'source-map',
  resolve: {
    extensions: ['.mjs', '.json', '.ts'],
    symlinks: false,
    cacheWithContext: false,
  },
  output: {
    libraryTarget: 'commonjs',
    path: join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        loader: 'ts-loader',
        exclude: [
          [
            resolve(__dirname, 'node_modules'),
            resolve(__dirname, '.serverless'),
            resolve(__dirname, '.webpack'),
            resolve(__dirname, '.vscode'),
            resolve(__dirname, '.idea'),
          ],
        ],
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
    ],
  },
}
